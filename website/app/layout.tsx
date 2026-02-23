import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'זאביק אבינר – מומחה AI, טכנולוגיה וקהילות',
    template: '%s | זאביק אבינר',
  },
  description: 'זאביק אבינר – מומחה AI, טכנולוגיה וקהילות. ירושלמי. סקרן במקצוע. עוזר לאנשים ולארגונים לעבוד חכם יותר.',
  openGraph: {
    siteName: 'זאביק אבינר',
    locale: 'he_IL',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
