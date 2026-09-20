// Generates a small clean placeholder image (as a data URI) for products
// that don't yet have a real photo at /public/images/products/. This is
// used purely as a visual placeholder — it never fabricates packaging.
const PALETTE = ['#7b2cbf', '#c026d3', '#9333ea', '#a21caf', '#6d28d9', '#be185d']

export function placeholderDataUri(id, name) {
  const color = PALETTE[id % PALETTE.length]
  const label = (name || '').slice(0, 18)
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120">
      <rect width="120" height="120" rx="10" fill="${color}"/>
      <rect x="4" y="4" width="112" height="112" rx="7" fill="none" stroke="white" stroke-opacity="0.35" stroke-width="2"/>
      <text x="60" y="52" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="white" text-anchor="middle">#${id}</text>
      <text x="60" y="76" font-family="Arial, sans-serif" font-size="10" fill="white" text-anchor="middle">${escapeXml(label)}</text>
    </svg>`
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

function escapeXml(str) {
  return str.replace(/[<>&'"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' }[c]))
}
