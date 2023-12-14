import NavBar from '@/components/layout/NavBar';
import { HeightContextProvider } from '@/contexts/HeightContext';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <HeightContextProvider>
      <NavBar />
      <main className="flex-grow pb-4">{children}</main>
    </HeightContextProvider>
  );
}
