import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
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
          borderRadius: '6px',
        }}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          {/* Signal waves */}
          <path d="M3 8 C6 4, 10 4, 12 8" stroke="#e87c3e" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
          <path d="M3 5 C7 0, 11 0, 15 5" stroke="#e87c3e" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
          {/* Truck body */}
          <rect x="2" y="12" width="14" height="8" rx="1" fill="#e87c3e" />
          {/* Cab */}
          <path d="M16 14 L20 14 L22 17 L22 20 L16 20 Z" fill="#e87c3e" opacity="0.8" />
          {/* Wheels */}
          <circle cx="7" cy="21" r="2" fill="#0d1b2a" stroke="#e87c3e" strokeWidth="1" />
          <circle cx="19" cy="21" r="2" fill="#0d1b2a" stroke="#e87c3e" strokeWidth="1" />
        </svg>
      </div>
    ),
    { ...size }
  )
}
