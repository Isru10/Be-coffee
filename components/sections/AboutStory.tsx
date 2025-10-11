// components/sections/AboutStory.tsx (Client Component - for Framer Motion)
'use client';
import { MotionDiv } from '../motion/MotionProvider';

export function AboutStory() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        
        {/* Story Content */}
        <div className="md:col-span-1">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-serif font-bold mb-6 text-text-dark">
              Our Founding History
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-text-dark/80">
              The Beyene Gemede story begins generations ago in the heart of Yirgacheffe,
              the birthplace of coffee. Our family knowledge of cultivation, processing,
              and trade is a meticulously passed-down heritage, combining ancient techniques
              with modern, sustainable practices.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-text-dark/80 italic border-l-4 border-accent-gold pl-4">
              We started as local farmers, understanding the profound connection between the
              soil, the climate, and the unparalleled flavor of Ethiopian beans. Today, we bring
              that intimate knowledge directly to the global market, ensuring every bean tells
              the true story of its origin.
            </p>
            <p className="text-lg leading-relaxed text-text-dark/80">
              Our official export operations began 20+ years ago, driven by the vision to bridge
              Ethiopian authenticity with international professionalism and quality assurance.
            </p>
          </MotionDiv>
        </div>

        {/* Heritage Image/Visual Placeholder */}
        <div className="md:col-span-1">
          <MotionDiv
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full h-96 rounded-lg overflow-hidden shadow-xl bg-accent-gold/20 flex items-center justify-center font-serif text-lg text-text-dark/70"
          >
            [Placeholder: Heritage Image / Map of Yirgacheffe]
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}