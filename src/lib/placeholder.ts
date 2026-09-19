const PALETTES: [string, string][] = [
  ["#8c1a1c", "#c8342c"],
  ["#201f26", "#3f4149"],
  ["#9c7218", "#dfae2f"],
  ["#4a1012", "#a91f1f"],
  ["#15141a", "#53555f"],
  ["#7a5817", "#c2921f"],
];

function hashString(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

/**
 * Deterministic gradient placeholder (data-URI SVG) so demo listings render
 * consistent, on-brand imagery without depending on external image hosts.
 */
export function placeholderImage(seed: string, label: string): string {
  const hash = hashString(seed);
  const [from, to] = PALETTES[hash % PALETTES.length];
  const angle = hash % 360;
  const initials = label
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="480" viewBox="0 0 640 480">
    <defs>
      <linearGradient id="g" gradientTransform="rotate(${angle})">
        <stop offset="0%" stop-color="${from}"/>
        <stop offset="100%" stop-color="${to}"/>
      </linearGradient>
      <pattern id="dots" width="26" height="26" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.4" fill="rgba(255,255,255,0.16)"/>
      </pattern>
    </defs>
    <rect width="640" height="480" fill="url(#g)"/>
    <rect width="640" height="480" fill="url(#dots)"/>
    <circle cx="520" cy="90" r="120" fill="rgba(255,255,255,0.06)"/>
    <circle cx="80" cy="420" r="150" fill="rgba(0,0,0,0.10)"/>
    <text x="320" y="255" font-family="Plus Jakarta Sans, sans-serif" font-size="96" font-weight="700" fill="rgba(255,255,255,0.92)" text-anchor="middle" dominant-baseline="middle">${initials}</text>
    <text x="320" y="410" font-family="Manrope, sans-serif" font-size="22" font-weight="600" fill="rgba(255,255,255,0.85)" text-anchor="middle">${label.length > 28 ? label.slice(0, 26) + "…" : label}</text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export function placeholderLogo(seed: string, label: string): string {
  const hash = hashString(seed);
  const [from, to] = PALETTES[(hash + 3) % PALETTES.length];
  const initials = label
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${from}"/>
        <stop offset="100%" stop-color="${to}"/>
      </linearGradient>
    </defs>
    <rect width="160" height="160" rx="28" fill="url(#g)"/>
    <text x="80" y="86" font-family="Plus Jakarta Sans, sans-serif" font-size="52" font-weight="800" fill="white" text-anchor="middle" dominant-baseline="middle">${initials}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
