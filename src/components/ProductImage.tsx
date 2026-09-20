const CATEGORY_STYLE: Record<string, { emoji: string; from: string; to: string }> = {
  crackers: { emoji: "🧨", from: "#0f7a44", to: "#1a8f52" },
  "flower-pots": { emoji: "🎆", from: "#0b6238", to: "#33ab68" },
  "ground-chakkaram": { emoji: "🌀", from: "#0b4d2e", to: "#0f7a44" },
  "bijili-crackers": { emoji: "✨", from: "#c8940a", to: "#eab308" },
  bombs: { emoji: "💥", from: "#0b4d2e", to: "#1a8f52" },
  "single-fancy-shots": { emoji: "🎇", from: "#0f7a44", to: "#63c78c" },
  "multicolor-shots": { emoji: "🎆", from: "#0b6238", to: "#33ab68" },
  rockets: { emoji: "🚀", from: "#0b4d2e", to: "#1a8f52" },
  "children-special": { emoji: "🎈", from: "#c8940a", to: "#f5c451" },
  "new-flower-collections": { emoji: "🌸", from: "#0f7a44", to: "#63c78c" },
  "special-items": { emoji: "🎯", from: "#0b6238", to: "#1a8f52" },
  sparklers: { emoji: "🎇", from: "#c8940a", to: "#eab308" },
  "new-varieties": { emoji: "🦚", from: "#0f7a44", to: "#33ab68" },
  "repeating-sounds": { emoji: "🔊", from: "#0b4d2e", to: "#0b6238" },
  "gift-boxes": { emoji: "🎁", from: "#0b6238", to: "#1a8f52" },
};

const FALLBACK = { emoji: "🎇", from: "#0b6238", to: "#1a8f52" };

export function ProductImage({
  category,
  image,
  alt,
  className = "",
}: {
  category: string;
  image?: string;
  alt: string;
  className?: string;
}) {
  if (image) {
    return <img src={image} alt={alt} className={className} loading="lazy" />;
  }

  const style = CATEGORY_STYLE[category] ?? FALLBACK;

  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{
        background: `linear-gradient(135deg, ${style.from}, ${style.to})`,
      }}
      role="img"
      aria-label={alt}
    >
      <span className="text-4xl sm:text-5xl drop-shadow-sm select-none">{style.emoji}</span>
    </div>
  );
}
