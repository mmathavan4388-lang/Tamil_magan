import { useState } from 'react'
import { placeholderDataUri } from '../utils/placeholderImage'

export default function ProductImage({ product }) {
  const [failed, setFailed] = useState(false)
  const src = failed ? placeholderDataUri(product.id, product.name) : product.image

  return (
    <img
      className="product-image"
      src={src}
      alt={product.name}
      loading="lazy"
      width={44}
      height={44}
      onError={() => setFailed(true)}
    />
  )
}
