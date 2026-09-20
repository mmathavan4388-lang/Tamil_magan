import type { Category } from "../types";

export const categories: Category[] = [
  { slug: "crackers", nameEn: "Crackers", nameTa: "பட்டாசுகள்", image: "crackers" },
  { slug: "flower-pots", nameEn: "Flower Pots", nameTa: "பூந்தொட்டி", image: "flower-pots" },
  { slug: "ground-chakkaram", nameEn: "Ground Chakkaram", nameTa: "தரை சக்கரம்", image: "ground-chakkaram" },
  { slug: "bijili-crackers", nameEn: "Bijili Crackers", nameTa: "பிஜிலி பட்டாசு", image: "bijili-crackers" },
  { slug: "bombs", nameEn: "Bombs", nameTa: "பாம்", image: "bombs" },
  { slug: "single-fancy-shots", nameEn: "Single Fancy Shots", nameTa: "சிங்கிள் பேன்சி சாட்", image: "single-fancy-shots" },
  { slug: "multicolor-shots", nameEn: "Multicolor Shots", nameTa: "மல்டிகலர் சாட்", image: "multicolor-shots" },
  { slug: "rockets", nameEn: "Rockets", nameTa: "ராக்கெட்", image: "rockets" },
  { slug: "children-special", nameEn: "Children Special Items", nameTa: "குழந்தைகள் ஸ்பெஷல்", image: "children-special" },
  { slug: "new-flower-collections", nameEn: "New Flower Collections", nameTa: "புதிய பூ வகைகள்", image: "new-flower-collections" },
  { slug: "special-items", nameEn: "Special Items", nameTa: "ஸ்பெஷல் பொருட்கள்", image: "special-items" },
  { slug: "sparklers", nameEn: "Sparklers", nameTa: "கம்பி மத்தாப்பு", image: "sparklers" },
  { slug: "new-varieties", nameEn: "New Varieties", nameTa: "புதிய வகைகள்", image: "new-varieties" },
  { slug: "repeating-sounds", nameEn: "Repeating Sounds", nameTa: "தொடர் சத்தம்", image: "repeating-sounds" },
  { slug: "gift-boxes", nameEn: "Gift Boxes", nameTa: "கிப்ட் பாக்ஸ்", image: "gift-boxes" },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
