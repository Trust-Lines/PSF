import { Montserrat } from 'next/font/google';
import '../styles/global.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'T Lines – Coming Soon',
  description: 'This website is under construction.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
