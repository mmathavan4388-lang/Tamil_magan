import ProductImage from './ProductImage'
import QuantityInput from './QuantityInput'
import { formatRupees } from '../utils/whatsapp'

export default function ProductRow({ product, qty, onSetQty, onIncrement, onDecrement }) {
  const hasPrice = product.price != null
  const hasMrp = product.mrp != null && !product.netRate
  const discount = hasPrice && hasMrp && product.mrp > 0 ? Math.round(100 - (product.price / product.mrp) * 100) : null
  const total = hasPrice ? product.price * qty : 0

  return (
    <tr className="product-row">
      <td className="product-row__preview" data-label="Preview">
        <ProductImage product={product} />
      </td>
      <td className="product-row__name" data-label="Product">
        <div className="product-row__id">#{product.id}</div>
        <div className="product-row__name-en">{product.name}</div>
        {product.tamilName ? <div className="product-row__name-ta">{product.tamilName}</div> : null}
        {product.note ? <div className="product-row__note">{product.note}</div> : null}
      </td>
      <td className="product-row__unit" data-label="Per">
        {product.unit}
      </td>
      <td className="product-row__mrp" data-label="M.R.P.">
        {product.netRate ? (
          <span className="product-row__netrate-label">NET RATE</span>
        ) : hasMrp ? (
          <>
            <span className="mrp-strike">{formatRupees(product.mrp)}</span>
            {discount != null && discount > 0 ? <div className="discount-badge">{discount}% OFF</div> : null}
          </>
        ) : (
          <span className="product-row__dash">—</span>
        )}
      </td>
      <td className="product-row__price" data-label="Our Price">
        {hasPrice ? <span className="our-price">{formatRupees(product.price)}</span> : <span className="price-missing">Price Update Required</span>}
      </td>
      <td className="product-row__qty" data-label="Qty">
        <QuantityInput
          qty={qty}
          disabled={!hasPrice}
          onChange={(v) => onSetQty(product, v)}
          onIncrement={() => onIncrement(product)}
          onDecrement={() => onDecrement(product)}
        />
      </td>
      <td className="product-row__total" data-label="Total ₹">
        {hasPrice ? formatRupees(total) : '—'}
      </td>
    </tr>
  )
}
