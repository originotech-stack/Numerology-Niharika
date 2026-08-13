import './globals.css';
import { Manrope, Playfair_Display } from 'next/font/google';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body'
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display'
});

export const metadata = {
  title: 'Niharika Astro | Numerology Consultation',
  description:
    'Premium numerology consultation demo website for Niharika Astro with calculator, appointment booking slots, and payment preview.',
  alternates: {
    canonical: 'https://example.com/'
  },
  openGraph: {
    type: 'website',
    url: 'https://example.com/',
    siteName: 'Niharika Astro',
    title: 'Niharika Astro | Numerology Consultation',
    description:
      'Numerology website demo with services, calculator, consultancy booking, testimonials, FAQ, and contact sections.'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Niharika Astro | Numerology Consultation',
    description: 'Premium numerology website demo with booking and payment preview.'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
