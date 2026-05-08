import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import { DEFAULT_CONTENT } from '@/lib/content'
import { getSectionContent, saveSectionContent } from '@/lib/content-store'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-this'

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

    const content = await getSectionContent(section as keyof typeof DEFAULT_CONTENT)

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

    await saveSectionContent(section as keyof typeof DEFAULT_CONTENT, body)

    return NextResponse.json(
      { message: 'Content updated successfully', data: body },
      { status: 200 }
    )
  } catch (error) {
    console.error('Content update error:', error)
    return NextResponse.json(
      { message: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    )
  }
}
