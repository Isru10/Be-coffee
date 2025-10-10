// components/sections/HomeCoffeePreview.tsx (Client Component - for Framer Motion)
'use client';
import Link from 'next/link';
import { MotionDiv } from '../motion/MotionProvider';

const coffeeCategories = [
  { 
    title: 'Washed Process', 
    description: 'Clean, bright, and floral notes, showcasing the classic Yirgacheffe profile.',
    icon: '💧', 
    bgColor: 'bg-accent-green/10' // Earthy green tone
  },
  { 
    title: 'Natural Process', 
    description: 'Rich, fruity, and wine-like complexity from the traditional sun-drying method.',
    icon: '☀️', 
    bgColor: 'bg-accent-gold/10' // Gold/Earthy tone
  },
  { 
    title: 'Specialty Lots', 
    description: 'Exclusive, micro-lot coffees with unique, award-winning flavor characteristics.',
    icon: '🌟', 
    bgColor: 'bg-bg-primary/50' // Lighter contrast tone
  },
];

export function HomeCoffeePreview() {
  return (
    // Contrasting background for visual break
    <section className="bg-bg-dark text-bg-primary py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-sans font-semibold uppercase tracking-widest text-accent-gold mb-3">
            Our Offerings
          </h2>
          <h3 className="text-5xl font-serif font-bold text-bg-primary">
            The World of Ethiopian Coffee.
          </h3>
        </MotionDiv>

        {/* Product Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {coffeeCategories.map((card, index) => (
            <MotionDiv
              key={card.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              // Card Styling - Dark text on a slightly colored background
              className={`p-8 rounded-xl shadow-lg transition-all duration-500 hover:shadow-xl hover:shadow-accent-gold/50 ${card.bgColor} text-text-dark`}
            >
              <div className={`text-4xl mb-4 p-3 inline-block rounded-full bg-bg-primary`}>
                {card.icon}
              </div>
              <h4 className="text-3xl font-serif font-bold mb-3">
                {card.title}
              </h4>
              <p className="text-lg mb-6 leading-relaxed">
                {card.description}
              </p>
              <Link
                href="/coffee"
                className="inline-block font-bold text-accent-gold hover:text-text-dark transition-colors border-b-2 border-accent-gold hover:border-text-dark pb-1"
              >
                View Details &rarr;
              </Link>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}