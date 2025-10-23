// components/layout/Footer.tsx (Server Component)
import Link from 'next/link';
// Assuming 'lucide-react' is installed for icons
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/beyenegemedeexport?utm_source=qr&igsh=dzB6OGExNGoyazY1', name: 'Instagram' },
    { icon: Linkedin, href: '#', name: 'https://www.linkedin.com/in/israel-solomon-2b756b2b8/' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-bg-dark text-bg-primary/90 mt-20 pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-bg-primary/20 pb-10">
          
          {/* Brand Info */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-3xl font-serif font-bold text-accent-gold mb-4">
              Beyene Gemede
            </h3>
            <p className="text-sm">
              Premium coffee exporter, rooted in the heritage of Yirgacheffe, Ethiopia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-4 text-bg-primary">
              Site Map
            </h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-accent-gold transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-accent-gold transition-colors">About Us</Link></li>
              <li><Link href="/coffee" className="hover:text-accent-gold transition-colors">Our Coffee</Link></li>
              <li><Link href="/contact" className="hover:text-accent-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-4 text-bg-primary">
              Reach Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-accent-gold flex-shrink-0 mt-1" />
                <span>yodsbusiness@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-accent-gold flex-shrink-0 mt-1" />
                <span>+251 939 82 50 62</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-accent-gold flex-shrink-0 mt-1" />
                <span>Addis Ababa, Ethiopia (Office)</span>
              </li>
            </ul>
          </div>

          {/* Social & CTA */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-4 text-bg-primary">
              Connect
            </h4>
            <div className="flex space-x-4 mb-6">
                {socialLinks.map((item) => (
                    <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="text-bg-primary hover:text-accent-gold transition-colors">
                        <item.icon className="w-6 h-6" />
                        <span className="sr-only">{item.name}</span>
                    </a>
                ))}
            </div>
            <Link 
                href="/contact" 
                className="mt-4 inline-block px-6 py-2 border-2 border-accent-gold text-accent-gold font-bold hover:bg-accent-gold hover:text-bg-dark transition-colors"
            >
                Partner with Us
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6">
          <p className="text-xs text-bg-primary/50">
            &copy; {currentYear} Beyene Gemede Exporter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}