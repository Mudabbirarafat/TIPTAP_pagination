'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { usePagination } from '../hooks/usePagination'

export default function Editor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Start typing your legal document...</p>',
    immediatelyRender: false,
  })

  const { pageBreaks, containerRef } = usePagination(editor)
  const totalPages = pageBreaks.length + 1

  return (
    <div className="doc-wrapper">
      <div ref={containerRef} className="editor-shell">
        {/* Fake page backgrounds */}
        {Array.from({ length: totalPages }).map((_, i) => (
          <div key={i} className="page-bg" />
        ))}

        {/* Single Tiptap editor overlay */}
        <EditorContent editor={editor} className="editor" />

        {/* Page numbers */}
        {Array.from({ length: totalPages }).map((_, i) => (
          <div
            key={`pn-${i}`}
            className="page-number"
            style={{ top: i * 1056 + 1020, right: 45 }}
          >
            Page {i + 1}
          </div>
        ))}
      </div>
    </div>
  )
}
