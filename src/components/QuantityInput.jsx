export default function QuantityInput({ qty, disabled, onChange, onIncrement, onDecrement }) {
  return (
    <div className={`qty-input ${disabled ? 'qty-input--disabled' : ''}`}>
      <button
        type="button"
        className="qty-input__btn"
        onClick={onDecrement}
        disabled={disabled || qty <= 0}
        aria-label="Decrease quantity"
      >
        −
      </button>
      <input
        type="number"
        inputMode="numeric"
        min="0"
        className="qty-input__field"
        value={qty}
        disabled={disabled}
        onChange={(e) => onChange(parseInt(e.target.value, 10) || 0)}
        aria-label="Quantity"
      />
      <button type="button" className="qty-input__btn" onClick={onIncrement} disabled={disabled} aria-label="Increase quantity">
        +
      </button>
    </div>
  )
}
