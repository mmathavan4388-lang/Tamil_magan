import { SHOP } from '../data/shopConfig'

export default function Footer() {
  return (
    <footer className="site-footer">
      <p className="site-footer__notice">
        Products are subject to availability and applicable local laws and regulations. Please
        follow all applicable fireworks safety instructions and purchase/use only where legally
        permitted.
      </p>
      <p className="site-footer__contact">
        {SHOP.name} · {SHOP.phones.join(' · ')}
      </p>
      <p className="site-footer__address">{SHOP.address.join(' ')}</p>
    </footer>
  )
}
