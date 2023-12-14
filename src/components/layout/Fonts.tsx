import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap'
});

const Fonts: React.FC = () => (
  <style jsx global>{`
    :root {
      --font-base: ${inter.style.fontFamily};
    }
  `}</style>
);

export default Fonts;
