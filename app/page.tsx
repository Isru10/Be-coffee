// app/page.tsx (Server Component - FINAL LANDING PAGE)
import { HeroSection } from '@/components/sections/HeroSection';
import { HomeWhoWeAre } from '@/components/sections/HomeWhoWeAre';
import { HomeCoffeePreview } from '@/components/sections/HomeCoffeePreview';
import { HomeImpact } from '@/components/sections/HomeImpact'; // NEW
import { HomeCTAs } from '@/components/sections/HomeCTAs'; // NEW

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      
      {/* 1. Who We Are Section */}
      <HomeWhoWeAre />

      {/* 2. Our Coffee / What We Do Section */}
      <HomeCoffeePreview />

      {/* 3. Impact / Our Farmers Section */}
      <HomeImpact />

      {/* 4. Partner & Contact CTAs */}
      <HomeCTAs />
    </main>
  );
}