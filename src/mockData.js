// Mock Data for Crochet & Yarn Project Categories
export const CATEGORIES = [
  { id: 'all', label: 'All', icon: 'apps-outline', iconType: 'Ionicons' },
  { id: 'amigurumi', label: 'Amigurumi', icon: 'heart-outline', iconType: 'Ionicons' },
  { id: 'patterns', label: 'Patterns', icon: 'document-text-outline', iconType: 'Ionicons' },
  { id: 'yarn', label: 'Yarn', icon: 'color-palette-outline', iconType: 'Ionicons' },
  { id: 'wearables', label: 'Wearables', icon: 'shirt-outline', iconType: 'Ionicons' },
  { id: 'bags', label: 'Bags', icon: 'bag-handle-outline', iconType: 'Ionicons' },
];

// Mock Data for Flash Deals (Handmade Crochet & Yarn Crafts from Philippines)
export const FLASH_DEALS = [
  {
    id: 'fd-1',
    title: 'Heart Star Little Pony Bag',
    category: 'Bags',
    price: 6560.00,
    originalPrice: 8200.00,
    discount: '20% OFF',
    rating: 5.0,
    reviews: '2',
    image: 'https://img-va.myshopline.com/image/store/1697631405290/heart-star-little-pony-crochet-bag-side-wear_1000x.jpg?h=1000&q=90&w=1000',
  },
  {
    id: 'fd-2',
    title: 'Cat Star Hat',
    category: 'Wearables',
    price: 4000.00,
    originalPrice: 5000.00,
    discount: '20% OFF',
    rating: 5.0,
    reviews: '13',
    image: 'https://img-va.myshopline.com/image/store/1697631405290/cat-star-hat-beige-patchwork-studio-portrait-feeky-0_1080x.png?w=1080&h=1080',
  },
  {
    id: 'fd-3',
    title: 'Star Bag',
    category: 'Bags',
    price: 5040.00,
    originalPrice: 6300.00,
    discount: '20% OFF',
    rating: 5.0,
    reviews: '9',
    image: 'https://img-va.myshopline.com/image/store/1697631405290/-7-%286%29-%281%29_1080x.jpg?h=1080&q=90&w=1080',
  },
];

// Mock Data for Popular Products Grid
// Note: Best Seller (p-1) and Trending (p-2) are preserved exactly as requested.
export const POPULAR_PRODUCTS = [
  {
    id: 'p-1',
    title: 'Crochet Doll Pattern: Amigurumi Doll Maya and Lokum',
    tag: 'Best Seller',
    price: 299.07,
    originalPrice: 543.77,
    rating: 4.8,
    reviews: '678',
    image: 'https://i.etsystatic.com/47418534/r/il/f61574/8233071471/il_1588xN.8233071471_3nvd.jpg',
  },
  {
    id: 'p-2',
    title: 'Teddy Bear Crochet Pattern: Amigurumi Plush Toy',
    tag: 'Trending',
    price: 338.53,
    originalPrice: 441.93,
    rating: 4.8,
    reviews: '4.1k',
    image: 'https://i.etsystatic.com/44308742/r/il/a8d43d/6741859565/il_1588xN.6741859565_bgns.jpg',
  },
  {
    id: 'p-3',
    title: 'Amigurumi Crochet Girl Doll Pattern, Customizable Soft Toy Tutorial',
    tag: 'Handmade',
    price: 165.31,
    originalPrice: 220.64,
    rating: 5.0,
    reviews: '144',
    image: 'https://i.etsystatic.com/64274641/r/il/44df32/8523543717/il_1588xN.8523543717_d3d3.jpg',
  },
  {
    id: 'p-4',
    title: 'Crochet Doll Pattern PDF | Amigurumi Sitting Girl with Basket',
    tag: 'Handmade',
    price: 165.97,
    originalPrice: 221.30,
    rating: 3.7,
    reviews: '177',
    image: 'https://i.etsystatic.com/66669208/r/il/c55a39/8278830416/il_1588xN.8278830416_sbhk.jpg',
  },
];
