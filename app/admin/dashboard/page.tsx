'use client'
import { useEffect, useMemo, useState, type ReactNode } from 'react'
import {
  ChevronRight,
  HelpCircle,
  ImageIcon,
  LayoutTemplate,
  ListChecks,
  LogOut,
  MessageSquare,
  Settings,
  Shield,
  Sparkles,
  Store,
  Trash2,
  UserPlus,
  Users,
} from 'lucide-react'

type FieldType = 'text' | 'textarea' | 'url' | 'number'

interface FieldDef {
  path: string
  label: string
  type: FieldType
}

interface SectionDef {
  id: string
  title: string
  icon: ReactNode
  help: string
  fields: FieldDef[]
}

const SECTIONS: SectionDef[] = [
  {
    id: 'hero',
    title: 'Hero',
    icon: <LayoutTemplate size={16} />,
    help: 'Main hero text, CTAs and feature badges.',
    fields: [
      { path: 'badge', label: 'Badge text', type: 'text' },
      { path: 'lines.0', label: 'Headline line 1', type: 'text' },
      { path: 'lines.1', label: 'Headline line 2', type: 'text' },
      { path: 'lines.2', label: 'Headline line 3', type: 'text' },
      { path: 'sub', label: 'Sub text', type: 'textarea' },
      { path: 'ctaMain', label: 'Primary CTA', type: 'text' },
      { path: 'ctaSub', label: 'Secondary CTA', type: 'text' },
      { path: 'benefits.0.label', label: 'Badge 1 title', type: 'text' },
      { path: 'benefits.0.note', label: 'Badge 1 note', type: 'text' },
      { path: 'benefits.1.label', label: 'Badge 2 title', type: 'text' },
      { path: 'benefits.1.note', label: 'Badge 2 note', type: 'text' },
      { path: 'benefits.2.label', label: 'Badge 3 title', type: 'text' },
      { path: 'benefits.2.note', label: 'Badge 3 note', type: 'text' },
      { path: 'benefits.3.label', label: 'Badge 4 title', type: 'text' },
      { path: 'benefits.3.note', label: 'Badge 4 note', type: 'text' },
    ],
  },
  {
    id: 'trust-bar',
    title: 'Trust Bar',
    icon: <Shield size={16} />,
    help: 'Trust strip labels and notes.',
    fields: [
      { path: 'items.0.label', label: 'Item 1 label', type: 'text' },
      { path: 'items.0.note', label: 'Item 1 note', type: 'text' },
      { path: 'items.1.label', label: 'Item 2 label', type: 'text' },
      { path: 'items.1.note', label: 'Item 2 note', type: 'text' },
      { path: 'items.2.label', label: 'Item 3 label', type: 'text' },
      { path: 'items.2.note', label: 'Item 3 note', type: 'text' },
      { path: 'items.3.label', label: 'Item 4 label', type: 'text' },
      { path: 'items.3.note', label: 'Item 4 note', type: 'text' },
      { path: 'items.4.label', label: 'Item 5 label', type: 'text' },
      { path: 'items.4.note', label: 'Item 5 note', type: 'text' },
    ],
  },
  {
    id: 'benefits',
    title: 'Benefits',
    icon: <ListChecks size={16} />,
    help: 'Benefits headline, checklist and cards.',
    fields: [
      { path: 'tag', label: 'Tag', type: 'text' },
      { path: 'title', label: 'Title', type: 'text' },
      { path: 'desc', label: 'Description', type: 'textarea' },
      { path: 'list.0', label: 'Checklist 1', type: 'text' },
      { path: 'list.1', label: 'Checklist 2', type: 'text' },
      { path: 'list.2', label: 'Checklist 3', type: 'text' },
      { path: 'list.3', label: 'Checklist 4', type: 'text' },
      { path: 'list.4', label: 'Checklist 5', type: 'text' },
      { path: 'cards.0.title', label: 'Card 1 title', type: 'text' },
      { path: 'cards.0.body', label: 'Card 1 body', type: 'textarea' },
      { path: 'cards.1.title', label: 'Card 2 title', type: 'text' },
      { path: 'cards.1.body', label: 'Card 2 body', type: 'textarea' },
    ],
  },
  {
    id: 'why-orun',
    title: 'Why ORUN',
    icon: <Sparkles size={16} />,
    help: 'Brand story section copy and bullets.',
    fields: [
      { path: 'tag', label: 'Tag', type: 'text' },
      { path: 'titleTop', label: 'Title top', type: 'text' },
      { path: 'titleAccent', label: 'Title accent', type: 'text' },
      { path: 'titleBottom', label: 'Title bottom', type: 'text' },
      { path: 'desc', label: 'Description', type: 'textarea' },
      { path: 'points.0.title', label: 'Point 1 title', type: 'text' },
      { path: 'points.0.body', label: 'Point 1 body', type: 'textarea' },
      { path: 'points.1.title', label: 'Point 2 title', type: 'text' },
      { path: 'points.1.body', label: 'Point 2 body', type: 'textarea' },
      { path: 'points.2.title', label: 'Point 3 title', type: 'text' },
      { path: 'points.2.body', label: 'Point 3 body', type: 'textarea' },
      { path: 'points.3.title', label: 'Point 4 title', type: 'text' },
      { path: 'points.3.body', label: 'Point 4 body', type: 'textarea' },
    ],
  },
  {
    id: 'ingredients',
    title: 'Ingredients',
    icon: <Sparkles size={16} />,
    help: 'Ingredient names and descriptions.',
    fields: [
      { path: 'tag', label: 'Tag', type: 'text' },
      { path: 'title', label: 'Title', type: 'text' },
    ],
  },
  {
    id: 'texture',
    title: 'Texture',
    icon: <ImageIcon size={16} />,
    help: 'Texture section text and usage steps.',
    fields: [
      { path: 'tag', label: 'Tag', type: 'text' },
      { path: 'title', label: 'Title', type: 'text' },
      { path: 'desc', label: 'Description', type: 'textarea' },
      { path: 'steps.0.title', label: 'Step 1 title', type: 'text' },
      { path: 'steps.0.desc', label: 'Step 1 description', type: 'textarea' },
      { path: 'steps.1.title', label: 'Step 2 title', type: 'text' },
      { path: 'steps.1.desc', label: 'Step 2 description', type: 'textarea' },
      { path: 'steps.2.title', label: 'Step 3 title', type: 'text' },
      { path: 'steps.2.desc', label: 'Step 3 description', type: 'textarea' },
      { path: 'steps.3.title', label: 'Step 4 title', type: 'text' },
      { path: 'steps.3.desc', label: 'Step 4 description', type: 'textarea' },
      { path: 'badgeTitle', label: 'Image badge title', type: 'text' },
      { path: 'badgeSub', label: 'Image badge subtitle', type: 'text' },
    ],
  },
  {
    id: 'before-after',
    title: 'Before & After',
    icon: <ImageIcon size={16} />,
    help: 'Results section headline, labels and CTA.',
    fields: [
      { path: 'tag', label: 'Tag', type: 'text' },
      { path: 'titleTop', label: 'Title top', type: 'text' },
      { path: 'titleAccent', label: 'Title accent', type: 'text' },
      { path: 'description', label: 'Description', type: 'textarea' },
      { path: 'withoutLabel', label: 'Left image label', type: 'text' },
      { path: 'withLabel', label: 'Right image label', type: 'text' },
      { path: 'ctaHeading', label: 'CTA heading', type: 'text' },
      { path: 'ctaBody', label: 'CTA body', type: 'textarea' },
      { path: 'ctaButton', label: 'CTA button label', type: 'text' },
    ],
  },
  {
    id: 'testimonials',
    title: 'Testimonials',
    icon: <MessageSquare size={16} />,
    help: 'Testimonials heading and reviews.',
    fields: [
      { path: 'tag', label: 'Tag', type: 'text' },
      { path: 'title', label: 'Title', type: 'text' },
    ],
  },
  {
    id: 'stores',
    title: 'Store Locator',
    icon: <Store size={16} />,
    help: 'Store list and delivery CTA block.',
    fields: [
      { path: 'tag', label: 'Tag', type: 'text' },
      { path: 'title', label: 'Title', type: 'text' },
      { path: 'desc', label: 'Description', type: 'textarea' },
      { path: 'deliveryTitle', label: 'Delivery box title', type: 'text' },
      { path: 'deliveryBody', label: 'Delivery box text', type: 'textarea' },
      { path: 'deliveryCta', label: 'Delivery button label', type: 'text' },
    ],
  },
  {
    id: 'faq',
    title: 'FAQ',
    icon: <HelpCircle size={16} />,
    help: 'FAQ heading plus 6 Q&A items.',
    fields: [
      { path: 'tag', label: 'Tag', type: 'text' },
      { path: 'title', label: 'Title', type: 'text' },
      { path: 'items.0.q', label: 'Q1', type: 'text' },
      { path: 'items.0.a', label: 'A1', type: 'textarea' },
      { path: 'items.1.q', label: 'Q2', type: 'text' },
      { path: 'items.1.a', label: 'A2', type: 'textarea' },
      { path: 'items.2.q', label: 'Q3', type: 'text' },
      { path: 'items.2.a', label: 'A3', type: 'textarea' },
      { path: 'items.3.q', label: 'Q4', type: 'text' },
      { path: 'items.3.a', label: 'A4', type: 'textarea' },
      { path: 'items.4.q', label: 'Q5', type: 'text' },
      { path: 'items.4.a', label: 'A5', type: 'textarea' },
      { path: 'items.5.q', label: 'Q6', type: 'text' },
      { path: 'items.5.a', label: 'A6', type: 'textarea' },
    ],
  },
  {
    id: 'final-cta',
    title: 'Final CTA',
    icon: <Sparkles size={16} />,
    help: 'Final call-to-action and trust points.',
    fields: [
      { path: 'title', label: 'Title', type: 'text' },
      { path: 'sub', label: 'Subtitle', type: 'textarea' },
      { path: 'cta', label: 'Button label', type: 'text' },
      { path: 'trustPoints.0', label: 'Trust point 1', type: 'text' },
      { path: 'trustPoints.1', label: 'Trust point 2', type: 'text' },
      { path: 'trustPoints.2', label: 'Trust point 3', type: 'text' },
      { path: 'trustPoints.3', label: 'Trust point 4', type: 'text' },
    ],
  },
]

function getPathValue(source: unknown, path: string): unknown {
  const keys = path.split('.')
  let current: unknown = source

  for (const key of keys) {
    if (current == null) return undefined
    if (Array.isArray(current)) {
      const index = Number(key)
      if (Number.isNaN(index)) return undefined
      current = current[index]
    } else if (typeof current === 'object') {
      current = (current as Record<string, unknown>)[key]
    } else {
      return undefined
    }
  }

  return current
}

function setPathValue(target: Record<string, unknown>, path: string, value: unknown) {
  const keys = path.split('.')
  let current: Record<string, unknown> | unknown[] = target

  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i]
    const isLast = i === keys.length - 1
    const nextIsIndex = !Number.isNaN(Number(keys[i + 1]))

    if (Array.isArray(current)) {
      const index = Number(key)
      if (Number.isNaN(index)) return
      if (isLast) {
        current[index] = value
        return
      }
      if (current[index] == null) {
        current[index] = nextIsIndex ? [] : {}
      }
      current = current[index] as Record<string, unknown> | unknown[]
      continue
    }

    if (isLast) {
      current[key] = value
      return
    }

    if (current[key] == null || typeof current[key] !== 'object') {
      current[key] = nextIsIndex ? [] : {}
    }
    current = current[key] as Record<string, unknown> | unknown[]
  }
}

function FieldInput({
  field,
  value,
  onChange,
}: {
  field: FieldDef
  value: string
  onChange: (nextValue: string) => void
}) {
  const baseStyle = {
    width: '100%',
    border: '1px solid #E6D8CA',
    borderRadius: '10px',
    padding: '0.7rem 0.85rem',
    fontSize: '14px',
    color: '#1A0E04',
    background: '#FFFDFC',
    boxSizing: 'border-box' as const,
  }

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label style={{ display: 'block', fontSize: '12px', marginBottom: '0.35rem', color: '#6F513A', fontWeight: 700 }}>
        {field.label}
      </label>
      {field.type === 'textarea' ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
          style={{ ...baseStyle, resize: 'vertical', lineHeight: 1.55 }}
        />
      ) : (
        <input
          type={field.type === 'number' ? 'number' : field.type === 'url' ? 'url' : 'text'}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={baseStyle}
        />
      )}
    </div>
  )
}

function SectionEditor({ section }: { section: SectionDef }) {
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [rawData, setRawData] = useState<Record<string, unknown>>({})
  const [values, setValues] = useState<Record<string, string>>({})

  const supportsDynamicItems =
    section.id === 'ingredients' || section.id === 'testimonials' || section.id === 'stores'

  const items = Array.isArray(rawData.items)
    ? (rawData.items as Record<string, unknown>[])
    : []

  const updateItems = (nextItems: Record<string, unknown>[]) => {
    setRawData((prev) => ({ ...prev, items: nextItems }))
  }

  const updateItemField = (index: number, key: string, value: string) => {
    const nextItems = [...items]
    const current = (nextItems[index] ?? {}) as Record<string, unknown>
    const parsedValue = key === 'rating' ? Number(value || 0) : value
    nextItems[index] = { ...current, [key]: parsedValue }
    updateItems(nextItems)
  }

  const addItem = () => {
    if (section.id === 'ingredients') {
      updateItems([
        ...items,
        {
          icon: 'Sparkles',
          name: 'New Ingredient',
          bg: '#F7EDD8',
          desc: 'Ingredient description',
        },
      ])
      return
    }

    if (section.id === 'testimonials') {
      updateItems([
        ...items,
        {
          text: 'Customer review text',
          name: 'Customer Name',
          location: 'City, Nigeria',
          rating: 5,
        },
      ])
      return
    }

    if (section.id === 'stores') {
      updateItems([
        ...items,
        {
          name: 'Store Name',
          address: 'Street Address',
          city: 'City',
          state: 'State',
          phone: '+234',
          mapUrl: 'https://maps.google.com/',
        },
      ])
    }
  }

  const removeItem = (index: number) => {
    updateItems(items.filter((_, i) => i !== index))
  }

  const moveItem = (index: number, direction: -1 | 1) => {
    const target = index + direction
    if (target < 0 || target >= items.length) return

    const nextItems = [...items]
    const temp = nextItems[index]
    nextItems[index] = nextItems[target]
    nextItems[target] = temp
    updateItems(nextItems)
  }

  useEffect(() => {
    let isMounted = true
    setLoading(true)

    fetch(`/api/content/${section.id}`)
      .then((res) => res.json())
      .then((data: Record<string, unknown>) => {
        if (!isMounted) return
        setRawData(data)
        const nextValues: Record<string, string> = {}
        section.fields.forEach((field) => {
          const value = getPathValue(data, field.path)
          nextValues[field.path] = value == null ? '' : String(value)
        })
        setValues(nextValues)
      })
      .finally(() => {
        if (isMounted) setLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [section.id, section.fields])

  const handleSave = async () => {
    setSaving(true)
    try {
      const payload = JSON.parse(JSON.stringify(rawData || {})) as Record<string, unknown>

      section.fields.forEach((field) => {
        const value = values[field.path] ?? ''
        if (field.type === 'number') {
          const numericValue = Number(value)
          setPathValue(payload, field.path, Number.isFinite(numericValue) ? numericValue : 0)
        } else {
          setPathValue(payload, field.path, value)
        }
      })

      const res = await fetch(`/api/content/${section.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (res.ok) {
        setRawData(payload)
        setSaved(true)
        setTimeout(() => setSaved(false), 2000)
      }
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return <div style={{ color: '#8E735D' }}>Loading section...</div>
  }

  return (
    <div style={{ background: 'white', border: '1px solid #EFE3D8', borderRadius: '14px', padding: '1.25rem 1.25rem 1rem' }}>
      <p style={{ marginTop: 0, marginBottom: '1rem', color: '#8E735D', fontSize: '13px' }}>{section.help}</p>

      {section.fields.map((field) => (
        <FieldInput
          key={field.path}
          field={field}
          value={values[field.path] ?? ''}
          onChange={(nextValue) => setValues((prev) => ({ ...prev, [field.path]: nextValue }))}
        />
      ))}

      {supportsDynamicItems && (
        <div style={{ marginTop: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
            <p style={{ margin: 0, fontSize: '12px', fontWeight: 700, color: '#6F513A' }}>Items</p>
            <button
              type="button"
              onClick={addItem}
              style={{
                border: '1px solid #C8541F',
                background: 'white',
                color: '#C8541F',
                borderRadius: '8px',
                padding: '0.35rem 0.65rem',
                fontSize: '12px',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              Add Item
            </button>
          </div>

          {items.map((item, index) => (
            <div
              key={`${section.id}-${index}`}
              style={{
                border: '1px solid #EFE3D8',
                borderRadius: '10px',
                padding: '0.9rem',
                marginBottom: '0.75rem',
                background: '#FFFEFD',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
                <p style={{ margin: 0, fontSize: '12px', fontWeight: 700, color: '#6F513A' }}>
                  {section.id === 'stores' ? `Store ${index + 1}` : section.id === 'testimonials' ? `Review ${index + 1}` : `Ingredient ${index + 1}`}
                </p>
                <div style={{ display: 'flex', gap: '0.4rem' }}>
                  <button
                    type="button"
                    onClick={() => moveItem(index, -1)}
                    disabled={index === 0}
                    style={{
                      border: '1px solid #E0C9B5',
                      background: '#fff',
                      color: '#8A4F2B',
                      borderRadius: '8px',
                      padding: '0.25rem 0.45rem',
                      fontSize: '12px',
                      fontWeight: 700,
                      cursor: index === 0 ? 'not-allowed' : 'pointer',
                      opacity: index === 0 ? 0.45 : 1,
                    }}
                  >
                    Up
                  </button>
                  <button
                    type="button"
                    onClick={() => moveItem(index, 1)}
                    disabled={index === items.length - 1}
                    style={{
                      border: '1px solid #E0C9B5',
                      background: '#fff',
                      color: '#8A4F2B',
                      borderRadius: '8px',
                      padding: '0.25rem 0.45rem',
                      fontSize: '12px',
                      fontWeight: 700,
                      cursor: index === items.length - 1 ? 'not-allowed' : 'pointer',
                      opacity: index === items.length - 1 ? 0.45 : 1,
                    }}
                  >
                    Down
                  </button>
                  <button
                    type="button"
                    onClick={() => removeItem(index)}
                    style={{
                      border: '1px solid #E0C9B5',
                      background: '#fff',
                      color: '#8A4F2B',
                      borderRadius: '8px',
                      padding: '0.25rem 0.55rem',
                      fontSize: '12px',
                      fontWeight: 700,
                      cursor: 'pointer',
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>

              {section.id === 'ingredients' && (
                <>
                  <FieldInput
                    field={{ path: `items.${index}.name`, label: 'Name', type: 'text' }}
                    value={String(item.name ?? '')}
                    onChange={(nextValue) => updateItemField(index, 'name', nextValue)}
                  />
                  <FieldInput
                    field={{ path: `items.${index}.desc`, label: 'Description', type: 'textarea' }}
                    value={String(item.desc ?? '')}
                    onChange={(nextValue) => updateItemField(index, 'desc', nextValue)}
                  />
                </>
              )}

              {section.id === 'testimonials' && (
                <>
                  <FieldInput
                    field={{ path: `items.${index}.text`, label: 'Review Text', type: 'textarea' }}
                    value={String(item.text ?? '')}
                    onChange={(nextValue) => updateItemField(index, 'text', nextValue)}
                  />
                  <FieldInput
                    field={{ path: `items.${index}.name`, label: 'Customer Name', type: 'text' }}
                    value={String(item.name ?? '')}
                    onChange={(nextValue) => updateItemField(index, 'name', nextValue)}
                  />
                  <FieldInput
                    field={{ path: `items.${index}.location`, label: 'Location', type: 'text' }}
                    value={String(item.location ?? '')}
                    onChange={(nextValue) => updateItemField(index, 'location', nextValue)}
                  />
                  <FieldInput
                    field={{ path: `items.${index}.rating`, label: 'Rating (1-5)', type: 'number' }}
                    value={String(item.rating ?? 5)}
                    onChange={(nextValue) => updateItemField(index, 'rating', nextValue)}
                  />
                </>
              )}

              {section.id === 'stores' && (
                <>
                  <FieldInput
                    field={{ path: `items.${index}.name`, label: 'Store Name', type: 'text' }}
                    value={String(item.name ?? '')}
                    onChange={(nextValue) => updateItemField(index, 'name', nextValue)}
                  />
                  <FieldInput
                    field={{ path: `items.${index}.address`, label: 'Address', type: 'text' }}
                    value={String(item.address ?? '')}
                    onChange={(nextValue) => updateItemField(index, 'address', nextValue)}
                  />
                  <FieldInput
                    field={{ path: `items.${index}.city`, label: 'City', type: 'text' }}
                    value={String(item.city ?? '')}
                    onChange={(nextValue) => updateItemField(index, 'city', nextValue)}
                  />
                  <FieldInput
                    field={{ path: `items.${index}.state`, label: 'State', type: 'text' }}
                    value={String(item.state ?? '')}
                    onChange={(nextValue) => updateItemField(index, 'state', nextValue)}
                  />
                  <FieldInput
                    field={{ path: `items.${index}.phone`, label: 'Phone', type: 'text' }}
                    value={String(item.phone ?? '')}
                    onChange={(nextValue) => updateItemField(index, 'phone', nextValue)}
                  />
                  <FieldInput
                    field={{ path: `items.${index}.mapUrl`, label: 'Map URL', type: 'url' }}
                    value={String(item.mapUrl ?? '')}
                    onChange={(nextValue) => updateItemField(index, 'mapUrl', nextValue)}
                  />
                </>
              )}
            </div>
          ))}
        </div>
      )}

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.75rem' }}>
        <button
          onClick={handleSave}
          disabled={saving}
          style={{
            background: '#C8541F',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            padding: '0.7rem 1.2rem',
            fontWeight: 700,
            cursor: saving ? 'not-allowed' : 'pointer',
            opacity: saving ? 0.65 : 1,
          }}
        >
          {saving ? 'Saving...' : 'Save Changes'}
        </button>
        {saved && <span style={{ color: '#2F7D32', fontSize: '13px', fontWeight: 700 }}>Saved</span>}
      </div>
    </div>
  )
}

function UsersPanel() {
  const [users, setUsers] = useState<{ username: string; email: string; role: string }[]>([])
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState({ username: '', email: '', password: '', role: 'editor' })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const fetchUsers = async () => {
    const res = await fetch('/api/auth/users')
    if (res.ok) setUsers(await res.json())
    setLoading(false)
  }

  useEffect(() => { fetchUsers() }, [])

  const handleCreate = async () => {
    setError(''); setSuccess('')
    if (!form.username || !form.password) { setError('Username and password are required'); return }
    const res = await fetch('/api/auth/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    const data = await res.json()
    if (!res.ok) { setError(data.message); return }
    setSuccess(data.message || `User "${form.username}" created`)
    setForm({ username: '', email: '', password: '', role: 'editor' })
    fetchUsers()
  }

  const handleDelete = async (username: string) => {
    if (!confirm(`Delete user "${username}"?`)) return
    const res = await fetch('/api/auth/users', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username }),
    })
    if (res.ok) { setSuccess(`User "${username}" deleted`); fetchUsers() }
  }

  const inputStyle = {
    border: '1px solid #E6D8CA', borderRadius: '10px', padding: '0.65rem 0.85rem',
    fontSize: '14px', color: '#1A0E04', background: '#FFFDFC', width: '100%',
    boxSizing: 'border-box' as const,
  }

  return (
    <div>
      <p style={{ fontSize: '13px', color: '#9D7F66', marginBottom: '1.5rem' }}>
        Create sub-users who can log in and edit content. The master admin account is set via environment variables and cannot be managed here.
      </p>

      {/* Create form */}
      <div style={{ background: '#FFFDFC', border: '1px solid #E6D8CA', borderRadius: '14px', padding: '1.25rem', marginBottom: '1.75rem' }}>
        <p style={{ fontSize: '13px', fontWeight: 700, color: '#1A0E04', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <UserPlus size={15} /> New User
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.75rem' }}>
          <div>
            <label style={{ fontSize: '12px', fontWeight: 700, color: '#6F513A', display: 'block', marginBottom: '0.3rem' }}>Username</label>
            <input style={inputStyle} value={form.username} placeholder="e.g. editor1" onChange={(e) => setForm({ ...form, username: e.target.value })} />
          </div>
          <div>
            <label style={{ fontSize: '12px', fontWeight: 700, color: '#6F513A', display: 'block', marginBottom: '0.3rem' }}>Password</label>
            <input style={inputStyle} type="password" value={form.password} placeholder="Min. 6 characters" onChange={(e) => setForm({ ...form, password: e.target.value })} />
          </div>
        </div>
        <div style={{ marginBottom: '0.75rem' }}>
          <label style={{ fontSize: '12px', fontWeight: 700, color: '#6F513A', display: 'block', marginBottom: '0.3rem' }}>Email <span style={{ fontWeight: 400, color: '#9D7F66' }}>(optional — receives welcome email with credentials)</span></label>
          <input style={inputStyle} type="email" value={form.email} placeholder="user@example.com" onChange={(e) => setForm({ ...form, email: e.target.value })} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ fontSize: '12px', fontWeight: 700, color: '#6F513A', display: 'block', marginBottom: '0.3rem' }}>Role</label>
          <select style={{ ...inputStyle }} value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        {error && <p style={{ fontSize: '13px', color: '#C0392B', marginBottom: '0.75rem' }}>{error}</p>}
        {success && <p style={{ fontSize: '13px', color: '#2F7D32', marginBottom: '0.75rem' }}>{success}</p>}
        <button
          onClick={handleCreate}
          style={{ background: '#C8541F', color: 'white', border: 'none', borderRadius: '10px', padding: '0.65rem 1.2rem', fontWeight: 700, cursor: 'pointer', fontSize: '13px' }}
        >
          Create User
        </button>
      </div>

      {/* User list */}
      <div style={{ background: '#FFFDFC', border: '1px solid #E6D8CA', borderRadius: '14px', overflow: 'hidden' }}>
        <p style={{ fontSize: '12px', fontWeight: 700, color: '#6F513A', padding: '0.9rem 1.25rem', borderBottom: '1px solid #E6D8CA', margin: 0 }}>
          Sub-Users ({users.length})
        </p>
        {loading ? (
          <p style={{ padding: '1rem 1.25rem', fontSize: '13px', color: '#9D7F66' }}>Loading...</p>
        ) : users.length === 0 ? (
          <p style={{ padding: '1rem 1.25rem', fontSize: '13px', color: '#9D7F66' }}>No sub-users yet.</p>
        ) : (
          users.map((u) => (
            <div key={u.username} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 1.25rem', borderBottom: '1px solid #F3EAE0' }}>
              <div>
                <span style={{ fontSize: '14px', fontWeight: 600, color: '#1A0E04' }}>{u.username}</span>
                <span style={{ fontSize: '11px', color: '#9D7F66', marginLeft: '8px', background: '#F3EAE0', padding: '2px 8px', borderRadius: '20px' }}>{u.role}</span>
                {u.email && <span style={{ fontSize: '11px', color: '#9D7F66', marginLeft: '6px' }}>{u.email}</span>}
              </div>
              <button
                onClick={() => handleDelete(u.username)}
                style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#C0392B', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px' }}
              >
                <Trash2 size={13} /> Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

function SettingsPanel() {
  const [values, setValues] = useState({
    googleSiteVerification: '',
    googleAnalyticsId: '',
    metaPixelId: '',
    headScripts: '',
    bodyScripts: '',
    smtpHost: '',
    smtpPort: '587',
    smtpSecure: false as boolean,
    smtpUser: '',
    smtpPass: '',
    smtpFrom: '',
    siteUrl: '',
  })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    fetch('/api/settings').then((r) => r.json()).then((data) => {
      setValues((prev) => ({ ...prev, ...data }))
      setLoading(false)
    })
  }, [])

  const handleSave = async () => {
    setSaving(true); setSaved(false)
    await fetch('/api/settings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    })
    setSaving(false); setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  const inputStyle = {
    border: '1px solid #E6D8CA', borderRadius: '10px', padding: '0.65rem 0.85rem',
    fontSize: '14px', color: '#1A0E04', background: '#FFFDFC', width: '100%',
    boxSizing: 'border-box' as const,
  }
  const labelStyle = { fontSize: '12px', fontWeight: 700 as const, color: '#6F513A', display: 'block' as const, marginBottom: '0.3rem' }
  const noteStyle = { fontSize: '11px', color: '#9D7F66', marginTop: '0.3rem' }
  const groupStyle = { background: '#FFFDFC', border: '1px solid #E6D8CA', borderRadius: '14px', padding: '1.25rem', marginBottom: '1.25rem' }
  const groupTitle = { fontSize: '12px', fontWeight: 700 as const, textTransform: 'uppercase' as const, letterSpacing: '0.1em', color: '#C8541F', marginBottom: '1rem' }

  if (loading) return <p style={{ color: '#9D7F66', fontSize: '13px' }}>Loading...</p>

  return (
    <div>
      <p style={{ fontSize: '13px', color: '#9D7F66', marginBottom: '1.5rem' }}>
        Configure third-party integrations. Changes take effect on the next page load.
      </p>

      {/* Search Console */}
      <div style={groupStyle}>
        <p style={groupTitle}>Google Search Console</p>
        <label style={labelStyle}>Verification Tag Content</label>
        <input style={inputStyle} value={values.googleSiteVerification} placeholder="Paste only the content=&quot;...&quot; value here" onChange={(e) => setValues({ ...values, googleSiteVerification: e.target.value })} />
        <p style={noteStyle}>From the HTML tag option: &lt;meta name=&quot;google-site-verification&quot; content=&quot;<strong>PASTE_HERE</strong>&quot;&gt;</p>
      </div>

      {/* Analytics */}
      <div style={groupStyle}>
        <p style={groupTitle}>Google Analytics (GA4)</p>
        <label style={labelStyle}>Measurement ID</label>
        <input style={inputStyle} value={values.googleAnalyticsId} placeholder="G-XXXXXXXXXX" onChange={(e) => setValues({ ...values, googleAnalyticsId: e.target.value })} />
        <p style={noteStyle}>Found in GA4 → Admin → Data Streams → your stream</p>
      </div>

      {/* Meta Pixel */}
      <div style={groupStyle}>
        <p style={groupTitle}>Meta Pixel (Facebook)</p>
        <label style={labelStyle}>Pixel ID</label>
        <input style={inputStyle} value={values.metaPixelId} placeholder="123456789012345" onChange={(e) => setValues({ ...values, metaPixelId: e.target.value })} />
        <p style={noteStyle}>Found in Meta Business Manager → Events Manager → your pixel</p>
      </div>

      {/* Head Scripts */}
      <div style={groupStyle}>
        <p style={groupTitle}>Custom Head Scripts</p>
        <label style={labelStyle}>Paste full &lt;script&gt; tags or HTML — injected inside &lt;head&gt;</label>
        <textarea
          style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.55, fontFamily: 'monospace', fontSize: '12px' }}
          rows={5}
          value={values.headScripts}
          placeholder={'<!-- e.g. Hotjar, TikTok Pixel, etc. -->\n<script>...</script>'}
          onChange={(e) => setValues({ ...values, headScripts: e.target.value })}
        />
      </div>

      {/* Body Scripts */}
      <div style={groupStyle}>
        <p style={groupTitle}>Custom Body Scripts</p>
        <label style={labelStyle}>Paste full &lt;script&gt; tags or HTML — injected at end of &lt;body&gt;</label>
        <textarea
          style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.55, fontFamily: 'monospace', fontSize: '12px' }}
          rows={5}
          value={values.bodyScripts}
          placeholder={'<!-- e.g. live chat widget, etc. -->\n<script>...</script>'}
          onChange={(e) => setValues({ ...values, bodyScripts: e.target.value })}
        />
      </div>

      {/* SMTP / Email */}
      <div style={groupStyle}>
        <p style={groupTitle}>Email (SMTP) — for User Welcome Emails</p>
        <p style={{ ...noteStyle, marginBottom: '1rem' }}>Used to send credentials when you create a new user. Works with Gmail, Outlook, Brevo, Mailgun, etc.</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.75rem' }}>
          <div>
            <label style={labelStyle}>SMTP Host</label>
            <input style={inputStyle} value={values.smtpHost} placeholder="smtp.gmail.com" onChange={(e) => setValues({ ...values, smtpHost: e.target.value })} />
          </div>
          <div>
            <label style={labelStyle}>Port</label>
            <input style={inputStyle} value={values.smtpPort} placeholder="587" onChange={(e) => setValues({ ...values, smtpPort: e.target.value })} />
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.75rem' }}>
          <div>
            <label style={labelStyle}>SMTP Username</label>
            <input style={inputStyle} value={values.smtpUser} placeholder="you@gmail.com" onChange={(e) => setValues({ ...values, smtpUser: e.target.value })} />
          </div>
          <div>
            <label style={labelStyle}>SMTP Password / App Password</label>
            <input style={inputStyle} type="password" value={values.smtpPass} placeholder="••••••••" onChange={(e) => setValues({ ...values, smtpPass: e.target.value })} />
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.75rem' }}>
          <div>
            <label style={labelStyle}>From (sender name + email)</label>
            <input style={inputStyle} value={values.smtpFrom} placeholder='"ORUN Admin" <no-reply@orunspf.com>' onChange={(e) => setValues({ ...values, smtpFrom: e.target.value })} />
          </div>
          <div>
            <label style={labelStyle}>Site URL (used in email link)</label>
            <input style={inputStyle} value={values.siteUrl} placeholder="https://orunspf.com" onChange={(e) => setValues({ ...values, siteUrl: e.target.value })} />
          </div>
        </div>
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#6F513A', cursor: 'pointer' }}>
          <input type="checkbox" checked={values.smtpSecure} onChange={(e) => setValues({ ...values, smtpSecure: e.target.checked })} />
          Use SSL/TLS (port 465)
        </label>
        <p style={{ ...noteStyle, marginTop: '0.75rem' }}>Gmail tip: Enable 2FA then generate an App Password at myaccount.google.com/apppasswords and use that as your SMTP password.</p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <button
          onClick={handleSave}
          disabled={saving}
          style={{ background: '#C8541F', color: 'white', border: 'none', borderRadius: '10px', padding: '0.7rem 1.2rem', fontWeight: 700, cursor: saving ? 'not-allowed' : 'pointer', opacity: saving ? 0.65 : 1 }}
        >
          {saving ? 'Saving...' : 'Save Settings'}
        </button>
        {saved && <span style={{ color: '#2F7D32', fontSize: '13px', fontWeight: 700 }}>Saved</span>}
      </div>
    </div>
  )
}

export default function AdminDashboard() {
  const [selectedId, setSelectedId] = useState(SECTIONS[0].id)
  const selectedSection = useMemo(
    () => SECTIONS.find((section) => section.id === selectedId) || SECTIONS[0],
    [selectedId]
  )

  const isSpecial = selectedId === 'users' || selectedId === 'settings'

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    window.location.href = '/admin/login'
  }

  const specialTitles: Record<string, string> = { users: 'User Management', settings: 'Site Settings' }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#F7F1EA' }}>
      <aside style={{ width: '250px', background: '#1A0E04', color: '#F0D9C5', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '1.4rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ fontWeight: 800, fontSize: '19px', color: '#FFFFFF' }}>ORUN</div>
          <div style={{ fontSize: '11px', color: '#A4866D', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Admin Backend</div>
        </div>

        <div style={{ flex: 1, padding: '0.75rem', overflowY: 'auto' }}>
          {/* Content sections */}
          <p style={{ fontSize: '10px', fontWeight: 700, color: '#5A3D2B', textTransform: 'uppercase', letterSpacing: '0.12em', padding: '0.4rem 0.65rem 0.25rem' }}>Content</p>
          {SECTIONS.map((section) => {
            const isActive = section.id === selectedId
            return (
              <button
                key={section.id}
                onClick={() => setSelectedId(section.id)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.6rem 0.65rem',
                  marginBottom: '0.35rem',
                  borderRadius: '8px',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  background: isActive ? 'rgba(200,84,31,0.2)' : 'transparent',
                  color: isActive ? '#FFBE97' : '#B18D72',
                  fontSize: '13px',
                  fontWeight: isActive ? 700 : 500,
                }}
              >
                {section.icon}
                <span>{section.title}</span>
                {isActive && <ChevronRight size={13} style={{ marginLeft: 'auto' }} />}
              </button>
            )
          })}

          {/* Admin section */}
          <p style={{ fontSize: '10px', fontWeight: 700, color: '#5A3D2B', textTransform: 'uppercase', letterSpacing: '0.12em', padding: '0.9rem 0.65rem 0.25rem' }}>Admin</p>
          {([
            { id: 'users', label: 'Users', icon: <Users size={16} /> },
            { id: 'settings', label: 'Settings', icon: <Settings size={16} /> },
          ] as { id: string; label: string; icon: ReactNode }[]).map(({ id, label, icon }) => {
            const isActive = selectedId === id
            return (
              <button
                key={id}
                onClick={() => setSelectedId(id)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.6rem 0.65rem',
                  marginBottom: '0.35rem',
                  borderRadius: '8px',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  background: isActive ? 'rgba(200,84,31,0.2)' : 'transparent',
                  color: isActive ? '#FFBE97' : '#B18D72',
                  fontSize: '13px',
                  fontWeight: isActive ? 700 : 500,
                }}
              >
                {icon}
                <span>{label}</span>
                {isActive && <ChevronRight size={13} style={{ marginLeft: 'auto' }} />}
              </button>
            )
          })}
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '0.75rem' }}>
          <button
            onClick={handleLogout}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.6rem 0.65rem',
              borderRadius: '8px',
              border: 'none',
              background: 'transparent',
              color: '#AF876A',
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            <LogOut size={14} />
            Sign out
          </button>
        </div>
      </aside>

      <main style={{ flex: 1, padding: '2rem 2.25rem' }}>
        <div style={{ marginBottom: '1.25rem' }}>
          <p style={{ margin: 0, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9D7F66' }}>
            {isSpecial ? 'Admin' : 'Content Editor'}
          </p>
          <h1 style={{ margin: '0.2rem 0 0', color: '#1A0E04', fontSize: '1.45rem' }}>
            {isSpecial ? specialTitles[selectedId] : selectedSection.title}
          </h1>
        </div>

        {selectedId === 'users' && <UsersPanel />}
        {selectedId === 'settings' && <SettingsPanel />}
        {!isSpecial && <SectionEditor section={selectedSection} />}
      </main>
    </div>
  )
}