import ProductRow from './ProductRow'

export default function ProductTable({ category, products, getQty, onSetQty, onIncrement, onDecrement }) {
  if (products.length === 0) return null

  return (
    <section className="category-section" id={`cat-${category.id}`}>
      <div className="category-header">
        <div className="category-header__en">{category.name}</div>
        {category.tamilName ? <div className="category-header__ta">{category.tamilName}</div> : null}
      </div>
      <div className="product-table-wrap">
        <table className="product-table">
          <thead>
            <tr>
              <th>Preview</th>
              <th>Product</th>
              <th>Per</th>
              <th>M.R.P.</th>
              <th>Our Price</th>
              <th>Qty</th>
              <th>Total ₹</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <ProductRow
                key={product.id}
                product={product}
                qty={getQty(product.id)}
                onSetQty={onSetQty}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
