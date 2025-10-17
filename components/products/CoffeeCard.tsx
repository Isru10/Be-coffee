// components/products/CoffeeCard.tsx
'use client';
import { MotionDiv } from '../motion/MotionProvider';
import { CoffeeLot } from '@/data/coffee-lots'; // Assuming the data file is correct
import { MapPin, Mountain } from 'lucide-react'; // Leaf removed as it was unused
import Image from 'next/image';
import Link from 'next/link';

interface CoffeeCardProps {
    lot: CoffeeLot;
}

// Utility function for color coding based on readiness
const getReadinessClass = (readiness: CoffeeLot['exportReadiness']) => {
    switch (readiness) {
        case 'Ready': return 'bg-accent-green text-bg-primary';
        case 'Seasonal': return 'bg-accent-gold/50 text-text-dark';
        case 'Sold Out': return 'bg-bg-dark/10 text-text-dark/70';
        default: return 'bg-bg-primary/50 text-text-dark';
    }
}

export function CoffeeCard({ lot }: CoffeeCardProps) {
  return (
    <MotionDiv
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="bg-bg-primary shadow-xl rounded-xl overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300 border-t-4 border-accent-gold/50"
    >
        {/* Image Container: MUST be relative and have fixed dimensions (h-48) */}
        <div className="relative w-full h-48 bg-text-dark/10"> 
            <Image
                src={lot.imagePlaceholder} 
                alt={`Image of ${lot.name}`}
                fill 
                sizes="(max-width: 768px) 100vw, 33vw" // Recommended for fill prop
                style={{ objectFit: 'cover' }} // Use style prop for object-fit
                className='transition-transform duration-300 hover:scale-[1.03]' // Custom classes for image effects
                unoptimized={process.env.NODE_ENV === 'development'}
            />
        </div>

        <div className="p-6 flex flex-col flex-grow">
            {/* Readiness Tag */}
            <span className={`text-xs font-bold uppercase px-3 py-1 rounded-full w-fit mb-3 ${getReadinessClass(lot.exportReadiness)}`}>
                {lot.exportReadiness}
            </span>

            <h3 className="text-3xl font-serif font-bold text-text-dark mb-2">
                {lot.name}
            </h3>
            
            <p className="text-sm font-semibold uppercase tracking-wider text-accent-gold mb-4">
                {lot.process} Process
            </p>

            {/* Key Specs */}
            <div className="space-y-2 text-sm mb-4">
                <div className='flex items-center text-text-dark/90'>
                    <MapPin className='w-4 h-4 mr-2 text-accent-gold flex-shrink-0' />
                    <span>Origin: {lot.region}</span>
                </div>
                <div className='flex items-center text-text-dark/90'>
                    <Mountain className='w-4 h-4 mr-2 text-accent-gold flex-shrink-0' />
                    <span>Altitude: {lot.altitude}</span>
                </div>
            </div>

            {/* Flavor Notes */}
            <div className="mb-6">
                <p className="text-sm font-bold text-text-dark mb-1">Flavor Notes:</p>
                <div className="flex flex-wrap gap-2">
                    {lot.flavorNotes.slice(0, 3).map(note => (
                        <span key={note} className="text-xs px-3 py-1 bg-text-dark/5 rounded-full font-medium">
                            {note}
                        </span>
                    ))}
                </div>
            </div>

            {/* View Details CTA */}
            <div className='mt-auto pt-4'>
                <Link
                    href={`/coffee/${lot.id}`}
                    className="inline-block w-full text-center px-6 py-3 border-2 border-text-dark text-text-dark font-bold hover:bg-text-dark hover:text-bg-primary transition-colors"
                >
                    View Details
                </Link>
            </div>
        </div>
    </MotionDiv>
  );
}