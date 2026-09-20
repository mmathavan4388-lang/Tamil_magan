export const SHOP = {
  name: 'KABERIAL PATTASU KADAI',
  tagline: 'Premium Fireworks Collection',
  location: 'Sivakasi - Thayilpatti',
  address: ['2/369, Sattur Main Road,', 'Thayilpatti,', 'Sivakasi - 626 128'],
  phones: ['+91 9500356197', '+91 76049 65753'],
  whatsappNumbers: ['919500356197', '917604965753'],
}

export const formatINR = (value) =>
  '₹' + Math.round(value).toLocaleString('en-IN')
