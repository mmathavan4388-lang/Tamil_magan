// ---------------------------------------------------------------------------
// PRODUCT DATA — KABERIAL PATTASU KADAI
// ---------------------------------------------------------------------------
// This is the ONLY place you need to edit to change prices, names, units,
// or images. Each product is a plain object — no logic lives here.
//
// FIELD GUIDE
//   id         : product number (also used to derive the image filename)
//   category   : must match an `id` from src/data/categories.js
//   name       : English product name
//   tamilName  : Tamil product name (leave "" if not supplied)
//   unit       : pack/unit info, e.g. "1 BOX", "1 PKT"
//   mrp        : first supplied price = M.R.P./reference price.
//                Use `null` when no MRP was supplied (e.g. Gift Boxes).
//                NOTE: this is a reference price only, NOT a claim about the
//                manufacturer's original market price.
//   price      : second supplied price = "Our Price" (the selling price).
//                Use `null` ONLY when no price was supplied at all — the
//                product will then show "Price Update Required" and cannot
//                be added to the cart.
//   netRate    : true for Gift Boxes — shows "NET RATE" instead of a
//                MRP/discount comparison.
//   image      : path used for <img src>. Drop a real photo at this exact
//                path (see README "Replacing product images") and it will
//                be used automatically; until then a generated placeholder
//                is shown.
//
// To change a price: edit the `price` (Our Price) or `mrp` value below.
// To add a product: copy an object, give it a new unique `id`, and place it
// under the right `category`.
// ---------------------------------------------------------------------------

const img = (id) => `/images/products/product-${String(id).padStart(3, '0')}.webp`

const p = (id, category, name, tamilName, unit, mrp, price, extra = {}) => ({
  id,
  category,
  name,
  tamilName,
  unit,
  mrp,
  price,
  netRate: false,
  image: img(id),
  ...extra,
})

export const PRODUCTS = [
  // ---------------- KURUVI / LAKSHMI ----------------
  p(1, 'kuruvi-lakshmi', '2 3/4 Kuruvi', '2 3/4 குருவி', '1 PKT', 80, 8),
  p(2, 'kuruvi-lakshmi', '3 1/2 Lakshmi', '3 1/2 லட்சுமி', '1 PKT', 130, 13),
  p(3, 'kuruvi-lakshmi', '4" Lakshmi', '4" லட்சுமி', '1 PKT', 200, 20),
  p(4, 'kuruvi-lakshmi', 'Gold Lakshmi', 'தங்க லட்சுமி', '1 PKT', 350, 35),
  p(5, 'kuruvi-lakshmi', '5" Deluxe', '5" டீலக்ஸ்', '1 PKT', 500, 50),
  p(6, 'kuruvi-lakshmi', '6" Deluxe', '6" டீலக்ஸ்', '1 PKT', 600, 60),
  p(7, 'kuruvi-lakshmi', 'Thala Thalapathy', 'தல தளபதி', '1 PKT', 1000, 100),

  // ---------------- FLOWER POTS ----------------
  p(8, 'flower-pots', 'Flower Pots Small', 'பூந்தொட்டி சிறியது', '1 BOX', 600, 60),
  p(9, 'flower-pots', 'Flower Pot Big', 'பூந்தொட்டி பெரியது', '1 BOX', 800, 80),
  p(10, 'flower-pots', 'Flower Pots Special', 'பூந்தொட்டி ஸ்பெஷல்', '1 BOX', 1000, 100),
  p(11, 'flower-pots', 'Flower Pots Ashoka', 'பூந்தொட்டி அசோகா', '1 BOX', 1200, 120),
  p(12, 'flower-pots', 'Color Koti', 'கலர் கோட்டி', '1 BOX', 2000, 200),
  p(13, 'flower-pots', 'Color Koti Deluxe', 'கலர் கோட்டி டீலக்ஸ்', '1 BOX', 3000, 300),
  p(14, 'flower-pots', 'Mega Koti Deluxe', 'மெகா கோட்டி டீலக்ஸ்', '1 BOX', 4200, 420),

  // ---------------- GROUND CHAKKARAM ----------------
  p(15, 'ground-chakkaram', 'Ground Chakkaram (3)', '', '1 BOX', 400, 40),
  p(16, 'ground-chakkaram', 'Ground Chakkaram (Big 25 Pcs)', 'சக்கரம் பெரியது', '1 BOX', 900, 90),
  p(17, 'ground-chakkaram', 'Ground Chakkar Special', 'சக்கரம் ஸ்பெஷல்', '1 BOX', 1000, 100),
  p(18, 'ground-chakkaram', 'Ground Chakkar Deluxe', 'சக்கரம் டீலக்ஸ்', '1 BOX', 1500, 150),
  p(19, 'ground-chakkaram', 'Window Chakkar Special', '', '1 BOX', 1300, 130),
  p(20, 'ground-chakkaram', 'Window Chakkar Deluxe', 'விண்டோ சக்கரம் டீலக்ஸ்', '1 BOX', 1800, 180),

  // ---------------- BIJILI CRACKERS ----------------
  p(21, 'bijili-crackers', 'Red Bijili (50 Pcs)', 'சிவப்பு பிஜிலி (50 Pcs)', '1 PKT', 150, 15),
  p(22, 'bijili-crackers', 'Red Bijili (100 Pcs)', 'சிவப்பு பிஜிலி (100 Pcs)', '1 PKT', 300, 30),
  p(23, 'bijili-crackers', 'Gold Bijili', 'தங்க பிஜிலி', '1 PKT', 200, 20),
  p(24, 'bijili-crackers', 'Stripped Bijili', 'கோடு பிஜிலி', '1 PKT', 400, 40),

  // ---------------- BOMBS ----------------
  p(25, 'bombs', 'Auto Bomb', 'ஆட்டோ பாம்', '1 BOX', 500, 50),
  p(26, 'bombs', 'Hydro Bomb', 'ஹைட்ரோ பாம்', '1 BOX', 700, 70),
  p(27, 'bombs', 'King of King Bomb', 'கிங் ஆஃப் கிங் பாம்', '1 BOX', 900, 90),
  p(28, 'bombs', 'Classic Bomb', 'கிளாசிக் பாம்', '1 BOX', 1200, 120),
  p(29, 'bombs', 'Digital Bomb', 'டிஜிட்டல் பாம்', '1 BOX', 2200, 220),
  p(30, 'bombs', 'Squad Bomb', 'ஸ்குவாடு பாம்', '1 BOX', 2500, 250),
  p(31, 'bombs', '1/4kg Paper Bomb', 'பேப்பர் பாம் 1/4 kg', '1 BOX', 600, 60),
  p(32, 'bombs', '1/2kg Paper Bomb', 'பேப்பர் பாம் 1/2 kg', '1 BOX', 1200, 120),
  p(33, 'bombs', '1kg Paper Bomb', 'பேப்பர் பாம் 1 kg', '1 BOX', 2400, 240),
  p(34, 'bombs', 'Avatar (10 Pcs)', 'அவதார்', '1 BOX', 2500, 250),

  // ---------------- SINGLE FANCY SHOTS ----------------
  p(35, 'single-fancy-shots', '1" Chotta Fancy', '1" சோட்டா பேன்சி', '1 BOX', 500, 50),
  p(36, 'single-fancy-shots', '2" Chotta Fancy', '2" சோட்டா பேன்சி', '1 BOX', 1000, 100),
  p(37, 'single-fancy-shots', '2" Fancy (3 Pcs)', '2" பேன்சி (3 Pcs)', '1 BOX', 3000, 300),
  p(38, 'single-fancy-shots', '3 1/2 Fancy', '3 1/2" பேன்சி', '1 BOX', 3100, 310),
  p(39, 'single-fancy-shots', '3 1/2 Fancy Special', '3 1/2" பேன்சி ஸ்பெஷல்', '1 BOX', 3500, 350),
  p(40, 'single-fancy-shots', 'Nayagara Falls', 'நயகரா பால்ஸ்', '1 BOX', 4000, 400),
  p(41, 'single-fancy-shots', '4" Fancy Special', '4" பேன்சி ஸ்பெஷல்', '1 BOX', 4500, 450),
  p(42, 'single-fancy-shots', '5" Fancy', '5" ஸ்பெஷல்', '1 BOX', 5000, 500),
  p(43, 'single-fancy-shots', '5" Fancy (2 Pcs)', '5" பேன்சி (2 Pcs)', '1 BOX', 3500, 350),
  p(44, 'single-fancy-shots', '2" Fancy Multi Color (3 Pcs)', '2" பேன்சி மல்டி கலர் (3 Pcs)', '1 BOX', 10000, 1000),
  p(45, 'single-fancy-shots', '5" Fancy (2 Pcs)', '5" பேன்சி (2 Pcs)', '1 BOX', null, null, {
    needsVerification: true,
    note: 'DATA NEEDS VERIFICATION',
  }),

  // ---------------- MULTICOLOR SHOTS ----------------
  p(46, 'multicolor-shots', '7 Shots', '7 சாட்', '1 BOX', 1000, 100),
  p(47, 'multicolor-shots', 'Penta Gun Shot', 'பென்டா கன் சாட்', '1 BOX', 2000, 200),
  p(48, 'multicolor-shots', '12 Shots', '12 சாட்', '1 BOX', 1500, 150),
  p(49, 'multicolor-shots', '15 Smoke Shots', '15 ஸ்மோக் சாட்', '1 BOX', 5200, 520),
  p(50, 'multicolor-shots', '30 Shots', '30 சாட்', '1 BOX', 4000, 400),
  p(51, 'multicolor-shots', '60 Shots', '60 சாட்', '1 BOX', 8000, 800),
  p(52, 'multicolor-shots', '120 Shots', '120 சாட்', '1 BOX', 16000, 1600),
  p(53, 'multicolor-shots', '240 Shots', '240 சாட்', '1 BOX', 32000, 3200),
  p(54, 'multicolor-shots', '30 Shot Special', '30 சாட் ஸ்பெஷல்', '1 BOX', 5000, 500),
  p(55, 'multicolor-shots', '60 Shot Special', '60 சாட் ஸ்பெஷல்', '1 BOX', 10000, 1000),
  p(56, 'multicolor-shots', '120 Shot Special', '120 சாட் ஸ்பெஷல்', '1 BOX', 20000, 2000),
  p(57, 'multicolor-shots', '240 Shot Special', '240 சாட் ஸ்பெஷல்', '1 BOX', 40000, 4000),

  // ---------------- ROCKETS ----------------
  p(58, 'rockets', 'Baby Rocket', 'பேபி ராக்கெட்', '1 BOX', 400, 40),
  p(59, 'rockets', 'Rocket Bomb', 'ராக்கெட் பாம்', '1 BOX', null, null, {
    needsVerification: true,
    note: 'PRICE DATA MISSING / VERIFY BEFORE PUBLISHING',
  }),
  p(60, 'rockets', 'Whistling Rocket', 'விசில் ராக்கெட்', '1 BOX', 800, 200),
  p(61, 'rockets', '1 1/2 Twinkling Stars', '1 1/2" மின்னும் நட்சத்திரம்', '1 BOX', 300, 30),
  p(62, 'rockets', '4" Twinkling Stars', '4" மின்னும் நட்சத்திரம்', '1 BOX', 800, 80),

  // ---------------- CHILDREN SPECIAL ITEMS ----------------
  p(63, 'children-special-items', 'Photo Flash', 'போட்டோ பிளாஷ்', '1 BOX', 800, 80),
  p(64, 'children-special-items', 'Butterfly', 'வண்ணத்துப்பூச்சி', '1 BOX', 1200, 120),
  p(65, 'children-special-items', 'Selfie Stick', 'செல்பி ஸ்டிக்', '1 BOX', 800, 80),
  p(66, 'children-special-items', 'Color Rain', 'கலர் ரெயின்', '1 BOX', 1500, 150),
  p(67, 'children-special-items', 'Pambaram (10 Pcs)', 'பம்பரம்', '1 BOX', 1200, 120),
  p(68, 'children-special-items', 'Flora Rain', 'புலோரா ரெயின்', '1 BOX', 1800, 180),
  p(69, 'children-special-items', 'Sizzle Queen', 'சைசில் குயின்', '1 BOX', 2000, 200),
  p(70, 'children-special-items', 'Pop Corn', 'பாப் கார்ன்', '1 BOX', 1900, 190),

  // ---------------- NEW FLOWER COLLECTIONS ----------------
  p(71, 'new-flower-collections', 'Gold Rain', 'தங்க மழை', '1 BOX', 1500, 150),
  p(72, 'new-flower-collections', 'Star Rain', 'நட்சத்திர மழை', '1 BOX', 1500, 150),
  p(73, 'new-flower-collections', 'Water Falls', 'நீர் அருவி', '1 BOX', 1800, 180),
  p(74, 'new-flower-collections', 'Color Fountain', 'கலர் நீர்வீழ்ச்சி', '1 BOX', 1800, 180),

  // ---------------- SPECIAL ITEMS ----------------
  p(75, 'special-items', 'H2O Water Gun', 'H2O வாட்டர் துப்பாக்கி', '1 BOX', 1600, 160),
  p(76, 'special-items', '5G Pistol Big Gun', '5G பிஸ்டல் பெரிய துப்பாக்கி', '1 BOX', 2800, 280),
  p(77, 'special-items', 'Thor', 'தோர்', '1 BOX', 2300, 230),
  p(78, 'special-items', 'Wik Chakkaram', 'விக் சக்கரம்', '1 BOX', 2000, 200),
  p(79, 'special-items', 'Vall', 'வால்', '1 BOX', 2000, 200),

  // ---------------- SPARKLERS ----------------
  p(80, 'sparklers', '7cm Electric Sparklers', '7cm சாதா கம்பி', '1 BOX', 100, 10),
  p(81, 'sparklers', '7cm Color Sparklers', '7cm கலர் கம்பி', '1 BOX', 130, 13),
  p(82, 'sparklers', '7cm Green Sparklers', '7cm பச்சை கம்பி', '1 BOX', 160, 16),
  p(83, 'sparklers', '7cm Red Sparklers', '7cm சிவப்பு கம்பி', '1 BOX', 190, 19),
  p(84, 'sparklers', '10cm Electric Sparklers', '12cm சாதா கம்பி', '1 BOX', 200, 20),
  p(85, 'sparklers', '10cm Color Sparklers', '12cm கலர் கம்பி', '1 BOX', 220, 22),
  p(86, 'sparklers', '10cm Green Sparklers', '12cm பச்சை கம்பி', '1 BOX', 270, 27),
  p(87, 'sparklers', '10cm Red Sparklers', '12cm சிவப்பு கம்பி', '1 BOX', 280, 28),
  p(88, 'sparklers', '15cm Electric Sparklers', '15cm சாதா கம்பி', '1 BOX', 500, 50),
  p(89, 'sparklers', '15cm Color Sparklers', '15cm கலர் கம்பி', '1 BOX', 560, 56),
  p(90, 'sparklers', '15cm Green Sparklers', '15cm பச்சை கம்பி', '1 BOX', 600, 60),
  p(91, 'sparklers', '15cm Red Sparklers', '15cm சிவப்பு கம்பி', '1 BOX', 600, 60),
  p(92, 'sparklers', '30cm Electric Sparklers', '30cm சாதா கம்பி', '1 BOX', 560, 56),
  p(93, 'sparklers', '30cm Color Sparklers', '30cm கலர் கம்பி', '1 BOX', 580, 58),
  p(94, 'sparklers', '30cm Green Sparklers', '30cm பச்சை கம்பி', '1 BOX', 620, 62),
  p(95, 'sparklers', '30cm Red Sparklers', '30cm சிவப்பு கம்பி', '1 BOX', 620, 62),
  p(96, 'sparklers', '50cm Electric Sparklers', '50cm சாதா கம்பி', '1 BOX', 2200, 220),
  p(97, 'sparklers', '50cm Color Sparklers', '50cm கலர் கம்பி', '1 BOX', 2300, 230),
  p(98, 'sparklers', 'Dancing Umbrella Sparklers', '', '1 BOX', 2500, 250),

  // ---------------- NEW VARIETIES FOUNTAIN & COLORING (2024) ----------------
  p(99, 'new-varieties-fountain-coloring', 'Color Peacock', 'கலர் மயில்', '1 BOX', 250, 250),
  p(100, 'new-varieties-fountain-coloring', 'Old is Gold', 'பழமை என்றும் புதுமை', '1 BOX', 150, 150),
  p(101, 'new-varieties-fountain-coloring', 'Money Bank', 'பணப்பெட்டி', '1 BOX', 150, 150),
  p(102, 'new-varieties-fountain-coloring', 'Siren Peacock', 'சைரன் மயில்', '1 BOX', 220, 220),
  p(103, 'new-varieties-fountain-coloring', 'Peacock Feather', 'மயிலிறகு', '1 BOX', 120, 120),
  p(104, 'new-varieties-fountain-coloring', 'Color Peacock Green, Red', 'கலர் மயில் பச்சை, சிவப்பு', '1 BOX', 250, 250),
  p(105, 'new-varieties-fountain-coloring', 'Pada Peacock', 'பெரிய மயில்', '1 BOX', 520, 520),
  p(106, 'new-varieties-fountain-coloring', 'Smoke (3 Pcs)', 'ஸ்மோக்', '1 BOX', 200, 200),
  p(107, 'new-varieties-fountain-coloring', 'Tri Color', 'மூன்று கலர்', '1 BOX', 300, 300),
  p(108, 'new-varieties-fountain-coloring', 'Helicopter', 'ஹெலிகாப்டர்', '1 BOX', 120, 120),
  p(109, 'new-varieties-fountain-coloring', 'Bat Ball', 'பேட் பால்', '1 BOX', 300, 300),
  p(110, 'new-varieties-fountain-coloring', 'Hot Stream (Multi Color) Saver', '', '1 BOX', 180, 180),

  // ---------------- REPEATING SOUNDS ----------------
  p(111, 'repeating-sounds', '100 Gold', '100 தங்கம்', '1 BOX', 40, 40),
  p(112, 'repeating-sounds', '200 Gold', '200 தங்கம்', '1 BOX', 80, 80),
  p(113, 'repeating-sounds', '1000 Gold', '1000 தங்கம்', '1 BOX', 180, 180),
  p(114, 'repeating-sounds', '2000 Gold', '2000 தங்கம்', '1 BOX', 360, 360),
  p(115, 'repeating-sounds', '5000 Gold', '5000 தங்கம்', '1 BOX', 910, 910),
  p(116, 'repeating-sounds', '10000 Gold', '10000 தங்கம்', '1 BOX', 1840, 1840),
  p(117, 'repeating-sounds', '28 Chorsa', '28 சோர்சா', '1 BOX', 15, 15),
  p(118, 'repeating-sounds', '28 Giant', '28 ஜியன்ட்', '1 BOX', 20, 20),
  p(119, 'repeating-sounds', '56 Giant', '56 ஜியன்ட்', '1 BOX', 40, 40),
  p(120, 'repeating-sounds', '24 Deluxe', '24 டீலக்ஸ்', '1 BOX', 50, 50),
  p(121, 'repeating-sounds', '50 Deluxe', '50 டீலக்ஸ்', '1 BOX', 110, 110),
  p(122, 'repeating-sounds', '100 Deluxe', '100 டீலக்ஸ்', '1 BOX', 230, 230),

  // ---------------- GIFT BOXES (NET RATE — no MRP supplied) ----------------
  p(123, 'gift-boxes', '20 ITEM GIFT BOX', '', '1 BOX', null, 350, { netRate: true }),
  p(124, 'gift-boxes', '25 ITEM GIFT BOX', '', '1 BOX', null, 400, { netRate: true }),
  p(125, 'gift-boxes', '30 ITEM GIFT BOX', '', '1 BOX', null, 530, { netRate: true }),
  p(126, 'gift-boxes', '40 ITEM GIFT BOX', '', '1 BOX', null, 780, { netRate: true }),
  p(127, 'gift-boxes', '50 ITEM GIFT BOX', '', '1 BOX', null, 1050, { netRate: true }),
  p(128, 'gift-boxes', '60 ITEM GIFT BOX', '', '1 BOX', null, 1500, { netRate: true }),
]
