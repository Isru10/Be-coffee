// components/sections/HomeWhoWeAre.tsx (Client Component - for Framer Motion)
'use client';
import Link from 'next/link';
import { MotionDiv } from '../motion/MotionProvider';

export function HomeWhoWeAre() {
  // Staggering the animation between text and image
  const imageDelay = 0.5; 

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="order-2 md:order-1">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-sans font-semibold uppercase tracking-widest text-accent-gold mb-3">
              Our Heritage
            </h2>
            <h3 className="text-5xl font-serif font-bold mb-6 leading-tight text-text-dark">
              Rooted in the Soil of Yirgacheffe.
            </h3>
            <p className="text-xl leading-relaxed mb-8 text-text-dark/80">
              Beyene Gemede is more than an exporter; we are custodians of the
              ancient Ethiopian coffee tradition. Based in the legendary region of Yirgacheffe,
              our work is a dedication to quality, sustainability, and the over 300 families
              who passionately cultivate these world-renowned beans.
            </p>
            <Link 
              href="/about" 
              className="inline-block px-8 py-3 text-lg font-bold border-2 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-bg-primary transition-colors duration-300"
            >
              Learn More
            </Link>
          </MotionDiv>
        </div>

        {/* Image Placeholder (Founders/Farm) */}
        <MotionDiv
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: imageDelay }}
          className="order-1 md:order-2 w-full aspect-square md:aspect-auto h-96 rounded-lg overflow-hidden shadow-xl"
        >
          {/* Placeholder for a high-res founder/farm image */}
          <div className="w-full h-full bg-accent-green/30 flex items-center justify-center text-text-dark/70 text-center p-4 font-serif text-lg">
            [Placeholder: Authentic High-Resolution Image of Founders or Farm]
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}