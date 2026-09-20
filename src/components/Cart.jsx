import { formatRupees, unitLabel } from '../utils/whatsapp'
import QuantityInput from './QuantityInput'

export default function Cart({ open, onClose, lines, grandTotal, onIncrement, onDecrement, onRemove, onClear, onOrder }) {
  if (!open) return null

  return (
    <div className="cart-overlay" role="dialog" aria-modal="true" aria-label="Cart">
      <div className="cart-overlay__backdrop" onClick={onClose} />
      <div className="cart-drawer">
        <div className="cart-drawer__header">
          <h2>🛒 Cart</h2>
          <button className="cart-drawer__close" onClick={onClose} aria-label="Close cart">✕</button>
        </div>

        {lines.length === 0 ? (
          <p className="cart-drawer__empty">Your cart is empty. Add products to get started.</p>
        ) : (
          <ul className="cart-drawer__list">
            {lines.map((l) => (
              <li key={l.product.id} className="cart-line">
                <div className="cart-line__info">
                  <div className="cart-line__name">{l.product.name}</div>
                  {l.product.tamilName ? <div className="cart-line__name-ta">{l.product.tamilName}</div> : null}
                  <div className="cart-line__price">
                    {l.qty} {unitLabel(l.product.unit)} × {formatRupees(l.product.price)} = <strong>{formatRupees(l.lineTotal)}</strong>
                  </div>
                </div>
                <div className="cart-line__actions">
                  <QuantityInput
                    qty={l.qty}
                    disabled={false}
                    onChange={() => {}}
                    onIncrement={() => onIncrement(l.product)}
                    onDecrement={() => onDecrement(l.product)}
                  />
                  <button className="cart-line__remove" onClick={() => onRemove(l.product)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="cart-drawer__footer">
          <div className="cart-drawer__total">
            <span>Grand Total</span>
            <strong>{formatRupees(grandTotal)}</strong>
          </div>
          <div className="cart-drawer__buttons">
            <button className="btn btn--ghost" onClick={onClear} disabled={lines.length === 0}>
              Clear Cart
            </button>
            <button className="btn btn--whatsapp" onClick={onOrder} disabled={lines.length === 0}>
              Order via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
