// components/products/CoffeeDetailSection.tsx (UPDATED for Dynamic Next/Image)
'use client';
import { MotionDiv } from '../motion/MotionProvider';
import { CoffeeLot } from '@/data/coffee-lots';
import Link from 'next/link';
import { MapPin, Mountain, Sun, Star, Leaf } from 'lucide-react';
import Image from 'next/image'; // <-- NEW IMPORT
/* eslint-disable @typescript-eslint/no-explicit-any */

interface CoffeeDetailSectionProps {
    lot: CoffeeLot;
}

export function CoffeeDetailSection({ lot }: CoffeeDetailSectionProps) {
    
    // ... (getProcessIcon and ProcessIcon remain) ...
    const getProcessIcon = (process: CoffeeLot['process']) => {
        switch (process) {
            case 'Washed': return { icon: Star, color: 'text-accent-gold' };
            case 'Natural': return { icon: Sun, color: 'text-text-dark' };
            case 'Specialty': return { icon: Star, color: 'text-red-500' };
            default: return { icon: Leaf, color: 'text-accent-green' };
        }
    }
    
    const ProcessIcon = getProcessIcon(lot.process).icon;


    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
            <div className="grid md:grid-cols-12 gap-12">
                
                {/* Large Image (Col 1-7) - REPLACING PLACEHOLDER DIV */}
                <MotionDiv
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:col-span-7 w-full h-[500px] rounded-xl overflow-hidden shadow-2xl bg-text-dark/10 relative" // ADDED relative
                >
                    <Image
                        src={lot.imagePlaceholder} 
                        alt={`Image of ${lot.name}`}
                        fill 
                        priority // Load this main image eagerly
                        sizes="(max-width: 1024px) 100vw, 58vw" // Appropriate size for a larger image
                        style={{ objectFit: 'cover' }}
                        className='transition-transform duration-300'
                        unoptimized={process.env.NODE_ENV === 'development'}
                    />
                </MotionDiv>

                {/* Details & CTA (Col 8-12) */}
                <MotionDiv
                    // ... (animations remain) ...
                    className="md:col-span-5"
                >
                    {/* ... (Rest of the component remains the same) ... */}
                    
                    <h2 className="text-sm font-sans font-semibold uppercase tracking-widest text-accent-gold mb-3">
                        Technical Specifications
                    </h2>
                    
                    {/* Key Specs */}
                    <div className="space-y-4 mb-8 p-6 bg-accent-gold/5 rounded-lg border border-accent-gold/10">
                        <SpecItem icon={MapPin} label="Origin" value={lot.details.origin} />
                        <SpecItem icon={Mountain} label="Altitude" value={lot.altitude} />
                        <SpecItem icon={ProcessIcon} label="Process" value={lot.process} />
                        <SpecItem icon={Star} label="Variety" value={lot.details.variety} />
                    </div>

                    {/* Tasting Notes */}
                    <div className="mb-8">
                        <h3 className="text-3xl font-serif font-bold text-text-dark mb-4 border-b pb-2">
                            Tasting Notes
                        </h3>
                        <p className="text-lg leading-relaxed text-text-dark/80 mb-4">
                            {lot.details.tastingNotes}
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {lot.flavorNotes.map(note => (
                                <span key={note} className="px-4 py-1.5 bg-accent-gold text-bg-dark text-sm font-bold rounded-full">
                                    {note}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Export Info & CTA */}
                    <div className="mb-8 p-4 bg-text-dark/5 rounded-lg">
                        <p className="text-base font-bold text-text-dark mb-2">Export Availability: <span className='font-normal text-accent-green'>{lot.exportReadiness}</span></p>
                        <p className="text-sm text-text-dark/70 mb-4">{lot.details.export}</p>
                    </div>

                    {/* CTA Button */}
                    <Link
                        href="/contact?lotId=lot.id" 
                        className="inline-block w-full text-center px-8 py-4 text-xl font-bold bg-accent-gold text-bg-dark hover:bg-text-dark hover:text-bg-primary transition-colors shadow-lg"
                    >
                        Request Sample / Export Quote
                    </Link>
                    
                </MotionDiv>
            </div>
        </section>
    );
}

// Helper Component for Specifications (remains the same)
function SpecItem({ icon: Icon, label, value }: { icon: any, label: string, value: string }) {
    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center'>
                <Icon className='w-5 h-5 mr-3 text-accent-gold' />
                <span className='font-semibold text-text-dark'>{label}:</span>
            </div>
            <span className='font-sans text-base text-text-dark/90'>{value}</span>
        </div>
    );
}