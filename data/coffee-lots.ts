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

// Mock Data for Beyene Gemede Exporter
export const COFFEE_LOTS: CoffeeLot[] = [
  {
    id: 'yg1w24',
    name: 'Washed Yirgacheffe',
    region: 'Gedeo, Yirgacheffe, Akesho Afaro',
    process: 'Washed',
    altitude: '1900- 2400 masl',
    flavorNotes: ['Bergamot', 'Jasmine', 'Lemon Zest'],
    exportReadiness: 'Ready',
    imagePlaceholder: '/images/c3.jpg',
    details: {
        origin: 'Gedeo, Yirgacheffe, Akesho Afaro',
        variety: 'Ethiopian Heirloom',
        tastingNotes: 'A classic, clean cup with bright and lively acidity, intense floral aromatics, and a silky body.',
        export: 'Available for immediate booking and shipment.'
    }
  },
  {
    id: 'yg1n24',
    name: 'Natural Yirgacheffe ',
    region: 'Gedeo, Yirgacheffe, Akesho Afaro',
    process: 'Natural',
    altitude: '1900- 2400 masl',
    flavorNotes: ['Blueberry', 'Red Wine', 'Dark Chocolate'],
    exportReadiness: 'Ready',
    imagePlaceholder: '/images/c2.jpg',
    details: {
        origin: 'Gedeo, Yirgacheffe, Akesho Afaro',
        variety: 'Ethiopian Heirloom',
        tastingNotes: 'Heavy body, pronounced fruitiness, and a complex, wine-like finish. The essence of the natural process.',
        export: 'Available for immediate booking and shipment.'
    }
  },
  
  

];