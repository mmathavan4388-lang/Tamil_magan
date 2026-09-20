import { useState } from 'react'

// Renders the product's real image when available; falls back to a
// consistent, on-brand placeholder so every card looks uniform until
// real photos are dropped into /public/images.
export default function ProductImage({ src, alt, className = '' }) {
  const [failed, setFailed] = useState(false)

  if (!src || failed) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-brand-panel to-black ${className}`}
        aria-label={alt}
      >
        <span className="text-4xl select-none" role="img" aria-hidden="true">
          🎆
        </span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={className}
      onError={() => setFailed(true)}
    />
  )
}
