import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import { scryptSync, randomBytes, timingSafeEqual } from 'crypto'
import { sendNewUserEmail } from '@/lib/email'
import { readPersistentJson, writePersistentJson } from '@/lib/persistent-json'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-this'
const USERS_KEY = 'users'

interface StoredUser {
  username: string
  email: string
  passwordHash: string
  salt: string
  role: string
}

export async function loadUsers(): Promise<StoredUser[]> {
  return readPersistentJson<StoredUser[]>(USERS_KEY, [])
}

async function saveUsers(users: StoredUser[]) {
  await writePersistentJson(USERS_KEY, users)
}

export function hashPassword(password: string): { hash: string; salt: string } {
  const salt = randomBytes(16).toString('hex')
  const hash = scryptSync(password, salt, 64).toString('hex')
  return { hash, salt }
}

export function verifyPassword(password: string, storedHash: string, salt: string): boolean {
  try {
    const hashBuffer = Buffer.from(storedHash, 'hex')
    const derivedHash = scryptSync(password, salt, 64)
    return timingSafeEqual(hashBuffer, derivedHash)
  } catch {
    return false
  }
}

async function getAuthUser(): Promise<{ username: string; role: string } | null> {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('admin_token')?.value
    if (!token) return null
    return jwt.verify(token, JWT_SECRET) as { username: string; role: string }
  } catch {
    return null
  }
}

// GET /api/auth/users — list all sub-users (no passwords)
export async function GET() {
  const authUser = await getAuthUser()
  if (!authUser) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })

  const users = await loadUsers()
  return NextResponse.json(users.map(({ username, email, role }) => ({ username, email, role })))
}

// POST /api/auth/users — create a new user (admin only)
export async function POST(request: NextRequest) {
  const authUser = await getAuthUser()
  if (!authUser || authUser.role !== 'admin') {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json()
  const { username, email = '', password, role = 'editor' } = body as {
    username: string
    email?: string
    password: string
    role?: string
  }

  if (!username || !password) {
    return NextResponse.json({ message: 'Username and password are required' }, { status: 400 })
  }
  if (username.length < 3) {
    return NextResponse.json({ message: 'Username must be at least 3 characters' }, { status: 400 })
  }
  if (password.length < 6) {
    return NextResponse.json({ message: 'Password must be at least 6 characters' }, { status: 400 })
  }

  const users = await loadUsers()
  if (users.find((u) => u.username === username)) {
    return NextResponse.json({ message: 'Username already exists' }, { status: 409 })
  }

  const { hash, salt } = hashPassword(password)
  users.push({ username, email, passwordHash: hash, salt, role })
  await saveUsers(users)

  // Send welcome email if an address was provided
  let emailNote = ''
  if (email) {
    try {
      await sendNewUserEmail({ toEmail: email, username, password, role })
      emailNote = ` · Welcome email sent to ${email}`
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Unknown error'
      emailNote = ` · Email not sent: ${msg}`
    }
  }

  return NextResponse.json({ message: `User created${emailNote}`, username, role }, { status: 201 })
}

// DELETE /api/auth/users — delete a user (admin only)
export async function DELETE(request: NextRequest) {
  const authUser = await getAuthUser()
  if (!authUser || authUser.role !== 'admin') {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json()
  const { username } = body as { username: string }

  if (!username) {
    return NextResponse.json({ message: 'Username is required' }, { status: 400 })
  }

  const users = await loadUsers()
  const filtered = users.filter((u) => u.username !== username)
  if (filtered.length === users.length) {
    return NextResponse.json({ message: 'User not found' }, { status: 404 })
  }

  await saveUsers(filtered)
  return NextResponse.json({ message: 'User deleted' })
}
