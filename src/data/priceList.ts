export interface PriceListItem {
  sno: number;
  name: string;
  nameTamil: string;
  price: number;
  per: string;
  offerPrice: number;
  priceOnRequest?: boolean;
}

export interface PriceListCategory {
  title: string;
  titleTamil?: string;
  simple?: boolean;
  items: PriceListItem[];
}

export const priceListMeta = {
  shopName: "KABERIAL PATTASU KADAI",
  listTitle: "Price List - 2025",
  phones: ["+91 95003 56197", "+91 76049 65753"],
  address: "2/369, Sattur Main Road, Thayilpatti, Sivakasi - 626 128",
};

export const priceList: PriceListCategory[] = [
  {
    title: "One Sound Crackers",
    titleTamil: "ஒரு ஒலி பட்டாசுகள்",
    items: [
      { sno: 1, name: "2 3/4 Kuruvi", nameTamil: "2 3/4 குருவி", price: 80, per: "1 PKT", offerPrice: 8 },
      { sno: 2, name: "3 1/2 Lakshmi", nameTamil: "3 1/2 லட்சுமி", price: 130, per: "1 PKT", offerPrice: 13 },
      { sno: 3, name: '4" Lakshmi', nameTamil: '4" லட்சுமி', price: 200, per: "1 PKT", offerPrice: 20 },
      { sno: 4, name: "Gold Lakshmi", nameTamil: "தங்க லட்சுமி", price: 350, per: "1 PKT", offerPrice: 35 },
      { sno: 5, name: '5" Deluxe', nameTamil: '5" டீலக்ஸ்', price: 500, per: "1 PKT", offerPrice: 50 },
      { sno: 6, name: '6" Deluxe', nameTamil: '6" டீலக்ஸ்', price: 600, per: "1 PKT", offerPrice: 60 },
      { sno: 7, name: "Thala Thalapathy", nameTamil: "தல தளபதி", price: 1000, per: "1 PKT", offerPrice: 100 },
    ],
  },
  {
    title: "Flower Pots",
    titleTamil: "பூந்தோட்டிகள்",
    items: [
      { sno: 8, name: "Flower Pots Small", nameTamil: "பூந்தோட்டி சிறியது", price: 600, per: "1 BOX", offerPrice: 60 },
      { sno: 9, name: "Flower Pot Big", nameTamil: "பூந்தோட்டி பெரியது", price: 800, per: "1 BOX", offerPrice: 80 },
      { sno: 10, name: "Flower Pots Special", nameTamil: "பூந்தோட்டி ஸ்பெஷல்", price: 1000, per: "1 BOX", offerPrice: 100 },
      { sno: 11, name: "Flower Pots Ashoka", nameTamil: "பூந்தோட்டி அசோகா", price: 1200, per: "1 BOX", offerPrice: 120 },
      { sno: 12, name: "Color Koti", nameTamil: "கலர் கோட்டி", price: 2000, per: "1 BOX", offerPrice: 200 },
      { sno: 13, name: "Color Koti Deluxe", nameTamil: "கலர் கோட்டி டீலக்ஸ்", price: 3000, per: "1 BOX", offerPrice: 300 },
      { sno: 14, name: "Mega Koti Deluxe", nameTamil: "மெகா கோட்டி டீலக்ஸ்", price: 4200, per: "1 BOX", offerPrice: 420 },
    ],
  },
  {
    title: "Ground Chakkaram",
    titleTamil: "தரை சக்கரம்",
    items: [
      { sno: 15, name: "Ground Chakkaram (Small 10 Pcs)", nameTamil: "சக்கரம் சிறியது", price: 400, per: "1 BOX", offerPrice: 40 },
      { sno: 16, name: "Ground Chakkaram (Big 25 Pcs)", nameTamil: "சக்கரம் பெரியது", price: 900, per: "1 BOX", offerPrice: 90 },
      { sno: 17, name: "Ground Chakkar Special", nameTamil: "சக்கரம் ஸ்பெஷல்", price: 1000, per: "1 BOX", offerPrice: 100 },
      { sno: 18, name: "Ground Chakkar Deluxe", nameTamil: "சக்கரம் டீலக்ஸ்", price: 1500, per: "1 BOX", offerPrice: 150 },
      { sno: 19, name: "Window Chakkar Special", nameTamil: "விண்டோ சக்கரம் ஸ்பெஷல்", price: 1300, per: "1 BOX", offerPrice: 130 },
      { sno: 20, name: "Window Chakkar Deluxe", nameTamil: "விண்டோ சக்கரம் டீலக்ஸ்", price: 1800, per: "1 BOX", offerPrice: 180 },
    ],
  },
  {
    title: "Bijili Crackers",
    titleTamil: "பிஜிலி பட்டாசுகள்",
    items: [
      { sno: 21, name: "Red Bijili (50 Pcs)", nameTamil: "சிவப்பு பிஜிலி (50 Pcs)", price: 150, per: "1 PKT", offerPrice: 15 },
      { sno: 22, name: "Red Bijili (100 Pcs)", nameTamil: "சிவப்பு பிஜிலி (100 Pcs)", price: 300, per: "1 PKT", offerPrice: 30 },
      { sno: 23, name: "Gold Bijili", nameTamil: "தங்க பிஜிலி", price: 200, per: "1 PKT", offerPrice: 20 },
      { sno: 24, name: "Stipped Bijili", nameTamil: "கோடு பிஜிலி", price: 400, per: "1 PKT", offerPrice: 40 },
    ],
  },
  {
    title: "Bombs",
    titleTamil: "பாம்",
    items: [
      { sno: 25, name: "Auto Bomb", nameTamil: "ஆட்டோ பாம்", price: 500, per: "1 BOX", offerPrice: 50 },
      { sno: 26, name: "Hydro Bomb", nameTamil: "ஹைட்ரோ பாம்", price: 700, per: "1 BOX", offerPrice: 70 },
      { sno: 27, name: "King of King Bomb", nameTamil: "கிங் ஆஃப் கிங் பாம்", price: 900, per: "1 BOX", offerPrice: 90 },
      { sno: 28, name: "Classic Bomb", nameTamil: "கிளாசிக் பாம்", price: 1200, per: "1 BOX", offerPrice: 120 },
      { sno: 29, name: "Digital Bomb", nameTamil: "டிஜிட்டல் பாம்", price: 2200, per: "1 BOX", offerPrice: 220 },
      { sno: 30, name: "Squad Bomb", nameTamil: "ஸ்குவாட் பாம்", price: 2500, per: "1 BOX", offerPrice: 250 },
      { sno: 31, name: "1/4kg Paper Bomb", nameTamil: "பேப்பர் பாம் 1/4 kg", price: 600, per: "1 BOX", offerPrice: 60 },
      { sno: 32, name: "1/2kg Paper Bomb", nameTamil: "பேப்பர் பாம் 1/2 kg", price: 1200, per: "1 BOX", offerPrice: 120 },
      { sno: 33, name: "1kg Paper Bomb", nameTamil: "பேப்பர் பாம் 1 kg", price: 2400, per: "1 BOX", offerPrice: 240 },
      { sno: 34, name: "Avatar (10 Pcs)", nameTamil: "அவதார்", price: 2500, per: "1 BOX", offerPrice: 250 },
    ],
  },
  {
    title: "Single Fancy Shots",
    titleTamil: "ஒற்றை பேன்சி சாட்",
    items: [
      { sno: 35, name: '1" Chotta Fancy', nameTamil: '1" சோட்டா பேன்சி', price: 500, per: "1 BOX", offerPrice: 50 },
      { sno: 36, name: '2" Chotta Fancy', nameTamil: '2" சோட்டா பேன்சி', price: 1000, per: "1 BOX", offerPrice: 100 },
      { sno: 37, name: '2" Fancy (3 Pcs)', nameTamil: '2" பேன்சி (3 Pcs)', price: 3000, per: "1 BOX", offerPrice: 300 },
      { sno: 38, name: "3 1/2 Fancy", nameTamil: '3 1/2" பேன்சி', price: 3100, per: "1 BOX", offerPrice: 310 },
      { sno: 39, name: "3 1/2 Fancy Special", nameTamil: '3 1/2" பேன்சி ஸ்பெஷல்', price: 3500, per: "1 BOX", offerPrice: 350 },
      { sno: 40, name: "Nayagara Falls", nameTamil: "நயாகரா பால்ஸ்", price: 4000, per: "1 BOX", offerPrice: 400 },
      { sno: 41, name: '4" Fancy Special', nameTamil: '4" பேன்சி ஸ்பெஷல்', price: 4500, per: "1 BOX", offerPrice: 450 },
      { sno: 42, name: '5" Fancy', nameTamil: '5" ஸ்பெஷல்', price: 5000, per: "1 BOX", offerPrice: 500 },
      { sno: 43, name: '5" Fancy (2 Pcs)', nameTamil: '5" பேன்சி (2 Pcs)', price: 3500, per: "1 BOX", offerPrice: 350 },
      { sno: 44, name: '2" Fancy Multi Color (3 Pcs)', nameTamil: '2" பேன்சி மல்டி கலர் (3 Pcs)', price: 10000, per: "1 BOX", offerPrice: 1000 },
      { sno: 45, name: '5" Fancy (2 Pcs)', nameTamil: '5" பேன்சி (2 Pcs)', price: 0, per: "1 BOX", offerPrice: 0, priceOnRequest: true },
    ],
  },
  {
    title: "Multicolor Shots",
    titleTamil: "பலவண்ணம் சாட்",
    items: [
      { sno: 46, name: "7 Shots", nameTamil: "7 சாட்", price: 1000, per: "1 BOX", offerPrice: 100 },
      { sno: 47, name: "Penta Gun Shot", nameTamil: "பென்டா கன் சாட்", price: 2000, per: "1 BOX", offerPrice: 200 },
      { sno: 48, name: "12 Shots", nameTamil: "12 சாட்", price: 1500, per: "1 BOX", offerPrice: 150 },
      { sno: 49, name: "15 Smoke Shots", nameTamil: "15 ஸ்மோக் சாட்", price: 5200, per: "1 BOX", offerPrice: 520 },
      { sno: 50, name: "30 Shots", nameTamil: "30 சாட்", price: 4000, per: "1 BOX", offerPrice: 400 },
      { sno: 51, name: "60 Shots", nameTamil: "60 சாட்", price: 8000, per: "1 BOX", offerPrice: 800 },
      { sno: 52, name: "120 Shots", nameTamil: "120 சாட்", price: 16000, per: "1 BOX", offerPrice: 1600 },
      { sno: 53, name: "240 Shots", nameTamil: "240 சாட்", price: 32000, per: "1 BOX", offerPrice: 3200 },
      { sno: 54, name: "30 Shot (Special)", nameTamil: "30 சாட் ஸ்பெஷல்", price: 5000, per: "1 BOX", offerPrice: 500 },
      { sno: 55, name: "60 Shot (Special)", nameTamil: "60 சாட் ஸ்பெஷல்", price: 10000, per: "1 BOX", offerPrice: 1000 },
      { sno: 56, name: "120 Shot (Special)", nameTamil: "120 சாட் ஸ்பெஷல்", price: 20000, per: "1 BOX", offerPrice: 2000 },
      { sno: 57, name: "240 Shot (Special)", nameTamil: "240 சாட் ஸ்பெஷல்", price: 40000, per: "1 BOX", offerPrice: 4000 },
    ],
  },
  {
    title: "Rockets",
    titleTamil: "ராக்கெட்",
    items: [
      { sno: 58, name: "Baby Rocket", nameTamil: "பேபி ராக்கெட்", price: 400, per: "1 BOX", offerPrice: 40 },
      { sno: 59, name: "Rocket Bomb", nameTamil: "ராக்கெட் பாம்", price: 800, per: "1 BOX", offerPrice: 80 },
      { sno: 60, name: "Whistling Rocket", nameTamil: "விசில் ராக்கெட்", price: 2000, per: "1 BOX", offerPrice: 200 },
    ],
  },
  {
    title: "Twinkling Stars",
    titleTamil: "மின்னும் நட்சத்திரம்",
    items: [
      { sno: 61, name: "1 1/2 Twinkling Stars", nameTamil: '1 1/2" மின்னும் நட்சத்திரம்', price: 300, per: "1 BOX", offerPrice: 30 },
      { sno: 62, name: '4" Twinkling Stars', nameTamil: '4" மின்னும் நட்சத்திரம்', price: 800, per: "1 BOX", offerPrice: 80 },
    ],
  },
  {
    title: "Children Special Items",
    titleTamil: "குழந்தைகள் சிறப்பு பொருட்கள்",
    items: [
      { sno: 63, name: "Photo Flash", nameTamil: "போட்டோ பிளாஷ்", price: 800, per: "1 BOX", offerPrice: 80 },
      { sno: 64, name: "Butterfly", nameTamil: "வண்ணத்துப்பூச்சி", price: 1200, per: "1 BOX", offerPrice: 120 },
      { sno: 65, name: "Selfie Stick", nameTamil: "செல்பி ஸ்டிக்", price: 800, per: "1 BOX", offerPrice: 80 },
      { sno: 66, name: "Color Rain", nameTamil: "கலர் ரெயின்", price: 1500, per: "1 BOX", offerPrice: 150 },
      { sno: 67, name: "Pambaram (10 Pcs)", nameTamil: "பம்பரம்", price: 1200, per: "1 BOX", offerPrice: 120 },
      { sno: 68, name: "Flora Rain", nameTamil: "புலோரா ரெயின்", price: 1800, per: "1 BOX", offerPrice: 180 },
      { sno: 69, name: "Sizzle Queen", nameTamil: "சைசில் குயின்", price: 2000, per: "1 BOX", offerPrice: 200 },
      { sno: 70, name: "Pop Corn", nameTamil: "பாப் கார்ன்", price: 1900, per: "1 BOX", offerPrice: 190 },
    ],
  },
  {
    title: "New Flower Collections",
    titleTamil: "புதிய பூந்தொட்டி சேகர்ப்பு",
    items: [
      { sno: 71, name: "Gold Rain", nameTamil: "தங்க மழை", price: 1500, per: "1 BOX", offerPrice: 150 },
      { sno: 72, name: "Star Rain", nameTamil: "நட்சத்திர மழை", price: 1500, per: "1 BOX", offerPrice: 150 },
      { sno: 73, name: "Water Falls", nameTamil: "நீர் அருவி", price: 1800, per: "1 BOX", offerPrice: 180 },
      { sno: 74, name: "Color Fountain", nameTamil: "கலர் நீர்வீழ்ச்சி", price: 1800, per: "1 BOX", offerPrice: 180 },
    ],
  },
  {
    title: "Konjam Kaila Bidinga Boss",
    titleTamil: "கொஞ்சம் கைல பிங்க பாஸ்",
    items: [
      { sno: 75, name: "H2O Water Gun", nameTamil: "H2O வாட்டர் துப்பாக்கி", price: 1600, per: "1 BOX", offerPrice: 160 },
      { sno: 76, name: "5G Pistol Big Gun", nameTamil: "5G பிஸ்டல் பெரிய துப்பாக்கி", price: 2800, per: "1 BOX", offerPrice: 280 },
      { sno: 77, name: "Thor", nameTamil: "தோர்", price: 2300, per: "1 BOX", offerPrice: 230 },
      { sno: 78, name: "Wik Chakkaram", nameTamil: "விக் சக்கரம்", price: 2000, per: "1 BOX", offerPrice: 200 },
      { sno: 79, name: "Vall", nameTamil: "வால்", price: 2000, per: "1 BOX", offerPrice: 200 },
    ],
  },
  {
    title: "Sparklers",
    titleTamil: "கம்பிகள்",
    items: [
      { sno: 80, name: "7cm Electric Sparklers", nameTamil: "7cm சாதா கம்பி", price: 100, per: "1 BOX", offerPrice: 10 },
      { sno: 81, name: "7cm Color Sparklers", nameTamil: "7cm கலர் கம்பி", price: 130, per: "1 BOX", offerPrice: 13 },
      { sno: 82, name: "7cm Green Sparklers", nameTamil: "7cm பச்சை கம்பி", price: 160, per: "1 BOX", offerPrice: 16 },
      { sno: 83, name: "7cm Red Sparklers", nameTamil: "7cm சிவப்பு கம்பி", price: 190, per: "1 BOX", offerPrice: 19 },
      { sno: 84, name: "10cm Electric Sparklers", nameTamil: "12cm சாதா கம்பி", price: 200, per: "1 BOX", offerPrice: 20 },
      { sno: 85, name: "10cm Color Sparklers", nameTamil: "12cm கலர் கம்பி", price: 220, per: "1 BOX", offerPrice: 22 },
      { sno: 86, name: "10cm Green Sparklers", nameTamil: "12cm பச்சை கம்பி", price: 270, per: "1 BOX", offerPrice: 27 },
      { sno: 87, name: "10cm Red Sparklers", nameTamil: "12cm சிவப்பு கம்பி", price: 280, per: "1 BOX", offerPrice: 28 },
      { sno: 88, name: "15cm Electric Sparklers", nameTamil: "15cm சாதா கம்பி", price: 500, per: "1 BOX", offerPrice: 50 },
      { sno: 89, name: "15cm Color Sparklers", nameTamil: "15cm கலர் கம்பி", price: 560, per: "1 BOX", offerPrice: 56 },
      { sno: 90, name: "15cm Green Sparklers", nameTamil: "15cm பச்சை கம்பி", price: 600, per: "1 BOX", offerPrice: 60 },
      { sno: 91, name: "15cm Red Sparklers", nameTamil: "15cm சிவப்பு கம்பி", price: 600, per: "1 BOX", offerPrice: 60 },
      { sno: 92, name: "30cm Electric Sparklers", nameTamil: "30cm சாதா கம்பி", price: 560, per: "1 BOX", offerPrice: 56 },
      { sno: 93, name: "30cm Color Sparklers", nameTamil: "30cm கலர் கம்பி", price: 580, per: "1 BOX", offerPrice: 58 },
      { sno: 94, name: "30cm Green Sparklers", nameTamil: "30cm பச்சை கம்பி", price: 620, per: "1 BOX", offerPrice: 62 },
      { sno: 95, name: "30cm Red Sparklers", nameTamil: "30cm சிவப்பு கம்பி", price: 620, per: "1 BOX", offerPrice: 62 },
      { sno: 96, name: "50cm Electric Sparklers", nameTamil: "50cm சாதா கம்பி", price: 2200, per: "1 BOX", offerPrice: 220 },
      { sno: 97, name: "50cm Color Sparklers", nameTamil: "50cm கலர் கம்பி", price: 2300, per: "1 BOX", offerPrice: 230 },
      { sno: 98, name: "Dancing Umbrella Sparklers", nameTamil: "டான்சிங் அம்ரல்லா கம்பி", price: 2500, per: "1 BOX", offerPrice: 250 },
    ],
  },
  {
    title: "New Varaties Fountain & Coloring (2024)",
    items: [
      { sno: 99, name: "Color Peacock", nameTamil: "கலர் மயில்", price: 250, per: "1 BOX", offerPrice: 250 },
      { sno: 100, name: "Old is Gold", nameTamil: "பழமை என்றும் புதுமை", price: 150, per: "1 BOX", offerPrice: 150 },
      { sno: 101, name: "Money Bank", nameTamil: "பணப்பெட்டி", price: 150, per: "1 BOX", offerPrice: 150 },
      { sno: 102, name: "Siren Peacock", nameTamil: "சைரன் மயில்", price: 220, per: "1 BOX", offerPrice: 220 },
      { sno: 103, name: "Peacock Feather", nameTamil: "மயிலிறகு", price: 120, per: "1 BOX", offerPrice: 120 },
      { sno: 104, name: "Color Peacock Green, Red", nameTamil: "கலர் மயில் பச்சை, சிவப்பு", price: 250, per: "1 BOX", offerPrice: 250 },
      { sno: 105, name: "Pada Peacock", nameTamil: "பெரிய மயில்", price: 520, per: "1 BOX", offerPrice: 520 },
      { sno: 106, name: "Smoke (3 Pcs)", nameTamil: "ஸ்மோக்", price: 200, per: "1 BOX", offerPrice: 200 },
      { sno: 107, name: "Tri Color", nameTamil: "மூன்று கலர்", price: 300, per: "1 BOX", offerPrice: 300 },
      { sno: 108, name: "Helicopter", nameTamil: "ஹெலிகாப்டர்", price: 120, per: "1 BOX", offerPrice: 120 },
      { sno: 109, name: "Bat Ball", nameTamil: "பேட் பால்", price: 300, per: "1 BOX", offerPrice: 300 },
      { sno: 110, name: "Hot Stream (Multi Color) Saver", nameTamil: "ஹாட் ஸ்ட்ரீம் சேவர்", price: 180, per: "1 BOX", offerPrice: 180 },
    ],
  },
  {
    title: "Repeating Sounds",
    items: [
      { sno: 111, name: "100 Gold", nameTamil: "100 தங்கம்", price: 40, per: "1 BOX", offerPrice: 40 },
      { sno: 112, name: "200 Gold", nameTamil: "200 தங்கம்", price: 80, per: "1 BOX", offerPrice: 80 },
      { sno: 113, name: "1000 Gold", nameTamil: "1000 தங்கம்", price: 180, per: "1 BOX", offerPrice: 180 },
      { sno: 114, name: "2000 Gold", nameTamil: "2000 தங்கம்", price: 360, per: "1 BOX", offerPrice: 360 },
      { sno: 115, name: "5000 Gold", nameTamil: "5000 தங்கம்", price: 910, per: "1 BOX", offerPrice: 910 },
      { sno: 116, name: "10000 Gold", nameTamil: "10000 தங்கம்", price: 1840, per: "1 BOX", offerPrice: 1840 },
      { sno: 117, name: "28 Chorsa", nameTamil: "28 சோர்சா", price: 15, per: "1 BOX", offerPrice: 15 },
      { sno: 118, name: "28 Giant", nameTamil: "28 ஜியண்ட்", price: 20, per: "1 BOX", offerPrice: 20 },
      { sno: 119, name: "56 Giant", nameTamil: "56 ஜியண்ட்", price: 40, per: "1 BOX", offerPrice: 40 },
      { sno: 120, name: "24 Deluxe", nameTamil: "24 டீலக்ஸ்", price: 50, per: "1 BOX", offerPrice: 50 },
      { sno: 121, name: "50 Deluxe", nameTamil: "50 டீலக்ஸ்", price: 110, per: "1 BOX", offerPrice: 110 },
      { sno: 122, name: "100 Deluxe", nameTamil: "100 டீலக்ஸ்", price: 230, per: "1 BOX", offerPrice: 230 },
    ],
  },
  {
    title: "Gift Boxes (Net Rate)",
    simple: true,
    items: [
      { sno: 123, name: "20 Item Gift Box", nameTamil: "", price: 350, per: "1 BOX", offerPrice: 350 },
      { sno: 124, name: "25 Item Gift Box", nameTamil: "", price: 400, per: "1 BOX", offerPrice: 400 },
      { sno: 125, name: "30 Item Gift Box", nameTamil: "", price: 530, per: "1 BOX", offerPrice: 530 },
      { sno: 126, name: "40 Item Gift Box", nameTamil: "", price: 780, per: "1 BOX", offerPrice: 780 },
      { sno: 127, name: "50 Item Gift Box", nameTamil: "", price: 1050, per: "1 BOX", offerPrice: 1050 },
      { sno: 128, name: "60 Item Gift Box", nameTamil: "", price: 1500, per: "1 BOX", offerPrice: 1500 },
    ],
  },
];
