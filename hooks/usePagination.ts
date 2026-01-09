import { useEffect, useRef, useState } from 'react'

const PAGE_HEIGHT = 1056       // 11in * 96dpi
const CONTENT_HEIGHT = 864     // (11 - 2 margins) * 96dpi

export function usePagination(editor: any) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [pageBreaks, setPageBreaks] = useState<number[]>([])

  useEffect(() => {
    if (!editor || !containerRef.current) return

    const calculate = () => {
      const dom = editor.view.dom
      const blocks = dom.querySelectorAll(
        'p, h1, h2, h3, li, blockquote'
      )

      let cursor = 0
      let page = 1
      const breaks: number[] = []

      blocks.forEach((block: HTMLElement) => {
        const height = block.offsetHeight

        if (cursor + height > CONTENT_HEIGHT) {
          breaks.push(page * PAGE_HEIGHT)
          page++
          cursor = height
        } else {
          cursor += height
        }
      })

      setPageBreaks(breaks)
    }

    requestAnimationFrame(calculate)
    editor.on('update', calculate)

    return () => {
      editor.off('update', calculate)
    }
  }, [editor])

  return { pageBreaks, containerRef }
}
