import type { Product } from "../types";

type Raw = [id: number, nameEn: string, nameTa: string, category: string, price: number, unit: string, rate: number];

function slugify(id: number, name: string) {
  return (
    `${id}-` +
    name
      .toLowerCase()
      .replace(/["']/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
  );
}

// prettier-ignore
const raw: Raw[] = [
  // CRACKERS
  [1, "2 3/4 Kuruvi", "2 3/4 குருவி", "crackers", 80, "1 PKT", 8],
  [2, "3 1/2 Lakshmi", "3 1/2 லட்சுமி", "crackers", 130, "1 PKT", 13],
  [3, '4" Lakshmi', '4" லட்சுமி', "crackers", 200, "1 PKT", 20],
  [4, "Gold Lakshmi", "தங்க லட்சுமி", "crackers", 350, "1 PKT", 35],
  [5, '5" Deluxe', '5" டீலக்ஸ்', "crackers", 500, "1 PKT", 50],
  [6, '6" Deluxe', '6" டீலக்ஸ்', "crackers", 600, "1 PKT", 60],
  [7, "Thala Thalapathy", "தல தளபதி", "crackers", 1000, "1 PKT", 100],

  // FLOWER POTS
  [8, "Flower Pots Small", "பூந்தொட்டி சிறியது", "flower-pots", 600, "1 BOX", 60],
  [9, "Flower Pot Big", "பூந்தொட்டி பெரியது", "flower-pots", 800, "1 BOX", 80],
  [10, "Flower Pots Special", "பூந்தொட்டி ஸ்பெஷல்", "flower-pots", 1000, "1 BOX", 100],
  [11, "Flower Pots Ashoka", "பூந்தொட்டி அசோகா", "flower-pots", 1200, "1 BOX", 120],
  [12, "Color Koti", "கலர் கோட்டி", "flower-pots", 2000, "1 BOX", 200],
  [13, "Color Koti Deluxe", "கலர் கோட்டி டீலக்ஸ்", "flower-pots", 3000, "1 BOX", 300],
  [14, "Mega Koti Deluxe", "மெகா கோட்டி டீலக்ஸ்", "flower-pots", 4200, "1 BOX", 420],

  // GROUND CHAKKARAM
  [15, "Ground Chakkaram (3)", "தரை சக்கரம்", "ground-chakkaram", 400, "1 BOX", 40],
  [16, "Ground Chakkaram Big 25", "சக்கரம் பெரியது", "ground-chakkaram", 900, "1 BOX", 90],
  [17, "Ground Chakkar Special", "சக்கரம் ஸ்பெஷல்", "ground-chakkaram", 1000, "1 BOX", 100],
  [18, "Ground Chakkar Deluxe", "சக்கரம் டீலக்ஸ்", "ground-chakkaram", 1500, "1 BOX", 150],
  [19, "Window Chakkar Special", "விண்டோ சக்கரம் ஸ்பெஷல்", "ground-chakkaram", 1300, "1 BOX", 130],
  [20, "Window Chakkar Deluxe", "விண்டோ சக்கரம் டீலக்ஸ்", "ground-chakkaram", 1800, "1 BOX", 180],

  // BIJILI CRACKERS
  [21, "Red Bijili (50 Pcs)", "சிவப்பு பிஜிலி (50 Pcs)", "bijili-crackers", 150, "1 PKT", 15],
  [22, "Red Bijili (100 Pcs)", "சிவப்பு பிஜிலி (100 Pcs)", "bijili-crackers", 300, "1 PKT", 30],
  [23, "Gold Bijili", "தங்க பிஜிலி", "bijili-crackers", 200, "1 PKT", 20],
  [24, "Stripped Bijili", "கோடு பிஜிலி", "bijili-crackers", 400, "1 PKT", 40],

  // BOMBS
  [25, "Auto Bomb", "ஆட்டோ பாம்", "bombs", 500, "1 BOX", 50],
  [26, "Hydro Bomb", "ஹைட்ரோ பாம்", "bombs", 700, "1 BOX", 70],
  [27, "King of King Bomb", "கிங் ஆஃப் கிங் பாம்", "bombs", 900, "1 BOX", 90],
  [28, "Classic Bomb", "கிளாசிக் பாம்", "bombs", 1200, "1 BOX", 120],
  [29, "Digital Bomb", "டிஜிட்டல் பாம்", "bombs", 2200, "1 BOX", 220],
  [30, "Squad Bomb", "ஸ்குவாடு பாம்", "bombs", 2500, "1 BOX", 250],
  [31, "1/4kg Paper Bomb", "பேப்பர் பாம் 1/4 kg", "bombs", 600, "1 BOX", 60],
  [32, "1/2kg Paper Bomb", "பேப்பர் பாம் 1/2 kg", "bombs", 1200, "1 BOX", 120],
  [33, "1kg Paper Bomb", "பேப்பர் பாம் 1 kg", "bombs", 2400, "1 BOX", 240],
  [34, "Avatar (10 Pcs)", "அவதார்", "bombs", 2500, "1 BOX", 250],

  // SINGLE FANCY SHOTS
  [35, '1" Chotta Fancy', '1" சோட்டா பேன்சி', "single-fancy-shots", 500, "1 BOX", 50],
  [36, '2" Chotta Fancy', '2" சோட்டா பேன்சி', "single-fancy-shots", 1000, "1 BOX", 100],
  [37, '2" Fancy (3 Pcs)', '2" பேன்சி (3 Pcs)', "single-fancy-shots", 3000, "1 BOX", 300],
  [38, "3 1/2 Fancy", '3 1/2" பேன்சி', "single-fancy-shots", 3100, "1 BOX", 310],
  [39, "3 1/2 Fancy Special", '3 1/2" பேன்சி ஸ்பெஷல்', "single-fancy-shots", 3500, "1 BOX", 350],
  [40, "Nayagara Falls", "நயகரா பால்ஸ்", "single-fancy-shots", 4000, "1 BOX", 400],
  [41, '4" Fancy Special', '4" பேன்சி ஸ்பெஷல்', "single-fancy-shots", 4500, "1 BOX", 450],
  [42, '5" Fancy', '5" ஸ்பெஷல்', "single-fancy-shots", 5000, "1 BOX", 500],
  [43, '5" Fancy (2 Pcs)', '5" பேன்சி (2 Pcs)', "single-fancy-shots", 3500, "1 BOX", 350],
  // 44, 45 skipped

  // MULTICOLOR SHOTS
  [46, "7 Shots", "7 சாட்", "multicolor-shots", 1000, "1 BOX", 100],
  [47, "Penta Gun Shot", "பென்டா கன் சாட்", "multicolor-shots", 2000, "1 BOX", 200],
  [48, "12 Shots", "12 சாட்", "multicolor-shots", 1500, "1 BOX", 150],
  [49, "15 Smoke Shots", "15 ஸ்மோக் சாட்", "multicolor-shots", 5200, "1 BOX", 520],
  [50, "30 Shots", "30 சாட்", "multicolor-shots", 4000, "1 BOX", 400],
  [51, "60 Shots", "60 சாட்", "multicolor-shots", 8000, "1 BOX", 800],
  [52, "120 Shots", "120 சாட்", "multicolor-shots", 16000, "1 BOX", 1600],
  [53, "240 Shots", "240 சாட்", "multicolor-shots", 32000, "1 BOX", 3200],
  [54, "30 Shot Special", "30 சாட் ஸ்பெஷல்", "multicolor-shots", 5000, "1 BOX", 500],
  [55, "60 Shot Special", "60 சாட் ஸ்பெஷல்", "multicolor-shots", 10000, "1 BOX", 1000],
  [56, "120 Shot Special", "120 சாட் ஸ்பெஷல்", "multicolor-shots", 20000, "1 BOX", 2000],
  [57, "240 Shot Special", "240 சாட் ஸ்பெஷல்", "multicolor-shots", 40000, "1 BOX", 4000],

  // ROCKETS
  [58, "Baby Rocket", "பேபி ராக்கெட்", "rockets", 400, "1 BOX", 40],
  // 59, 60 skipped
  [61, "1 1/2 Twinkling Stars", '1 1/2" மின்னும் நட்சத்திரம்', "rockets", 300, "1 BOX", 30],
  [62, '4" Twinkling Stars', '4" மின்னும் நட்சத்திரம்', "rockets", 800, "1 BOX", 80],

  // CHILDREN SPECIAL ITEMS
  [63, "Photo Flash", "போட்டோ பிளாஷ்", "children-special", 800, "1 BOX", 80],
  [64, "Butterfly", "வண்ணத்துப்பூச்சி", "children-special", 1200, "1 BOX", 120],
  [65, "Selfie Stick", "செல்பி ஸ்டிக்", "children-special", 800, "1 BOX", 80],
  [66, "Color Rain", "கலர் ரெயின்", "children-special", 1500, "1 BOX", 150],
  [67, "Pambaram (10 Pcs)", "பம்பரம்", "children-special", 1200, "1 BOX", 120],
  [68, "Flora Rain", "புலோரா ரெயின்", "children-special", 1800, "1 BOX", 180],
  [69, "Sizzle Queen", "சைசில் குயின்", "children-special", 2000, "1 BOX", 200],
  [70, "Pop Corn", "பாப் கார்ன்", "children-special", 1900, "1 BOX", 190],

  // NEW FLOWER COLLECTIONS
  [71, "Gold Rain", "தங்க மழை", "new-flower-collections", 1500, "1 BOX", 150],
  [72, "Star Rain", "நட்சத்திர மழை", "new-flower-collections", 1500, "1 BOX", 150],
  [73, "Water Falls", "நீர் அருவி", "new-flower-collections", 1800, "1 BOX", 180],
  [74, "Color Fountain", "கலர் நீர்வீழ்ச்சி", "new-flower-collections", 1800, "1 BOX", 180],

  // SPECIAL ITEMS
  [75, "H2O Water Gun", "H2O வாட்டர் துப்பாக்கி", "special-items", 1600, "1 BOX", 160],
  [76, "5G Pistol Big Gun", "5G பிஸ்டல் பெரிய துப்பாக்கி", "special-items", 2800, "1 BOX", 280],
  [77, "Thor", "தோர்", "special-items", 2300, "1 BOX", 230],
  [78, "Wik Chakkaram", "விக் சக்கரம்", "special-items", 2000, "1 BOX", 200],
  [79, "Vall", "வால்", "special-items", 2000, "1 BOX", 200],

  // SPARKLERS
  [80, "7cm Electric Sparklers", "7cm சாதா கம்பி", "sparklers", 100, "1 BOX", 10],
  [81, "7cm Color Sparklers", "7cm கலர் கம்பி", "sparklers", 130, "1 BOX", 13],
  [82, "7cm Green Sparklers", "7cm பச்சை கம்பி", "sparklers", 160, "1 BOX", 16],
  [83, "7cm Red Sparklers", "7cm சிவப்பு கம்பி", "sparklers", 190, "1 BOX", 19],
  [84, "10cm Electric Sparklers", "12cm சாதா கம்பி", "sparklers", 200, "1 BOX", 20],
  [85, "10cm Color Sparklers", "12cm கலர் கம்பி", "sparklers", 220, "1 BOX", 22],
  [86, "10cm Green Sparklers", "12cm பச்சை கம்பி", "sparklers", 270, "1 BOX", 27],
  [87, "10cm Red Sparklers", "12cm சிவப்பு கம்பி", "sparklers", 280, "1 BOX", 28],
  [88, "15cm Electric Sparklers", "15cm சாதா கம்பி", "sparklers", 500, "1 BOX", 50],
  [89, "15cm Color Sparklers", "15cm கலர் கம்பி", "sparklers", 560, "1 BOX", 56],
  [90, "15cm Green Sparklers", "15cm பச்சை கம்பி", "sparklers", 600, "1 BOX", 60],
  [91, "15cm Red Sparklers", "15cm சிவப்பு கம்பி", "sparklers", 600, "1 BOX", 60],
  [92, "30cm Electric Sparklers", "30cm சாதா கம்பி", "sparklers", 560, "1 BOX", 56],
  [93, "30cm Color Sparklers", "30cm கலர் கம்பி", "sparklers", 580, "1 BOX", 58],
  [94, "30cm Green Sparklers", "30cm பச்சை கம்பி", "sparklers", 620, "1 BOX", 62],
  [95, "30cm Red Sparklers", "30cm சிவப்பு கம்பி", "sparklers", 620, "1 BOX", 62],
  [96, "50cm Electric Sparklers", "50cm சாதா கம்பி", "sparklers", 2200, "1 BOX", 220],
  [97, "50cm Color Sparklers", "50cm கலர் கம்பி", "sparklers", 2300, "1 BOX", 230],
  [98, "Dancing Umbrella Sparklers", "டான்சிங் அம்பிரெல்லா கம்பி", "sparklers", 2500, "1 BOX", 250],

  // NEW VARIETIES FOUNTAIN & COLORING
  [99, "Color Peacock", "கலர் மயில்", "new-varieties", 250, "1 BOX", 250],
  [100, "Old is Gold", "பழமை என்றும் புதுமை", "new-varieties", 150, "1 BOX", 150],
  [101, "Money Bank", "பணப்பெட்டி", "new-varieties", 150, "1 BOX", 150],
  [102, "Siren Peacock", "சைரன் மயில்", "new-varieties", 220, "1 BOX", 220],
  [103, "Peacock Feather", "மயிலிறகு", "new-varieties", 120, "1 BOX", 120],
  [104, "Color Peacock Green, Red", "கலர் மயில் பச்சை, சிவப்பு", "new-varieties", 250, "1 BOX", 250],
  [105, "Pada Peacock", "பெரிய மயில்", "new-varieties", 520, "1 BOX", 520],
  [106, "Smoke (3 Pcs)", "ஸ்மோக்", "new-varieties", 200, "1 BOX", 200],
  [107, "Tri Color", "மூன்று கலர்", "new-varieties", 300, "1 BOX", 300],
  [108, "Helicopter", "ஹெலிகாப்டர்", "new-varieties", 120, "1 BOX", 120],
  [109, "Bat Ball", "பேட் பால்", "new-varieties", 300, "1 BOX", 300],
  [110, "Hot Stream (Multi Color) Saver", "ஹாட் ஸ்ட்ரீம் (மல்டி கலர்) சேவர்", "new-varieties", 180, "1 BOX", 180],

  // REPEATING SOUNDS
  [111, "100 Gold", "100 தங்கம்", "repeating-sounds", 40, "1 BOX", 40],
  [112, "200 Gold", "200 தங்கம்", "repeating-sounds", 80, "1 BOX", 80],
  [113, "1000 Gold", "1000 தங்கம்", "repeating-sounds", 180, "1 BOX", 180],
  [114, "2000 Gold", "2000 தங்கம்", "repeating-sounds", 360, "1 BOX", 360],
  [115, "5000 Gold", "5000 தங்கம்", "repeating-sounds", 910, "1 BOX", 910],
  [116, "10000 Gold", "10000 தங்கம்", "repeating-sounds", 1840, "1 BOX", 1840],
  [117, "28 Chorsa", "28 சோர்சா", "repeating-sounds", 15, "1 BOX", 15],
  [118, "28 Giant", "28 ஜியன்ட்", "repeating-sounds", 20, "1 BOX", 20],
  [119, "56 Giant", "56 ஜியன்ட்", "repeating-sounds", 40, "1 BOX", 40],
  [120, "24 Deluxe", "24 டீலக்ஸ்", "repeating-sounds", 50, "1 BOX", 50],
  [121, "50 Deluxe", "50 டீலக்ஸ்", "repeating-sounds", 110, "1 BOX", 110],
  [122, "100 Deluxe", "100 டீலக்ஸ்", "repeating-sounds", 230, "1 BOX", 230],

  // GIFT BOXES
  [123, "20 Item Gift Box", "20 பொருள் கிப்ட் பாக்ஸ்", "gift-boxes", 350, "1 BOX", 350],
  [124, "25 Item Gift Box", "25 பொருள் கிப்ட் பாக்ஸ்", "gift-boxes", 400, "1 BOX", 400],
  [125, "30 Item Gift Box", "30 பொருள் கிப்ட் பாக்ஸ்", "gift-boxes", 530, "1 BOX", 530],
  [126, "40 Item Gift Box", "40 பொருள் கிப்ட் பாக்ஸ்", "gift-boxes", 780, "1 BOX", 780],
  [127, "50 Item Gift Box", "50 பொருள் கிப்ட் பாக்ஸ்", "gift-boxes", 1050, "1 BOX", 1050],
  [128, "60 Item Gift Box", "60 பொருள் கிப்ட் பாக்ஸ்", "gift-boxes", 1500, "1 BOX", 1500],
];

const bestSellerIds = new Set([7, 14, 29, 34, 40, 52, 56, 66, 98, 105, 127]);
const newArrivalIds = new Set([71, 72, 73, 74, 99, 102, 104, 108, 110, 98]);

export const products: Product[] = raw.map(([id, nameEn, nameTa, category, price, unit, rate]) => ({
  id,
  slug: slugify(id, nameEn),
  nameEn,
  nameTa,
  category,
  price,
  unit,
  rate,
  isBestSeller: bestSellerIds.has(id),
  isNew: newArrivalIds.has(id),
  enabled: true,
}));

export function getProduct(idOrSlug: string) {
  return products.find((p) => p.slug === idOrSlug || String(p.id) === idOrSlug);
}
