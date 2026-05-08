import { DEFAULT_CONTENT, type ContentSectionKey, type ContentSectionMap } from '@/lib/content'
import { readPersistentJson, writePersistentJson } from '@/lib/persistent-json'

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

export function mergeContent<T>(defaults: T, saved: unknown): T {
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

export async function getSectionContent<K extends ContentSectionKey>(section: K): Promise<ContentSectionMap[K]> {
  const defaults = DEFAULT_CONTENT[section]
  const savedContent = await readPersistentJson<unknown>(section, defaults)
  return mergeContent(defaults, savedContent)
}

export async function saveSectionContent<K extends ContentSectionKey>(section: K, value: unknown): Promise<void> {
  await writePersistentJson(section, value)
}

export async function getHomepageContent() {
  return {
    hero: await getSectionContent('hero'),
    trustBar: await getSectionContent('trust-bar'),
    benefits: await getSectionContent('benefits'),
    whyOrun: await getSectionContent('why-orun'),
    ingredients: await getSectionContent('ingredients'),
    texture: await getSectionContent('texture'),
    beforeAfter: await getSectionContent('before-after'),
    testimonials: await getSectionContent('testimonials'),
    stores: await getSectionContent('stores'),
    faq: await getSectionContent('faq'),
    finalCta: await getSectionContent('final-cta'),
  }
}