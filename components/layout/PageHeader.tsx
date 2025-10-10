// components/layout/PageHeader.tsx (Client Component - for Framer Motion)
'use client';
import { MotionDiv } from '../motion/MotionProvider';

interface PageHeaderProps {
  title: string;
  tagline: string;
}

export function PageHeader({ title, tagline }: PageHeaderProps) {
  return (
    <section className="bg-bg-primary pt-20 pb-16 md:pt-32 md:pb-24 border-b border-text-dark/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Title */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-text-dark mb-4 tracking-tighter">
            {title}
          </h1>
        </MotionDiv>

        {/* Tagline */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-xl md:text-2xl font-sans font-light text-text-dark/70 max-w-3xl mx-auto">
            {tagline}
          </p>
        </MotionDiv>
      </div>
    </section>
  );
}