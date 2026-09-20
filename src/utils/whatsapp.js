import { SHOP } from '../data/shopConfig'

export function formatRupees(n) {
  return `₹${Number(n).toLocaleString('en-IN')}`
}

// "1 BOX" -> "BOX" so it reads naturally next to a quantity, e.g. "2 BOX".
export function unitLabel(unit) {
  return unit.replace(/^1\s+/, '')
}

export function buildWhatsAppMessage(lines, grandTotal) {
  const header = `${SHOP.name}\n\nCustomer Order:\n`
  const body = lines
    .map(
      (l, i) =>
        `${i + 1}. ${l.product.name}${l.product.tamilName ? ' / ' + l.product.tamilName : ''} - ${l.qty} ${unitLabel(l.product.unit)} × ${formatRupees(l.product.price)} = ${formatRupees(l.lineTotal)}`
    )
    .join('\n')
  const footer = `\n\nGrand Total: ${formatRupees(grandTotal)}\n\nPlease confirm availability and delivery/pickup details.`
  return `${header}${body}${footer}`
}

export function whatsappLink(message, number = SHOP.whatsappNumber) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}
