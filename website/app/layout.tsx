import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { ThemeProvider } from 'next-themes';
import ThemeToggle from '@/components/ThemeToggle';
import ThemeEffects from '@/components/ThemeEffects';
import {
  Orbitron,
  Oxanium,
  Heebo,
  Rubik_Mono_One,
  Varela_Round,
  Rubik,
  Cormorant_Garamond,
  Lora,
  Frank_Ruhl_Libre,
  Amatic_SC,
  Bangers,
  Assistant,
  Permanent_Marker,
} from 'next/font/google';

const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron', display: 'swap' });
const oxanium = Oxanium({ subsets: ['latin'], variable: '--font-oxanium', display: 'swap' });
const heebo = Heebo({ subsets: ['hebrew', 'latin'], variable: '--font-heebo', display: 'swap' });
const rubikMonoOne = Rubik_Mono_One({ subsets: ['latin'], weight: '400', variable: '--font-rubik-mono', display: 'swap' });
const varelaRound = Varela_Round({ subsets: ['latin'], weight: '400', variable: '--font-varela', display: 'swap' });
const rubik = Rubik({ subsets: ['hebrew', 'latin'], variable: '--font-rubik', display: 'swap' });
const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '600', '700'], variable: '--font-cormorant', display: 'swap' });
const lora = Lora({ subsets: ['latin'], variable: '--font-lora', display: 'swap' });
const frankRuhl = Frank_Ruhl_Libre({ subsets: ['hebrew', 'latin'], variable: '--font-frank', display: 'swap' });
const amatic = Amatic_SC({ subsets: ['hebrew', 'latin'], weight: ['400', '700'], variable: '--font-amatic', display: 'swap' });
const bangers = Bangers({ subsets: ['latin'], weight: '400', variable: '--font-bangers', display: 'swap' });
const assistant = Assistant({ subsets: ['hebrew', 'latin'], variable: '--font-assistant', display: 'swap' });
const permanentMarker = Permanent_Marker({ subsets: ['latin'], weight: '400', variable: '--font-permanent-marker', display: 'swap' });

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

const fontVars = [
  orbitron.variable,
  oxanium.variable,
  heebo.variable,
  rubikMonoOne.variable,
  varelaRound.variable,
  rubik.variable,
  cormorant.variable,
  lora.variable,
  frankRuhl.variable,
  amatic.variable,
  bangers.variable,
  assistant.variable,
  permanentMarker.variable,
].join(' ');

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning className={fontVars}>
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="naive" enableSystem={false}>
          <ThemeEffects />
          <Nav />
          <main>{children}</main>
          <Footer />
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
