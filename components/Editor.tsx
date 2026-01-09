'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { usePagination } from '../hooks/usePagination'

export default function Editor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Start typing your legal document...</p>',
    immediatelyRender: false, // prevents SSR hydration issues
  })

  const { pageBreaks, containerRef } = usePagination(editor)

  return (
    <div className="min-h-screen bg-gray-200 py-10">
      <div className="relative mx-auto">
        {/* Editor */}
        <EditorContent
          editor={editor}
          className="editor"
          ref={containerRef}
        />

        {/* Visual Page Breaks */}
        {pageBreaks.map((top, index) => (
          <div
            key={`page-break-${index}`}
            className="page-break absolute left-0 right-0 border-t-2 border-dashed border-gray-400"
            style={{ top }}
          />
        ))}

        {/* Page Numbers (screen only) */}
        {pageBreaks.map((top, index) => (
          <div
            key={`page-number-${index}`}
            className="page-number absolute text-xs text-gray-600"
            style={{
              top: top + 1020, // near bottom of page
              right: '40px',
            }}
          >
            Page {index + 1}
          </div>
        ))}

        {/* Last Page Number */}
        <div
          className="page-number absolute text-xs text-gray-600"
          style={{
            top: (pageBreaks.length + 1) * 1056 - 36,
            right: '40px',
          }}
        >
          Page {pageBreaks.length + 1}
        </div>
      </div>
    </div>
  )
}
