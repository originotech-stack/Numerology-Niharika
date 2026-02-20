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
  title: 'Pandit Vishnu Sharma | Pooja & Marriage Booking',
  description:
    'Book Pandit Vishnu Sharma for pooja, marriage, griha pravesh, and spiritual rituals. Easy WhatsApp booking for fast confirmation.',
  alternates: {
    canonical: 'https://example.com/'
  },
  openGraph: {
    type: 'website',
    url: 'https://example.com/',
    siteName: 'Pandit Vishnu Sharma',
    title: 'Pandit Vishnu Sharma | Pooja & Marriage Booking',
    description:
      'Book Pandit Vishnu Sharma for pooja and marriage ceremonies through WhatsApp.'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pandit Vishnu Sharma | Pooja & Marriage Booking',
    description:
      'SEO-friendly static website for booking pooja and marriage rituals via WhatsApp.'
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
