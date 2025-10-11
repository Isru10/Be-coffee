// components/sections/HomeCTAs.tsx (Server Component - no motion/state needed)
import Link from 'next/link';

export function HomeCTAs() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="grid md:grid-cols-2 gap-12">
        
        {/* Partner & Export Info CTA */}
        <div className="bg-bg-dark text-bg-primary p-10 rounded-xl shadow-2xl">
          <h3 className="text-3xl font-serif font-bold mb-4 text-accent-gold">
            Partner with Beyene Gemede
          </h3>
          <p className="text-lg mb-6">
            Are you a global roaster, importer, or distributor? Discover our flexible
            export options and secure your next shipment of premium Yirgacheffe coffee.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 text-lg font-bold bg-accent-gold text-bg-dark hover:bg-bg-primary hover:text-accent-gold border-2 border-accent-gold transition-colors"
          >
            Start Partnership &rarr;
          </Link>
        </div>

        {/* Contact CTA */}
        <div className="bg-accent-gold/10 text-text-dark p-10 rounded-xl shadow-2xl">
          <h3 className="text-3xl font-serif font-bold mb-4 text-text-dark">
            General Inquiries
          </h3>
          <p className="text-lg mb-6">
            Have questions about our farms, processes, or other general inquiries?
            We are here to help and respond quickly to all messages.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 text-lg font-bold bg-text-dark text-bg-primary hover:bg-text-dark/80 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}