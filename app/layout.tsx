import './globals.css'

export const metadata = {
  title: 'Tiptap Pagination',
  description: 'Tiptap editor with real-time pagination',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
