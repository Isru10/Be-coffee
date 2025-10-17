
// components/sections/HeroSection.tsx (FINAL ELEGANT EDITORIAL OVERLAY DESIGN)
'use client';
import { MotionDiv } from '../motion/MotionProvider';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';

// Define multiple placeholder images
const HERO_IMAGE_URLS = [
    '/images/c1.jpg', 
    '/images/c2.jpg', 
    '/images/c3.jpg', 
    '/images/c4.jpg', 
];

export function HeroSection() {
  // Image rotation logic remains the same
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % HERO_IMAGE_URLS.length);
    }, 8000); 
    return () => clearInterval(timer);
  }, []);
  
  const currentImage = HERO_IMAGE_URLS[currentImageIndex];


  return (
    // Full screen height container
    <section className="relative h-[90vh] flex items-end overflow-hidden">
      
      {/* 1. BACKGROUND IMAGE FADER (Full Width/Height) */}
      <div className="absolute inset-0 w-full h-full z-0">
        <AnimatePresence initial={false} mode="wait">
          <MotionDiv
            key={currentImage} 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className='absolute inset-0'
          >
            <Image
                src={currentImage}
                alt="Rotating background image of Ethiopian coffee"
                fill
                priority={currentImageIndex === 0}
                sizes='100vw'
                style={{ objectFit: 'cover' }}
                className='brightness-[0.4] saturate-150' // Dark for high contrast
                unoptimized={process.env.NODE_ENV === 'development'}
            />
          </MotionDiv>
        </AnimatePresence>
      </div>
      
      {/* 2. TEXT AND CTA CONTAINER (Editorial, Bottom-Left Aligned) */}
      <MotionDiv 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        // Positioned in the bottom-left corner with maximum z-index
        className="relative z-20 w-full lg:w-4/5 xl:w-3/5 
                   text-bg-primary backdrop-blur-sm 
                   p-8 md:p-12 lg:p-16"
      >
        <div className=" text-white max-w-4xl">
            
            {/* BRAND NAME: HUGE AND BOLD */}
            <h2 className="text-7xl sm:text-8xl md:text-9xl font-serif font-extrabold mb-4 leading-none text-accent-gold drop-shadow-xl">
                Beyene Geba
            </h2>
            
            {/* SUBTITLE: The Tagline */}
            <p className="text-3xl font-sans font-light mb-8 text-bg-primary drop-shadow-lg max-w-2xl">
                From the Heart of Yirgacheffe to the World.
            </p>

            {/* CTA BUTTON */}
            <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
            >
                <Link
                    href="/coffee"
                    className="inline-flex items-center px-10 py-4 text-xl font-bold bg-accent-gold text-bg-dark hover:bg-bg-primary hover:text-accent-gold transition-colors shadow-xl"
                >
                    View Current Offerings
                    <ArrowRight className='w-5 h-5 ml-3' />
                </Link>
            </MotionDiv>
        </div>
      </MotionDiv>
      
    </section>
  );
}




