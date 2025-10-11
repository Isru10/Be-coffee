// data/coffee-lots.ts (Data Source)

// Define the TypeScript interface for a single coffee lot
export interface CoffeeLot {
  id: string;
  name: string;
  region: string;
  process: 'Washed' | 'Natural' | 'Specialty' | 'Honey';
  altitude: string;
  flavorNotes: string[];
  exportReadiness: 'Ready' | 'Seasonal' | 'Sold Out';
  imagePlaceholder: string;
  details: {
    origin: string;
    variety: string;
    tastingNotes: string;
    export: string;
  };
}

// Mock Data for Beyene Geba Exporter
export const COFFEE_LOTS: CoffeeLot[] = [
  {
    id: 'yg1w24',
    name: 'Yirgacheffe Grade 1 Washed',
    region: 'Yirgacheffe Kochere',
    process: 'Washed',
    altitude: '1,900 – 2,100 masl',
    flavorNotes: ['Bergamot', 'Jasmine', 'Lemon Zest'],
    exportReadiness: 'Ready',
    imagePlaceholder: 'washed.jpg',
    details: {
        origin: 'Kochere District, Yirgacheffe',
        variety: 'Ethiopian Heirloom',
        tastingNotes: 'A classic, clean cup with brilliant acidity, intense floral aromatics, and a silky body.',
        export: 'Available for immediate booking and shipment.'
    }
  },
  {
    id: 'yg1n24',
    name: 'Yirgacheffe Grade 1 Natural',
    region: 'Yirgacheffe Aricha',
    process: 'Natural',
    altitude: '1,850 – 2,050 masl',
    flavorNotes: ['Blueberry', 'Red Wine', 'Dark Chocolate'],
    exportReadiness: 'Ready',
    imagePlaceholder: 'natural.jpg',
    details: {
        origin: 'Aricha Woreda, Yirgacheffe',
        variety: 'Ethiopian Heirloom',
        tastingNotes: 'Heavy body, pronounced fruitiness, and a complex, wine-like finish. The essence of the natural process.',
        export: 'Available for immediate booking and shipment.'
    }
  },
  {
    id: 'sidama24',
    name: 'Sidama Bensa Grade 2 Washed',
    region: 'Sidama Bensa',
    process: 'Washed',
    altitude: '2,000 – 2,200 masl',
    flavorNotes: ['Stone Fruit', 'Caramel', 'Sweet Tea'],
    exportReadiness: 'Seasonal',
    imagePlaceholder: 'sidama.jpg',
    details: {
        origin: 'Bensa District, Sidama',
        variety: 'Ethiopian Heirloom',
        tastingNotes: 'A beautifully balanced and sweet cup with high clarity and a lingering aftertaste.',
        export: 'Pre-booking advised. Available in 3 months.'
    }
  },
  {
    id: 'guji24',
    name: 'Guji Special Prep Natural',
    region: 'Guji Shakiso',
    process: 'Specialty',
    altitude: '1,950 – 2,150 masl',
    flavorNotes: ['Tropical Fruit', 'Rum', 'Cacao Nibs'],
    exportReadiness: 'Sold Out',
    imagePlaceholder: 'guji.jpg',
    details: {
        origin: 'Shakiso District, Guji',
        variety: 'Ethiopian Heirloom',
        tastingNotes: 'An intensely rich and exotic cup, selected as a competition micro-lot. Limited availability.',
        export: 'Next harvest in 8 months. Contact for future contract.'
    }
  }
];