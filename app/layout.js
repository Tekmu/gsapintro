import { Montserrat, Space_Grotesk, Playfair_Display } from 'next/font/google';
import './globals.css';

const space = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  weight: '500',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const play_fair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-play_fair',
  weight: '500',
  display: 'swap',
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${space.variable} ${play_fair.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
