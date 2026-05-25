'use client'

export default function WhatsAppFloatingCTA() {
  return (
    <a
      href="https://wa.me/971506102836"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-bold text-white shadow-2xl transition hover:bg-[#1fbd59] active:scale-95 md:hidden"
      aria-label="Chat on WhatsApp"
      style={{ boxShadow: '0 8px 32px rgba(37,211,102,0.35)' }}
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 1C4.58 1 1 4.58 1 9c0 1.43.37 2.77 1.01 3.94L1 17l4.19-1C6.31 16.62 7.63 17 9 17c4.42 0 8-3.58 8-8s-3.58-8-8-8z"
          fill="currentColor"
          opacity="0.25"
        />
        <path
          d="M9 1C4.58 1 1 4.58 1 9c0 1.43.37 2.77 1.01 3.94L1 17l4.19-1C6.31 16.62 7.63 17 9 17c4.42 0 8-3.58 8-8s-3.58-8-8-8z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <path
          d="M6.5 8c0 2.5 3 5 5 5 .5-.5.5-1.5 0-2L10 9.5c-.5-.5-1 0-1.5.5-.5-.5-1-1-1-1.5C8 8 8.5 7.5 9 7c-.5-.5-1.5-.5-2 0L6.5 8z"
          fill="currentColor"
          opacity="0.8"
        />
      </svg>
      Chat now
    </a>
  )
}
