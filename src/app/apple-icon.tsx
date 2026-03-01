import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0d1b2a',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '36px',
        }}
      >
        <svg width="130" height="130" viewBox="0 0 24 24" fill="none">
          <path d="M3 8 C6 4, 10 4, 12 8" stroke="#e87c3e" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
          <path d="M3 5 C7 0, 11 0, 15 5" stroke="#e87c3e" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
          <rect x="2" y="12" width="14" height="8" rx="1" fill="#e87c3e" />
          <path d="M16 14 L20 14 L22 17 L22 20 L16 20 Z" fill="#e87c3e" opacity="0.8" />
          <circle cx="7" cy="21" r="2" fill="#0d1b2a" stroke="#e87c3e" strokeWidth="0.8" />
          <circle cx="19" cy="21" r="2" fill="#0d1b2a" stroke="#e87c3e" strokeWidth="0.8" />
        </svg>
      </div>
    ),
    { ...size }
  )
}
