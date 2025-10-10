// components/sections/MissionVision.tsx (Client Component - for Framer Motion)
'use client';
import { MotionDiv } from '../motion/MotionProvider';
import { Target, Eye } from 'lucide-react'; // Icons for visual appeal

const cards = [
    { 
        icon: Target, 
        title: 'Our Mission', 
        description: 'To consistently export the finest quality, sustainably-sourced Ethiopian coffee, enriching the lives of our farmers while meeting the rigorous standards of global specialty buyers.',
        bgColor: 'bg-bg-dark/5'
    },
    { 
        icon: Eye, 
        title: 'Our Vision', 
        description: 'To be the globally recognized, trusted, and premium source for authentic Yirgacheffe coffee, setting the benchmark for ethical trade and taste excellence in the industry.',
        bgColor: 'bg-accent-gold/5'
    },
];

export function MissionVision() {
  return (
    <section className="bg-bg-dark text-bg-primary py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-sm font-sans font-semibold uppercase tracking-widest text-accent-gold mb-12">
            Our Guiding Principles
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <MotionDiv
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`p-8 rounded-xl shadow-lg ${card.bgColor} text-text-dark`}
            >
              <card.icon className="w-10 h-10 text-accent-gold mb-4" />
              <h3 className="text-3xl font-serif font-bold mb-4">
                {card.title}
              </h3>
              <p className="text-lg leading-relaxed text-text-dark/90">
                {card.description}
              </p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}