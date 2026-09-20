import { SHOP } from '../data/shopConfig'

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <h1 className="site-header__name">{SHOP.name}</h1>
        <p className="site-header__tagline">{SHOP.tagline}</p>
        <div className="site-header__contact">
          {SHOP.phones.map((ph) => (
            <a key={ph} href={`tel:${ph.replace(/\s+/g, '')}`} className="site-header__phone">
              📞 {ph}
            </a>
          ))}
        </div>
        <p className="site-header__address">📍 {SHOP.address.join(' ')}</p>
      </div>
    </header>
  )
}
