// components/contact/ContactInfo.tsx (Server Component)
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';

export function ContactInfo() {
    const contactDetails = [
        { icon: Mail, label: 'Email', value: 'yodsbusiness@gmail.com', href: 'mailto:yodsbusiness@gmail.com' },
        { icon: Phone, label: 'Phone', value: '+251 939825062', href: 'tel:+251945931063' },
        { icon: MapPin, label: 'Office Address', value: 'Addis Ababa, Ethiopia, Bole Sub-City', href: 'https://maps.app.goo.gl/3d15A7NEkhViq4U47' },
    ];

    const socialLinks = [
        { icon: Linkedin, name: 'LinkedIn', href: 'https://www.linkedin.com/in/israel-solomon-2b756b2b8/' },
        { icon: Facebook, name: 'Facebook', href: '#' },
        { icon: Instagram, name: 'Instagram', href: 'https://www.instagram.com/beyenegemedeexport?utm_source=qr&igsh=dzB6OGExNGoyazY1' },
    ];
    
    return (
        <div className="space-y-12">
            
            {/* Contact Info Details */}
            <div>
                <h3 className="text-3xl font-serif font-bold text-text-dark mb-6 border-b pb-2">
                    Direct Contact
                </h3>
                <dl className="space-y-6">
                    {contactDetails.map((detail) => (
                        <div key={detail.label} className="flex items-start">
                            <detail.icon className="w-6 h-6 mr-4 text-accent-gold flex-shrink-0 mt-1" />
                            <div>
                                <dt className="text-lg font-semibold text-text-dark">{detail.label}</dt>
                                <dd className="text-base text-text-dark/80">
                                    <a href={detail.href} className="hover:text-accent-gold transition-colors">
                                        {detail.value}
                                    </a>
                                </dd>
                            </div>
                        </div>
                    ))}
                </dl>
            </div>
            
            {/* Social Links */}
            <div>
                <h3 className="text-3xl font-serif font-bold text-text-dark mb-6 border-b pb-2">
                    Follow Us
                </h3>
                <div className="flex space-x-6">
                    {socialLinks.map((link) => (
                        <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-text-dark hover:text-accent-gold transition-colors">
                            <link.icon className="w-8 h-8" />
                            <span className="sr-only">{link.name}</span>
                        </a>
                    ))}
                </div>
            </div>

            {/* Google Map Placeholder */}
            <div>
                <h3 className="text-3xl font-serif font-bold text-text-dark mb-6 border-b pb-2">
                    Our Location
                </h3>
                <div className="w-full h-64 bg-accent-green/10 rounded-xl flex items-center justify-center text-text-dark/70 font-serif">
                    [Placeholder: Embedded Google Map]
                </div>
            </div>
            
        </div>
    );
}