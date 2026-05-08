import fs from 'fs'
import path from 'path'
import { DEFAULT_CONTENT, type ContentSectionKey, type ContentSectionMap } from '@/lib/content'

const CONTENT_DIR = path.join(process.cwd(), '.content')

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function mergeContent<T>(defaults: T, saved: unknown): T {
  if (Array.isArray(defaults)) {
    return (Array.isArray(saved) ? saved : defaults) as T
  }

  if (isPlainObject(defaults)) {
    if (!isPlainObject(saved)) {
      return defaults
    }

    const merged: Record<string, unknown> = { ...defaults }
    for (const key of Object.keys(saved)) {
      const defaultValue = (defaults as Record<string, unknown>)[key]
      const savedValue = saved[key]

      if (defaultValue === undefined) {
        merged[key] = savedValue
        continue
      }

      merged[key] = mergeContent(defaultValue, savedValue)
    }

    return merged as T
  }

  return (saved ?? defaults) as T
}

export function getSectionContent<K extends ContentSectionKey>(section: K): ContentSectionMap[K] {
  const defaults = DEFAULT_CONTENT[section]
  const contentFile = path.join(CONTENT_DIR, `${section}.json`)

  if (!fs.existsSync(contentFile)) {
    return defaults
  }

  try {
    const fileContent = fs.readFileSync(contentFile, 'utf-8')
    const savedContent = JSON.parse(fileContent) as unknown
    return mergeContent(defaults, savedContent)
  } catch (error) {
    console.error(`Error reading content for ${section}:`, error)
    return defaults
  }
}

export function getHomepageContent() {
  return {
    hero: getSectionContent('hero'),
    trustBar: getSectionContent('trust-bar'),
    benefits: getSectionContent('benefits'),
    whyOrun: getSectionContent('why-orun'),
    ingredients: getSectionContent('ingredients'),
    texture: getSectionContent('texture'),
    beforeAfter: getSectionContent('before-after'),
    testimonials: getSectionContent('testimonials'),
    stores: getSectionContent('stores'),
    faq: getSectionContent('faq'),
    finalCta: getSectionContent('final-cta'),
  }
}