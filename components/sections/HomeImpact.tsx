// components/sections/HomeImpact.tsx (Client Component - FIXED with TypeScript types)
'use client';
import { MotionDiv } from '../motion/MotionProvider';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

// Define the expected props interface for the counter component
interface AnimatedCounterProps {
    to: number;
    suffix?: string;
    duration?: number;
}

// Reusable Counter Component (Client Component)
// Animates a number from 0 to 'to' when it enters the viewport
function AnimatedCounter({ to, suffix = '', duration = 2000 }: AnimatedCounterProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      if (isInView) {
        let startTimestamp: number;
        const step = (timestamp: number) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const elapsed = timestamp - startTimestamp;
          const progress = Math.min(elapsed / duration, 1);
          setCount(Math.floor(progress * to));
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
      }
    }, [isInView, to, duration]);
  
    // Add 'text-text-dark' for good measure if needed, but it's inherited from parent
    return <span ref={ref}>{count.toLocaleString()}{suffix}</span>; 
}


const impactData = [
  { label: 'Farmers Supported', value: 30, suffix: '+' },
  { label: 'Years of Experience', value: 20, suffix: '+' },
  { label: 'Lots Exported Annually', value: 50, suffix: '+' },
  { label: 'Regions of Origin', value: 2 },
];

export function HomeImpact() {
  return (
    <section className="bg-accent-green/10 py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm font-sans font-semibold uppercase tracking-widest text-accent-gold mb-3">
            Our Commitment
          </h2>
          <h3 className="text-5xl font-serif font-bold text-text-dark">
            Impact, Sustainability, and Trust.
          </h3>
        </MotionDiv>

        {/* Counters Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {impactData.map((item, index) => (
            <MotionDiv
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="p-4"
            >
              <div className="text-6xl font-serif font-extrabold text-accent-gold mb-2">
                {/* Use the animated counter */}
                <AnimatedCounter to={item.value} suffix={item.suffix} />
              </div>
              <p className="text-lg font-sans font-medium uppercase tracking-wider text-text-dark/80">
                {item.label}
              </p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}