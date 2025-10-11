// app/contact/page.tsx (Server Component)
import { PageHeader } from '@/components/layout/PageHeader';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';

export default function ContactUsPage() {
  return (
    <main>
      <PageHeader 
        title="Contact Us"
        tagline="Connect directly with our export team for samples, quotes, and partnership inquiries."
      />
      
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12">
            
            {/* Left Column: Contact Info & Map */}
            <div className="md:order-2">
                <ContactInfo />
            </div>

            {/* Right Column: Contact Form */}
            <div className="md:order-1">
                <ContactForm />
            </div>
            
        </div>
      </section>
    </main>
  );
}