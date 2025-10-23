// app/coffee/page.tsx (Server Component)
import { PageHeader } from '@/components/layout/PageHeader';
import { CoffeeCard } from '@/components/products/CoffeeCard';
import { COFFEE_LOTS } from '@/data/coffee-lots';

export default function OurCoffeePage() {
  return (
    <main>
      <PageHeader 
        title="Our Coffee"
        tagline="Explore our current offering of premium Akesho Afaro, Gedeo export lots."
      />
      
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <h2 className="text-4xl font-serif font-bold text-text-dark mb-12 text-center">
            Current Export Lots ({COFFEE_LOTS.length} Available)
        </h2>

        {/* Optional Filter/Sort Placeholder (Nice-to-Have) */}
      {/* <div className="flex justify-end mb-10">
            <select className="p-2 border border-text-dark/20 rounded-md font-sans text-sm bg-bg-primary/80">
                <option value="all">Filter by Process (All)</option>
                <option value="washed">Washed</option>
                <option value="natural">Natural</option>
                <option value="specialty">Specialty</option>
            </select>
        </div> */}

        {/* Responsive Grid of Coffee Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {COFFEE_LOTS.map(lot => (
            <CoffeeCard key={lot.id} lot={lot} />
          ))}
        </div>
      </section>
    </main>
  );
}