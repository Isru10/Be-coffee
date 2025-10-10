// components/sections/HeroSection.tsx (Client Component - due to Framer Motion)
'use client';
import { MotionDiv } from '../motion/MotionProvider';
// Assuming 'lucide-react' is installed for the icon
import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  return (
    // Full-width section that takes up most of the viewport height (90vh)
    <section className="relative h-[90vh] flex items-center justify-center text-bg-primary overflow-hidden">
      
      {/* Background Visuals (Placeholder) 
          This should be replaced with a high-res Next/Image or video. 
          The styles simulate a dark, premium visual background. */}
      <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
              backgroundImage: "url('/images/yirgacheffe-farm-placeholder.jpg')", 
              // Example filter/brightness to ensure text contrast
              filter: "brightness(0.6)" 
          }}
      >
        {/* Dark overlay for extra contrast and polish */}
        <div className="absolute inset-0 bg-bg-dark opacity-20"></div>
      </div>

      {/* Hero Content (Overlay Text) */}
      <div className="relative z-10 text-center px-4">
        
        {/* Brand Name */}
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          // Large, bold serif font with the accent color
          className="text-7xl md:text-9xl font-serif font-extrabold tracking-tight mb-4 text-accent-gold drop-shadow-lg"
        >
          Beyene Geba
        </MotionDiv>

        {/* Tagline */}
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          // Subtle, light sans-serif font
          className="text-xl md:text-3xl font-sans font-light tracking-wider drop-shadow-lg"
        >
          From the Heart of Yirgacheffe to the World.
        </MotionDiv>
      </div>

      {/* Smooth Fade-in Scroll Indicator */}
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute bottom-10 animate-bounce cursor-pointer"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8 text-bg-primary/80" />
      </MotionDiv>
    </section>
  );
}