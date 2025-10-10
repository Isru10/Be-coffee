// app/about/page.tsx (Server Component)

import { PageHeader } from '@/components/layout/PageHeader';
import { AboutStory } from '@/components/sections/AboutStory';
import { MissionVision } from '@/components/sections/MissionVision';


// Other sections (Team, Process, Certificates) will be imported later

export default function AboutUsPage() {
  return (
    <main>
      {/* Reusable Header for sub-pages */}
      <PageHeader 
        title="Our Story"
        tagline="The legacy of Ethiopian coffee, crafted for the world."
      />
      
      {/* 1. Our Story Section */}
      <AboutStory />

      {/* 2. Our Mission & Vision Section */}
      <MissionVision />

      {/* Team, Process, Certificates sections will be added in subsequent steps */}
    </main>
  );
}