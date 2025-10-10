// app/layout.tsx (UPDATED for UI/UX Guidelines)
import { Header } from '@/components/layout/Header';
import './globals.css';
import type { Metadata } from 'next';
// Import the required Google Fonts
import { Inter, Playfair_Display } from 'next/font/google'; 
import { Footer } from '@/components/layout/Footer';
// Remove the Geist imports (Geist, Geist_Mono)

// Load Fonts and define CSS variables as per Step 1 & 2 requirements
const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-sans', // Assign to Tailwind config
  display: 'swap'
});
const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-serif', // Assign to Tailwind config
  display: 'swap'
});

export const metadata: Metadata = {
  // Update Title/Description from boilerplate
  title: 'Beyene Geba Exporter — Premium Ethiopian Coffee',
  description: 'From the Heart of Yirgacheffe to the World. Quality coffee producer and exporter based in Ethiopia.',
};

// Import Header and Footer components



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Apply the custom font variables to the html tag
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      {/* Apply the base body styles, colors, and the default sans font */}
      <body className="bg-bg-primary text-text-dark font-sans antialiased">
        <Header /> {/* Integrate the Header */}
        <main className="min-h-screen">
          {children}
        </main>
        <Footer /> {/* Integrate the Footer */}
      </body>
    </html>
  );
}