import fs from 'fs'
import path from 'path'
import { kv } from '@vercel/kv'

const CONTENT_DIR = path.join(process.cwd(), '.content')

function hasKvConfig() {
  return Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN)
}

function isVercelRuntime() {
  return process.env.VERCEL === '1'
}

function resolveFilePath(key: string) {
  return path.join(CONTENT_DIR, `${key}.json`)
}

export async function readPersistentJson<T>(key: string, fallback: T): Promise<T> {
  if (hasKvConfig()) {
    try {
      const value = await kv.get<T>(key)
      return value ?? fallback
    } catch (error) {
      console.error(`KV read failed for ${key}:`, error)
    }
  }

  try {
    const filePath = resolveFilePath(key)
    if (!fs.existsSync(filePath)) {
      return fallback
    }

    return JSON.parse(fs.readFileSync(filePath, 'utf-8')) as T
  } catch (error) {
    console.error(`File read failed for ${key}:`, error)
    return fallback
  }
}

export async function writePersistentJson<T>(key: string, value: T): Promise<void> {
  if (hasKvConfig()) {
    await kv.set(key, value)
    return
  }

  if (isVercelRuntime()) {
    throw new Error('Persistent storage is not configured. Add a Redis/KV integration in Vercel and set KV_REST_API_URL and KV_REST_API_TOKEN.')
  }

  const filePath = resolveFilePath(key)
  const dir = path.dirname(filePath)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }

  fs.writeFileSync(filePath, JSON.stringify(value, null, 2))
}