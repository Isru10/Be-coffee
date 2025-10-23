// app/coffee/[lotId]/page.tsx (Server Component)
import { notFound } from 'next/navigation';
import { COFFEE_LOTS, CoffeeLot } from '@/data/coffee-lots';
import { PageHeader } from '@/components/layout/PageHeader';
import { CoffeeDetailSection } from '@/components/products/CoffeeDetailSection';

// --- Server Side Functions ---


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

interface CoffeeDetailPageProps {
  params: Promise<{ lotId: string }>; // ✅ Next.js 15 expects params as Promise
}

export default async function CoffeeDetailPage({ params }: CoffeeDetailPageProps) {
  const { lotId } = await params; // ✅ await params
  const lot = getCoffeeLot(lotId);

  if (!lot) {
    notFound(); // Display 404 if lotId is invalid
  }

  return (
    <main>
      <PageHeader 
        title={lot.name}
        tagline={`${lot.region} - ${lot.process} Process`}
      />
      
      <CoffeeDetailSection lot={lot} />
    </main>
  );
}
