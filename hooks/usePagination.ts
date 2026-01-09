import { useEffect, useRef, useState } from 'react'

const PAGE_HEIGHT = 1056 // 11in * 96dpi

export function usePagination(editor: any) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [pageBreaks, setPageBreaks] = useState<number[]>([])

  useEffect(() => {
    if (!editor) return

    const calculate = () => {
      const dom = editor.view.dom as HTMLElement
      const totalHeight = dom.scrollHeight

      const totalPages = Math.max(1, Math.ceil(totalHeight / PAGE_HEIGHT))
      const breaks = Array.from({ length: totalPages - 1 }, (_, i) => (i + 1) * PAGE_HEIGHT)

      setPageBreaks(breaks)
    }

    requestAnimationFrame(calculate)
    editor.on('update', calculate)
    window.addEventListener('resize', calculate)

    return () => {
      editor.off('update', calculate)
      window.removeEventListener('resize', calculate)
    }
  }, [editor])

  return { pageBreaks, containerRef }
}
