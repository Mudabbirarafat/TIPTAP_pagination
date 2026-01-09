📄 Tiptap Document Editor with Real-Time Pagination

A production-ready Tiptap-based rich text editor built with Next.js that provides real-time visual pagination, allowing users to see exactly how their legal documents will appear when printed.

This project was built as part of a technical assignment to demonstrate handling pagination challenges in rich-text editors, accurate print layout matching, and production-quality architectural decisions.

🚀 Features
Core Features

Real-time visual page breaks while typing

US Letter page size (8.5" × 11") with 1-inch margins

Accurate print and PDF output

Stable cursor behavior and undo/redo support

Supports headings, paragraphs, bold/italic text, and bullet lists

Dynamic content reflow when editing anywhere in the document

Optional Enhancements Implemented

Dynamic page numbers (screen only)

Clean print / PDF export using browser paged-media support

🛠 Tech Stack

Frontend: Next.js (App Router)

Editor: Tiptap (ProseMirror)

Styling: Tailwind CSS + custom CSS for print accuracy

Language: TypeScript

Deployment-ready: Vercel / Netlify compatible

🧠 Pagination Approach

Pagination is handled using a single editor instance with DOM-based measurement rather than splitting content into separate pages.

How it works:

After each editor update, rendered block elements (paragraphs, headings, list items) are measured using the DOM.

Heights are accumulated until they exceed the printable content area of a US Letter page (11” minus margins).

Visual page break indicators are rendered as overlays at overflow boundaries.

Page numbers are derived from calculated page indices.

This approach ensures accurate pagination with mixed formatting while preserving cursor stability, undo/redo behavior, and editor performance.

🖨 Screen vs Print Behavior

On Screen:
Visual page breaks and page numbers are displayed as overlays for user clarity.

On Print / PDF:
Screen-only helpers are removed, and native browser paged-media rules are used to generate clean, accurate printed pages.

This ensures that what users see while editing matches what prints, which is critical for legal document submission.

⚖ Trade-offs & Design Decisions

Pages are visual boundaries, not separate editor instances, to preserve editor stability.

Long paragraphs are allowed to span pages instead of splitting text nodes mid-paragraph.

Headers/footers and tables were intentionally deferred to avoid introducing cursor and layout instability within the given scope.

These trade-offs prioritize correctness, usability, and production reliability.

🚀 Future Improvements

With additional time, the following enhancements could be added:

Header and footer support

Table pagination with row-aware page breaks

Server-side PDF export using headless rendering

Collaboration features using Tiptap extensions

▶️ Getting Started
Install dependencies
npm install

Run the development server
npm run dev

Open in browser
http://localhost:3000

📦 Build for Production
npm run build
npm start

📄 License

This project is provided for evaluation and demonstration purposes only.

👤 Author

Mohd Mudabbir Arafat

🏁 FINAL NOTE

This solution intentionally mirrors how modern editors such as Google Docs handle pagination internally, balancing technical correctness with real-world usability.