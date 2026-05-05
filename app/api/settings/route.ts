import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import fs from 'fs'
import path from 'path'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-this'
const SETTINGS_FILE = path.join(process.cwd(), '.content', 'settings.json')

export interface SiteSettings {
  googleSiteVerification: string
  googleAnalyticsId: string
  metaPixelId: string
  headScripts: string
  bodyScripts: string
  // SMTP / email
  smtpHost: string
  smtpPort: string
  smtpSecure: boolean
  smtpUser: string
  smtpPass: string
  smtpFrom: string
  siteUrl: string
}

const DEFAULT_SETTINGS: SiteSettings = {
  googleSiteVerification: '',
  googleAnalyticsId: '',
  metaPixelId: '',
  headScripts: '',
  bodyScripts: '',
  smtpHost: '',
  smtpPort: '587',
  smtpSecure: false,
  smtpUser: '',
  smtpPass: '',
  smtpFrom: '',
  siteUrl: '',
}

export function loadSettings(): SiteSettings {
  try {
    if (!fs.existsSync(SETTINGS_FILE)) return { ...DEFAULT_SETTINGS }
    return { ...DEFAULT_SETTINGS, ...JSON.parse(fs.readFileSync(SETTINGS_FILE, 'utf-8')) }
  } catch {
    return { ...DEFAULT_SETTINGS }
  }
}

function saveSettings(settings: SiteSettings) {
  const dir = path.dirname(SETTINGS_FILE)
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(SETTINGS_FILE, JSON.stringify(settings, null, 2))
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

export async function GET() {
  const authUser = await getAuthUser()
  if (!authUser) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  return NextResponse.json(loadSettings())
}

export async function POST(request: NextRequest) {
  const authUser = await getAuthUser()
  if (!authUser || authUser.role !== 'admin') {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json() as Partial<SiteSettings>
  const current = loadSettings()
  const toStringValue = (v: unknown, fallback: string) => {
    if (typeof v !== 'string') return fallback
    return v.trim()
  }
  const updated: SiteSettings = {
    googleSiteVerification: toStringValue(body.googleSiteVerification, current.googleSiteVerification),
    googleAnalyticsId: toStringValue(body.googleAnalyticsId, current.googleAnalyticsId),
    metaPixelId: toStringValue(body.metaPixelId, current.metaPixelId),
    headScripts: typeof body.headScripts === 'string' ? body.headScripts : current.headScripts,
    bodyScripts: typeof body.bodyScripts === 'string' ? body.bodyScripts : current.bodyScripts,
    smtpHost: toStringValue(body.smtpHost, current.smtpHost),
    smtpPort: toStringValue(body.smtpPort, current.smtpPort),
    smtpSecure: body.smtpSecure ?? current.smtpSecure,
    smtpUser: toStringValue(body.smtpUser, current.smtpUser),
    smtpPass: toStringValue(body.smtpPass, current.smtpPass),
    smtpFrom: toStringValue(body.smtpFrom, current.smtpFrom),
    siteUrl: toStringValue(body.siteUrl, current.siteUrl),
  }

  saveSettings(updated)
  return NextResponse.json({ message: 'Settings saved' })
}
