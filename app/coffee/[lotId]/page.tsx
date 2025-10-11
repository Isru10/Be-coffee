// app/coffee/[lotId]/page.tsx (Server Component)
import { notFound } from 'next/navigation';
import { COFFEE_LOTS, CoffeeLot } from '@/data/coffee-lots';
import { PageHeader } from '@/components/layout/PageHeader';
import { CoffeeDetailSection } from '@/components/products/CoffeeDetailSection';


// --- Server Side Functions ---

// Required for dynamic segments in Next.js App Router (Static Site Generation)
export async function generateStaticParams() {
  return COFFEE_LOTS.map((lot) => ({
    lotId: lot.id,
  }));
}

// Function to fetch the specific lot data
function getCoffeeLot(lotId: string): CoffeeLot | undefined {
  return COFFEE_LOTS.find(lot => lot.id === lotId);
}
// -----------------------------


export default function CoffeeDetailPage({ 
  params 
}: { 
  params: { lotId: string } 
}) {
  const lot = getCoffeeLot(params.lotId);

  if (!lot) {
    notFound(); // Display the Next.js not-found page if lotId is invalid
  }

  return (
    <main>
      <PageHeader 
        title={lot.name}
        tagline={`${lot.region} - ${lot.process} Process`}
      />
      
      {/* Detail Section Component */}
      <CoffeeDetailSection lot={lot} />
      
    </main>
  );
}