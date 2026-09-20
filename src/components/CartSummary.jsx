import { formatRupees } from '../utils/whatsapp'

export default function CartSummary({ totalItems, grandTotal, onOpen }) {
  return (
    <button className="cart-summary" onClick={onOpen} aria-label="Open cart">
      <span className="cart-summary__icon">🛒</span>
      <span className="cart-summary__items">{totalItems} {totalItems === 1 ? 'Item' : 'Items'}</span>
      <span className="cart-summary__total">{formatRupees(grandTotal)}</span>
      <span className="cart-summary__view">VIEW CART ›</span>
    </button>
  )
}
