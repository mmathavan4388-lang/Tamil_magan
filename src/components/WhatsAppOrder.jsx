import { SHOP } from '../data/shopConfig'
import { whatsappLink } from '../utils/whatsapp'

// Quick "chat with us" links for both contact numbers (not tied to cart order).
export default function WhatsAppOrder() {
  const numbers = [
    { label: SHOP.phones[0], number: '919500356197' },
    { label: SHOP.phones[1], number: '917604965753' },
  ]
  return (
    <div className="whatsapp-quick">
      {numbers.map((n) => (
        <a
          key={n.number}
          className="whatsapp-quick__link"
          href={whatsappLink(`Hi ${SHOP.name}, I have a question about your products.`, n.number)}
          target="_blank"
          rel="noopener noreferrer"
        >
          💬 Chat: {n.label}
        </a>
      ))}
    </div>
  )
}
