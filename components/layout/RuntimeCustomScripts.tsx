'use client'

import { useEffect } from 'react'

interface RuntimeCustomScriptsProps {
  headScripts?: string
  bodyScripts?: string
}

function appendHtml(target: HTMLElement, rawHtml: string): Array<HTMLElement | HTMLScriptElement> {
  if (!rawHtml.trim()) return []

  const container = document.createElement('div')
  container.innerHTML = rawHtml

  const addedNodes: Array<HTMLElement | HTMLScriptElement> = []

  Array.from(container.childNodes).forEach((node) => {
    if (node.nodeType !== Node.ELEMENT_NODE) return
    const element = node as HTMLElement

    // Scripts inserted via innerHTML do not execute, so recreate them.
    if (element.tagName.toLowerCase() === 'script') {
      const scriptEl = document.createElement('script')
      Array.from(element.attributes).forEach((attr) => {
        scriptEl.setAttribute(attr.name, attr.value)
      })
      if (element.textContent) scriptEl.textContent = element.textContent
      target.appendChild(scriptEl)
      addedNodes.push(scriptEl)
      return
    }

    const clone = element.cloneNode(true) as HTMLElement
    target.appendChild(clone)
    addedNodes.push(clone)
  })

  return addedNodes
}

export default function RuntimeCustomScripts({
  headScripts = '',
  bodyScripts = '',
}: RuntimeCustomScriptsProps) {
  useEffect(() => {
    const addedToHead = appendHtml(document.head, headScripts)
    const addedToBody = appendHtml(document.body, bodyScripts)

    return () => {
      ;[...addedToHead, ...addedToBody].forEach((node) => node.remove())
    }
  }, [headScripts, bodyScripts])

  return null
}
