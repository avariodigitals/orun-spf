import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import { loadUsers, verifyPassword } from '../users/route'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-this'
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin'
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'password123'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { username, password } = body

    let role = ''

    // Check master admin credentials from env
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      role = 'admin'
    } else {
      // Check stored sub-users
      const users = loadUsers()
      const stored = users.find((u) => u.username === username)
      if (!stored || !verifyPassword(password, stored.passwordHash, stored.salt)) {
        return NextResponse.json(
          { message: 'Invalid username or password' },
          { status: 401 }
        )
      }
      role = stored.role
    }

    // Create JWT token
    const token = jwt.sign(
      { username, role },
      JWT_SECRET,
      { expiresIn: '7d' }
    )

    // Set cookie on response
    const response = NextResponse.json(
      { message: 'Login successful' },
      { status: 200 }
    )

    response.cookies.set('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60,
      path: '/',
    })

    return response
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
