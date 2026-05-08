import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import fs from 'fs'
import path from 'path'
import { DEFAULT_CONTENT } from '@/lib/content'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-this'
const CONTENT_DIR = path.join(process.cwd(), '.content')

// Verify authentication
async function verifyAuth() {
  const cookieStore = await cookies()
  const token = cookieStore.get('admin_token')?.value

  if (!token) {
    return false
  }

  try {
    jwt.verify(token, JWT_SECRET)
    return true
  } catch {
    return false
  }
}

// Ensure content directory exists
function ensureContentDir() {
  if (!fs.existsSync(CONTENT_DIR)) {
    fs.mkdirSync(CONTENT_DIR, { recursive: true })
  }
}

const defaultContent = DEFAULT_CONTENT as unknown as Record<string, Record<string, unknown>>

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ section: string }> }
) {
  try {
    const { section } = await params

    if (!section || !defaultContent[section]) {
      return NextResponse.json(
        { message: 'Invalid section' },
        { status: 400 }
      )
    }

    ensureContentDir()
    const contentFile = path.join(CONTENT_DIR, `${section}.json`)

    let content = defaultContent[section]

    if (fs.existsSync(contentFile)) {
      try {
        const fileContent = fs.readFileSync(contentFile, 'utf-8')
        content = JSON.parse(fileContent)
      } catch (error) {
        console.error(`Error reading ${section}.json:`, error)
      }
    }

    return NextResponse.json(content)
  } catch (error) {
    console.error('Content fetch error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ section: string }> }
) {
  try {
    // Check authentication
    const isAuthenticated = await verifyAuth()
    if (!isAuthenticated) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { section } = await params

    if (!section || !defaultContent[section]) {
      return NextResponse.json(
        { message: 'Invalid section' },
        { status: 400 }
      )
    }

    const body = await request.json()

    ensureContentDir()
    const contentFile = path.join(CONTENT_DIR, `${section}.json`)

    fs.writeFileSync(contentFile, JSON.stringify(body, null, 2))

    return NextResponse.json(
      { message: 'Content updated successfully', data: body },
      { status: 200 }
    )
  } catch (error) {
    console.error('Content update error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
