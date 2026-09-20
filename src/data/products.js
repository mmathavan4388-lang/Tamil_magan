// ==========================================================================
// PRODUCT DATA
// Edit prices, names, categories and images here. Everything else in the
// app (discount %, formatting, filtering, search) derives from this file.
//
// RULE: mrp = FIRST price supplied by the shop. offerPrice = SECOND price
// (actual customer selling price). Never swap these.
// ==========================================================================

export const CATEGORIES = [
  'One Sound Crackers',
  'Flower Pots',
  'Ground Chakkaram',
  'Bijili Crackers',
  'Bombs',
  'Single Fancy Shots',
  'Multicolor Shots',
  'Rockets',
  'Twinkling Stars',
  'Children Special Items',
  'New Flower Collections',
  'Konjam Kaila Bidinga Boss',
  'Sparklers',
  'New Varieties Fountain & Coloring',
  'Repeating Sounds',
  'Gift Boxes',
]

const img = (slug) => `/images/${slug}.jpg`

export const PRODUCTS = [
  // ---------------- ONE SOUND CRACKERS ----------------
  { id: 1, category: 'One Sound Crackers', name: '2 3/4 Kuruvi', tamilName: '2 3/4 குருவி', mrp: 80, offerPrice: 8, packing: '1 PKT', image: img('2-3-4-kuruvi') },
  { id: 2, category: 'One Sound Crackers', name: '3 1/2 Lakshmi', tamilName: '3 1/2 லட்சுமி', mrp: 130, offerPrice: 13, packing: '1 PKT', image: img('3-1-2-lakshmi') },
  { id: 3, category: 'One Sound Crackers', name: '4" Lakshmi', tamilName: '4" லட்சுமி', mrp: 200, offerPrice: 20, packing: '1 PKT', image: img('4-lakshmi') },
  { id: 4, category: 'One Sound Crackers', name: 'Gold Lakshmi', tamilName: 'தங்க லட்சுமி', mrp: 350, offerPrice: 35, packing: '1 PKT', image: img('gold-lakshmi') },
  { id: 5, category: 'One Sound Crackers', name: '5" Deluxe', tamilName: '5" டீலக்ஸ்', mrp: 500, offerPrice: 50, packing: '1 PKT', image: img('5-deluxe') },
  { id: 6, category: 'One Sound Crackers', name: '6" Deluxe', tamilName: '6" டீலக்ஸ்', mrp: 600, offerPrice: 60, packing: '1 PKT', image: img('6-deluxe') },
  { id: 7, category: 'One Sound Crackers', name: 'Thala Thalapathy', tamilName: 'தல தளபதி', mrp: 1000, offerPrice: 100, packing: '1 PKT', image: img('thala-thalapathy') },

  // ---------------- FLOWER POTS ----------------
  { id: 8, category: 'Flower Pots', name: 'Flower Pots Small', tamilName: 'பூந்தொட்டி சிறியது', mrp: 600, offerPrice: 60, packing: '1 BOX', image: img('flower-pots-small') },
  { id: 9, category: 'Flower Pots', name: 'Flower Pot Big', tamilName: 'பூந்தொட்டி பெரியது', mrp: 800, offerPrice: 80, packing: '1 BOX', image: img('flower-pot-big') },
  { id: 10, category: 'Flower Pots', name: 'Flower Pots Special', tamilName: 'பூந்தொட்டி ஸ்பெஷல்', mrp: 1000, offerPrice: 100, packing: '1 BOX', image: img('flower-pots-special') },
  { id: 11, category: 'Flower Pots', name: 'Flower Pots Ashoka', tamilName: 'பூந்தொட்டி அசோகா', mrp: 1200, offerPrice: 120, packing: '1 BOX', image: img('flower-pots-ashoka') },
  { id: 12, category: 'Flower Pots', name: 'Color Koti', tamilName: 'கலர் கோட்டி', mrp: 2000, offerPrice: 200, packing: '1 BOX', image: img('color-koti') },
  { id: 13, category: 'Flower Pots', name: 'Color Koti Deluxe', tamilName: 'கலர் கோட்டி டீலக்ஸ்', mrp: 3000, offerPrice: 300, packing: '1 BOX', image: img('color-koti-deluxe') },
  { id: 14, category: 'Flower Pots', name: 'Mega Koti Deluxe', tamilName: 'மெகா கோட்டி டீலக்ஸ்', mrp: 4200, offerPrice: 420, packing: '1 BOX', image: img('mega-koti-deluxe') },

  // ---------------- GROUND CHAKKARAM ----------------
  { id: 15, category: 'Ground Chakkaram', name: 'Ground Chakkaram (3)', tamilName: 'தரை சக்கரம் (3)', mrp: 400, offerPrice: 40, packing: '1 BOX', image: img('ground-chakkaram-3') },
  { id: 16, category: 'Ground Chakkaram', name: 'Ground Chakkaram Big 25', tamilName: 'சக்கரம் பெரியது', mrp: 900, offerPrice: 90, packing: '1 BOX', image: img('ground-chakkaram-big-25') },
  { id: 17, category: 'Ground Chakkaram', name: 'Ground Chakkar Special', tamilName: 'சக்கரம் ஸ்பெஷல்', mrp: 1000, offerPrice: 100, packing: '1 BOX', image: img('ground-chakkar-special') },
  { id: 18, category: 'Ground Chakkaram', name: 'Ground Chakkar Deluxe', tamilName: 'சக்கரம் டீலக்ஸ்', mrp: 1500, offerPrice: 150, packing: '1 BOX', image: img('ground-chakkar-deluxe') },
  { id: 19, category: 'Ground Chakkaram', name: 'Window Chakkar Special', tamilName: 'விண்டோ சக்கரம் ஸ்பெஷல்', mrp: 1300, offerPrice: 130, packing: '1 BOX', image: img('window-chakkar-special') },
  { id: 20, category: 'Ground Chakkaram', name: 'Window Chakkar Deluxe', tamilName: 'விண்டோ சக்கரம் டீலக்ஸ்', mrp: 1800, offerPrice: 180, packing: '1 BOX', image: img('window-chakkar-deluxe') },

  // ---------------- BIJILI CRACKERS ----------------
  { id: 21, category: 'Bijili Crackers', name: 'Red Bijili (50 Pcs)', tamilName: 'சிவப்பு பிஜிலி (50 Pcs)', mrp: 150, offerPrice: 15, packing: '1 PKT', image: img('red-bijili-50') },
  { id: 22, category: 'Bijili Crackers', name: 'Red Bijili (100 Pcs)', tamilName: 'சிவப்பு பிஜிலி (100 Pcs)', mrp: 300, offerPrice: 30, packing: '1 PKT', image: img('red-bijili-100') },
  { id: 23, category: 'Bijili Crackers', name: 'Gold Bijili', tamilName: 'தங்க பிஜிலி', mrp: 200, offerPrice: 20, packing: '1 PKT', image: img('gold-bijili') },
  { id: 24, category: 'Bijili Crackers', name: 'Stipped Bijili', tamilName: 'கோடு பிஜிலி', mrp: 400, offerPrice: 40, packing: '1 PKT', image: img('stipped-bijili') },

  // ---------------- BOMBS ----------------
  { id: 25, category: 'Bombs', name: 'Auto Bomb', tamilName: 'ஆட்டோ பாம்', mrp: 500, offerPrice: 50, packing: '1 BOX', image: img('auto-bomb') },
  { id: 26, category: 'Bombs', name: 'Hydro Bomb', tamilName: 'ஹைட்ரோ பாம்', mrp: 700, offerPrice: 70, packing: '1 BOX', image: img('hydro-bomb') },
  { id: 27, category: 'Bombs', name: 'King of King Bomb', tamilName: 'கிங் ஆஃப் கிங் பாம்', mrp: 900, offerPrice: 90, packing: '1 BOX', image: img('king-of-king-bomb') },
  { id: 28, category: 'Bombs', name: 'Classic Bomb', tamilName: 'கிளாசிக் பாம்', mrp: 1200, offerPrice: 120, packing: '1 BOX', image: img('classic-bomb') },
  { id: 29, category: 'Bombs', name: 'Digital Bomb', tamilName: 'டிஜிட்டல் பாம்', mrp: 2200, offerPrice: 220, packing: '1 BOX', image: img('digital-bomb') },
  { id: 30, category: 'Bombs', name: 'Squad Bomb', tamilName: 'ஸ்குவாடு பாம்', mrp: 2500, offerPrice: 250, packing: '1 BOX', image: img('squad-bomb') },
  { id: 31, category: 'Bombs', name: '1/4kg Paper Bomb', tamilName: 'பேப்பர் பாம் 1/4 kg', mrp: 600, offerPrice: 60, packing: '1 BOX', image: img('quarter-kg-paper-bomb') },
  { id: 32, category: 'Bombs', name: '1/2kg Paper Bomb', tamilName: 'பேப்பர் பாம் 1/2 kg', mrp: 1200, offerPrice: 120, packing: '1 BOX', image: img('half-kg-paper-bomb') },
  { id: 33, category: 'Bombs', name: '1kg Paper Bomb', tamilName: 'பேப்பர் பாம் 1 kg', mrp: 2400, offerPrice: 240, packing: '1 BOX', image: img('one-kg-paper-bomb') },
  { id: 34, category: 'Bombs', name: 'Avatar (10 Pcs)', tamilName: 'அவதார்', mrp: 2500, offerPrice: 250, packing: '1 BOX', image: img('avatar-10pcs') },

  // ---------------- SINGLE FANCY SHOTS ----------------
  { id: 35, category: 'Single Fancy Shots', name: '1" Chotta Fancy', tamilName: '1" சோட்டா பேன்சி', mrp: 500, offerPrice: 50, packing: '1 BOX', image: img('1-chotta-fancy') },
  { id: 36, category: 'Single Fancy Shots', name: '2" Chotta Fancy', tamilName: '2" சோட்டா பேன்சி', mrp: 1000, offerPrice: 100, packing: '1 BOX', image: img('2-chotta-fancy') },
  { id: 37, category: 'Single Fancy Shots', name: '2" Fancy (3 Pcs)', tamilName: '2" பேன்சி (3 Pcs)', mrp: 3000, offerPrice: 300, packing: '1 BOX', image: img('2-fancy-3pcs') },
  { id: 38, category: 'Single Fancy Shots', name: '3 1/2 Fancy', tamilName: '3 1/2" பேன்சி', mrp: 3100, offerPrice: 310, packing: '1 BOX', image: img('3-1-2-fancy') },
  { id: 39, category: 'Single Fancy Shots', name: '3 1/2 Fancy Special', tamilName: '3 1/2" பேன்சி ஸ்பெஷல்', mrp: 3500, offerPrice: 350, packing: '1 BOX', image: img('3-1-2-fancy-special') },
  { id: 40, category: 'Single Fancy Shots', name: 'Nayagara Falls', tamilName: 'நயகரா பால்ஸ்', mrp: 4000, offerPrice: 400, packing: '1 BOX', image: img('nayagara-falls') },
  { id: 41, category: 'Single Fancy Shots', name: '4" Fancy Special', tamilName: '4" பேன்சி ஸ்பெஷல்', mrp: 4500, offerPrice: 450, packing: '1 BOX', image: img('4-fancy-special') },
  { id: 42, category: 'Single Fancy Shots', name: '5" Fancy', tamilName: '5" ஸ்பெஷல்', mrp: 5000, offerPrice: 500, packing: '1 BOX', image: img('5-fancy') },
  { id: 43, category: 'Single Fancy Shots', name: '5" Fancy (2 Pcs)', tamilName: '5" பேன்சி (2 Pcs)', mrp: 3500, offerPrice: 350, packing: '1 BOX', image: img('5-fancy-2pcs') },
  // Items 44 and 45 intentionally excluded per shop instructions.

  // ---------------- MULTICOLOR SHOTS ----------------
  { id: 46, category: 'Multicolor Shots', name: '7 Shots', tamilName: '7 சாட்', mrp: 1000, offerPrice: 100, packing: '1 BOX', image: img('7-shots') },
  { id: 47, category: 'Multicolor Shots', name: 'Penta Gun Shot', tamilName: 'பென்டா கன் சாட்', mrp: 2000, offerPrice: 200, packing: '1 BOX', image: img('penta-gun-shot') },
  { id: 48, category: 'Multicolor Shots', name: '12 Shots', tamilName: '12 சாட்', mrp: 1500, offerPrice: 150, packing: '1 BOX', image: img('12-shots') },
  { id: 49, category: 'Multicolor Shots', name: '15 Smoke Shots', tamilName: '15 ஸ்மோக் சாட்', mrp: 5200, offerPrice: 520, packing: '1 BOX', image: img('15-smoke-shots') },
  { id: 50, category: 'Multicolor Shots', name: '30 Shots', tamilName: '30 சாட்', mrp: 4000, offerPrice: 400, packing: '1 BOX', image: img('30-shots') },
  { id: 51, category: 'Multicolor Shots', name: '60 Shots', tamilName: '60 சாட்', mrp: 8000, offerPrice: 800, packing: '1 BOX', image: img('60-shots') },
  { id: 52, category: 'Multicolor Shots', name: '120 Shots', tamilName: '120 சாட்', mrp: 16000, offerPrice: 1600, packing: '1 BOX', image: img('120-shots') },
  { id: 53, category: 'Multicolor Shots', name: '240 Shots', tamilName: '240 சாட்', mrp: 32000, offerPrice: 3200, packing: '1 BOX', image: img('240-shots') },
  { id: 54, category: 'Multicolor Shots', name: '30 Shot Special', tamilName: '30 சாட் ஸ்பெஷல்', mrp: 5000, offerPrice: 500, packing: '1 BOX', image: img('30-shot-special') },
  { id: 55, category: 'Multicolor Shots', name: '60 Shot Special', tamilName: '60 சாட் ஸ்பெஷல்', mrp: 10000, offerPrice: 1000, packing: '1 BOX', image: img('60-shot-special') },
  { id: 56, category: 'Multicolor Shots', name: '120 Shot Special', tamilName: '120 சாட் ஸ்பெஷல்', mrp: 20000, offerPrice: 2000, packing: '1 BOX', image: img('120-shot-special') },
  { id: 57, category: 'Multicolor Shots', name: '240 Shot Special', tamilName: '240 சாட் ஸ்பெஷல்', mrp: 40000, offerPrice: 4000, packing: '1 BOX', image: img('240-shot-special') },

  // ---------------- ROCKETS ----------------
  { id: 58, category: 'Rockets', name: 'Baby Rocket', tamilName: 'பேபி ராக்கெட்', mrp: 400, offerPrice: 40, packing: '1 BOX', image: img('baby-rocket') },
  // Items 59 and 60 intentionally excluded per shop instructions.

  // ---------------- TWINKLING STARS ----------------
  { id: 61, category: 'Twinkling Stars', name: '1 1/2 Twinkling Stars', tamilName: '1 1/2" மின்னும் நட்சத்திரம்', mrp: 300, offerPrice: 30, packing: '1 BOX', image: img('1-1-2-twinkling-stars') },
  { id: 62, category: 'Twinkling Stars', name: '4" Twinkling Stars', tamilName: '4" மின்னும் நட்சத்திரம்', mrp: 800, offerPrice: 80, packing: '1 BOX', image: img('4-twinkling-stars') },

  // ---------------- CHILDREN SPECIAL ITEMS ----------------
  { id: 63, category: 'Children Special Items', name: 'Photo Flash', tamilName: 'போட்டோ பிளாஷ்', mrp: 800, offerPrice: 80, packing: '1 BOX', image: img('photo-flash') },
  { id: 64, category: 'Children Special Items', name: 'Butterfly', tamilName: 'வண்ணத்துப்பூச்சி', mrp: 1200, offerPrice: 120, packing: '1 BOX', image: img('butterfly') },
  { id: 65, category: 'Children Special Items', name: 'Selfie Stick', tamilName: 'செல்பி ஸ்டிக்', mrp: 800, offerPrice: 80, packing: '1 BOX', image: img('selfie-stick') },
  { id: 66, category: 'Children Special Items', name: 'Color Rain', tamilName: 'கலர் ரெயின்', mrp: 1500, offerPrice: 150, packing: '1 BOX', image: img('color-rain') },
  { id: 67, category: 'Children Special Items', name: 'Pambaram (10 Pcs)', tamilName: 'பம்பரம்', mrp: 1200, offerPrice: 120, packing: '1 BOX', image: img('pambaram-10pcs') },
  { id: 68, category: 'Children Special Items', name: 'Flora Rain', tamilName: 'புலோரா ரெயின்', mrp: 1800, offerPrice: 180, packing: '1 BOX', image: img('flora-rain') },
  { id: 69, category: 'Children Special Items', name: 'Sizzle Queen', tamilName: 'சைசில் குயின்', mrp: 2000, offerPrice: 200, packing: '1 BOX', image: img('sizzle-queen') },
  { id: 70, category: 'Children Special Items', name: 'Pop Corn', tamilName: 'பாப் கார்ன்', mrp: 1900, offerPrice: 190, packing: '1 BOX', image: img('pop-corn') },

  // ---------------- NEW FLOWER COLLECTIONS ----------------
  { id: 71, category: 'New Flower Collections', name: 'Gold Rain', tamilName: 'தங்க மழை', mrp: 1500, offerPrice: 150, packing: '1 BOX', image: img('gold-rain') },
  { id: 72, category: 'New Flower Collections', name: 'Star Rain', tamilName: 'நட்சத்திர மழை', mrp: 1500, offerPrice: 150, packing: '1 BOX', image: img('star-rain') },
  { id: 73, category: 'New Flower Collections', name: 'Water Falls', tamilName: 'நீர் அருவி', mrp: 1800, offerPrice: 180, packing: '1 BOX', image: img('water-falls') },
  { id: 74, category: 'New Flower Collections', name: 'Color Fountain', tamilName: 'கலர் நீர்வீழ்ச்சி', mrp: 1800, offerPrice: 180, packing: '1 BOX', image: img('color-fountain') },

  // ---------------- KONJAM KAILA BIDINGA BOSS ----------------
  { id: 75, category: 'Konjam Kaila Bidinga Boss', name: 'H2O Water Gun', tamilName: 'H2O வாட்டர் துப்பாக்கி', mrp: 1600, offerPrice: 160, packing: '1 BOX', image: img('h2o-water-gun') },
  { id: 76, category: 'Konjam Kaila Bidinga Boss', name: '5G Pistol Big Gun', tamilName: '5G பிஸ்டல் பெரிய துப்பாக்கி', mrp: 2800, offerPrice: 280, packing: '1 BOX', image: img('5g-pistol-big-gun') },
  { id: 77, category: 'Konjam Kaila Bidinga Boss', name: 'Thor', tamilName: 'தோர்', mrp: 2300, offerPrice: 230, packing: '1 BOX', image: img('thor') },
  { id: 78, category: 'Konjam Kaila Bidinga Boss', name: 'Wik Chakkaram', tamilName: 'விக் சக்கரம்', mrp: 2000, offerPrice: 200, packing: '1 BOX', image: img('wik-chakkaram') },
  { id: 79, category: 'Konjam Kaila Bidinga Boss', name: 'Vall', tamilName: 'வால்', mrp: 2000, offerPrice: 200, packing: '1 BOX', image: img('vall') },

  // ---------------- SPARKLERS ----------------
  { id: 80, category: 'Sparklers', name: '7cm Electric Sparklers', tamilName: '7cm சாதா கம்பி', mrp: 100, offerPrice: 10, packing: '1 BOX', image: img('7cm-electric-sparklers') },
  { id: 81, category: 'Sparklers', name: '7cm Color Sparklers', tamilName: '7cm கலர் கம்பி', mrp: 130, offerPrice: 13, packing: '1 BOX', image: img('7cm-color-sparklers') },
  { id: 82, category: 'Sparklers', name: '7cm Green Sparklers', tamilName: '7cm பச்சை கம்பி', mrp: 160, offerPrice: 16, packing: '1 BOX', image: img('7cm-green-sparklers') },
  { id: 83, category: 'Sparklers', name: '7cm Red Sparklers', tamilName: '7cm சிவப்பு கம்பி', mrp: 190, offerPrice: 19, packing: '1 BOX', image: img('7cm-red-sparklers') },
  { id: 84, category: 'Sparklers', name: '10cm Electric Sparklers', tamilName: '12cm சாதா கம்பி', mrp: 200, offerPrice: 20, packing: '1 BOX', image: img('10cm-electric-sparklers') },
  { id: 85, category: 'Sparklers', name: '10cm Color Sparklers', tamilName: '12cm கலர் கம்பி', mrp: 220, offerPrice: 22, packing: '1 BOX', image: img('10cm-color-sparklers') },
  { id: 86, category: 'Sparklers', name: '10cm Green Sparklers', tamilName: '12cm பச்சை கம்பி', mrp: 270, offerPrice: 27, packing: '1 BOX', image: img('10cm-green-sparklers') },
  { id: 87, category: 'Sparklers', name: '10cm Red Sparklers', tamilName: '12cm சிவப்பு கம்பி', mrp: 280, offerPrice: 28, packing: '1 BOX', image: img('10cm-red-sparklers') },
  { id: 88, category: 'Sparklers', name: '15cm Electric Sparklers', tamilName: '15cm சாதா கம்பி', mrp: 500, offerPrice: 50, packing: '1 BOX', image: img('15cm-electric-sparklers') },
  { id: 89, category: 'Sparklers', name: '15cm Color Sparklers', tamilName: '15cm கலர் கம்பி', mrp: 560, offerPrice: 56, packing: '1 BOX', image: img('15cm-color-sparklers') },
  { id: 90, category: 'Sparklers', name: '15cm Green Sparklers', tamilName: '15cm பச்சை கம்பி', mrp: 600, offerPrice: 60, packing: '1 BOX', image: img('15cm-green-sparklers') },
  { id: 91, category: 'Sparklers', name: '15cm Red Sparklers', tamilName: '15cm சிவப்பு கம்பி', mrp: 600, offerPrice: 60, packing: '1 BOX', image: img('15cm-red-sparklers') },
  { id: 92, category: 'Sparklers', name: '30cm Electric Sparklers', tamilName: '30cm சாதா கம்பி', mrp: 560, offerPrice: 56, packing: '1 BOX', image: img('30cm-electric-sparklers') },
  { id: 93, category: 'Sparklers', name: '30cm Color Sparklers', tamilName: '30cm கலர் கம்பி', mrp: 580, offerPrice: 58, packing: '1 BOX', image: img('30cm-color-sparklers') },
  { id: 94, category: 'Sparklers', name: '30cm Green Sparklers', tamilName: '30cm பச்சை கம்பி', mrp: 620, offerPrice: 62, packing: '1 BOX', image: img('30cm-green-sparklers') },
  { id: 95, category: 'Sparklers', name: '30cm Red Sparklers', tamilName: '30cm சிவப்பு கம்பி', mrp: 620, offerPrice: 62, packing: '1 BOX', image: img('30cm-red-sparklers') },
  { id: 96, category: 'Sparklers', name: '50cm Electric Sparklers', tamilName: '50cm சாதா கம்பி', mrp: 2200, offerPrice: 220, packing: '1 BOX', image: img('50cm-electric-sparklers') },
  { id: 97, category: 'Sparklers', name: '50cm Color Sparklers', tamilName: '50cm கலர் கம்பி', mrp: 2300, offerPrice: 230, packing: '1 BOX', image: img('50cm-color-sparklers') },
  { id: 98, category: 'Sparklers', name: 'Dancing Umbrella Sparklers', tamilName: 'Dancing Umbrella Sparklers', mrp: 2500, offerPrice: 250, packing: '1 BOX', image: img('dancing-umbrella-sparklers') },

  // ---------------- NEW VARIETIES FOUNTAIN & COLORING ----------------
  { id: 99, category: 'New Varieties Fountain & Coloring', name: 'Color Peacock', tamilName: 'கலர் மயில்', mrp: 250, offerPrice: 250, packing: '1 BOX', image: img('color-peacock') },
  { id: 100, category: 'New Varieties Fountain & Coloring', name: 'Old is Gold', tamilName: 'பழமை என்றும் புதுமை', mrp: 150, offerPrice: 150, packing: '1 BOX', image: img('old-is-gold') },
  { id: 101, category: 'New Varieties Fountain & Coloring', name: 'Money Bank', tamilName: 'பணப்பெட்டி', mrp: 150, offerPrice: 150, packing: '1 BOX', image: img('money-bank') },
  { id: 102, category: 'New Varieties Fountain & Coloring', name: 'Siren Peacock', tamilName: 'சைரன் மயில்', mrp: 220, offerPrice: 220, packing: '1 BOX', image: img('siren-peacock') },
  { id: 103, category: 'New Varieties Fountain & Coloring', name: 'Peacock Feather', tamilName: 'மயிலிறகு', mrp: 120, offerPrice: 120, packing: '1 BOX', image: img('peacock-feather') },
  { id: 104, category: 'New Varieties Fountain & Coloring', name: 'Color Peacock Green, Red', tamilName: 'கலர் மயில் பச்சை, சிவப்பு', mrp: 250, offerPrice: 250, packing: '1 BOX', image: img('color-peacock-green-red') },
  { id: 105, category: 'New Varieties Fountain & Coloring', name: 'Pada Peacock', tamilName: 'பெரிய மயில்', mrp: 520, offerPrice: 520, packing: '1 BOX', image: img('pada-peacock') },
  { id: 106, category: 'New Varieties Fountain & Coloring', name: 'Smoke (3 Pcs)', tamilName: 'ஸ்மோக்', mrp: 200, offerPrice: 200, packing: '1 BOX', image: img('smoke-3pcs') },
  { id: 107, category: 'New Varieties Fountain & Coloring', name: 'Tri Color', tamilName: 'மூன்று கலர்', mrp: 300, offerPrice: 300, packing: '1 BOX', image: img('tri-color') },
  { id: 108, category: 'New Varieties Fountain & Coloring', name: 'Helicopter', tamilName: 'ஹெலிகாப்டர்', mrp: 120, offerPrice: 120, packing: '1 BOX', image: img('helicopter') },
  { id: 109, category: 'New Varieties Fountain & Coloring', name: 'Bat Ball', tamilName: 'பேட் பால்', mrp: 300, offerPrice: 300, packing: '1 BOX', image: img('bat-ball') },
  { id: 110, category: 'New Varieties Fountain & Coloring', name: 'Hot Stream (Multi Color) Saver', tamilName: 'Hot Stream (Multi Color) Saver', mrp: 180, offerPrice: 180, packing: '1 BOX', image: img('hot-stream-saver') },

  // ---------------- REPEATING SOUNDS ----------------
  { id: 111, category: 'Repeating Sounds', name: '100 Gold', tamilName: '100 தங்கம்', mrp: 40, offerPrice: 40, packing: '1 BOX', image: img('100-gold') },
  { id: 112, category: 'Repeating Sounds', name: '200 Gold', tamilName: '200 தங்கம்', mrp: 80, offerPrice: 80, packing: '1 BOX', image: img('200-gold') },
  { id: 113, category: 'Repeating Sounds', name: '1000 Gold', tamilName: '1000 தங்கம்', mrp: 180, offerPrice: 180, packing: '1 BOX', image: img('1000-gold') },
  { id: 114, category: 'Repeating Sounds', name: '2000 Gold', tamilName: '2000 தங்கம்', mrp: 360, offerPrice: 360, packing: '1 BOX', image: img('2000-gold') },
  { id: 115, category: 'Repeating Sounds', name: '5000 Gold', tamilName: '5000 தங்கம்', mrp: 910, offerPrice: 910, packing: '1 BOX', image: img('5000-gold') },
  { id: 116, category: 'Repeating Sounds', name: '10000 Gold', tamilName: '10000 தங்கம்', mrp: 1840, offerPrice: 1840, packing: '1 BOX', image: img('10000-gold') },
  { id: 117, category: 'Repeating Sounds', name: '28 Chorsa', tamilName: '28 சோர்சா', mrp: 15, offerPrice: 15, packing: '1 BOX', image: img('28-chorsa') },
  { id: 118, category: 'Repeating Sounds', name: '28 Giant', tamilName: '28 ஜியன்ட்', mrp: 20, offerPrice: 20, packing: '1 BOX', image: img('28-giant') },
  { id: 119, category: 'Repeating Sounds', name: '56 Giant', tamilName: '56 ஜியன்ட்', mrp: 40, offerPrice: 40, packing: '1 BOX', image: img('56-giant') },
  { id: 120, category: 'Repeating Sounds', name: '24 Deluxe', tamilName: '24 டீலக்ஸ்', mrp: 50, offerPrice: 50, packing: '1 BOX', image: img('24-deluxe') },
  { id: 121, category: 'Repeating Sounds', name: '50 Deluxe', tamilName: '50 டீலக்ஸ்', mrp: 110, offerPrice: 110, packing: '1 BOX', image: img('50-deluxe') },
  { id: 122, category: 'Repeating Sounds', name: '100 Deluxe', tamilName: '100 டீலக்ஸ்', mrp: 230, offerPrice: 230, packing: '1 BOX', image: img('100-deluxe') },

  // ---------------- GIFT BOXES (NET RATE) ----------------
  { id: 123, category: 'Gift Boxes', name: '20 ITEM GIFT BOX', tamilName: '20 ITEM GIFT BOX', mrp: 350, offerPrice: 350, packing: '1 BOX', image: img('20-item-gift-box') },
  { id: 124, category: 'Gift Boxes', name: '25 ITEM GIFT BOX', tamilName: '25 ITEM GIFT BOX', mrp: 400, offerPrice: 400, packing: '1 BOX', image: img('25-item-gift-box') },
  { id: 125, category: 'Gift Boxes', name: '30 ITEM GIFT BOX', tamilName: '30 ITEM GIFT BOX', mrp: 530, offerPrice: 530, packing: '1 BOX', image: img('30-item-gift-box') },
  { id: 126, category: 'Gift Boxes', name: '40 ITEM GIFT BOX', tamilName: '40 ITEM GIFT BOX', mrp: 780, offerPrice: 780, packing: '1 BOX', image: img('40-item-gift-box') },
  { id: 127, category: 'Gift Boxes', name: '50 ITEM GIFT BOX', tamilName: '50 ITEM GIFT BOX', mrp: 1050, offerPrice: 1050, packing: '1 BOX', image: img('50-item-gift-box') },
  { id: 128, category: 'Gift Boxes', name: '60 ITEM GIFT BOX', tamilName: '60 ITEM GIFT BOX', mrp: 1500, offerPrice: 1500, packing: '1 BOX', image: img('60-item-gift-box') },
]

// discount % = ((mrp - offerPrice) / mrp) * 100, rounded down, never negative.
export function getDiscountPercent(mrp, offerPrice) {
  if (!mrp || mrp <= offerPrice) return 0
  return Math.round(((mrp - offerPrice) / mrp) * 100)
}
