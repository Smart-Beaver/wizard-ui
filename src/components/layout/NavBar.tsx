import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Tooltip } from '@/components/shared/Tooltip';
import { useCalculatedHeightData } from '@/contexts/HeightContext';
import { env } from '@/env/env.mjs';
import { dictionary } from '@/libs/en';
import { copyToClipboard } from '@/utils/helpers/copyToClipboard';

const DOCUMENTATION_URL = env.NEXT_PUBLIC_DOCS_URL;
const GITHUB_URL = env.NEXT_PUBLIC_GITHUB_URL;
const CONTACT_EMAIL = env.NEXT_PUBLIC_CONTACT_EMAIL;

export default function NavBar() {
  const navRef = useRef<HTMLDivElement>(null);
  const { setNavHeight } = useCalculatedHeightData();

  useEffect(() => {
    const updateHeight = () => {
      setNavHeight(navRef.current?.clientHeight);
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  return (
    <header ref={navRef} className="flex h-[122px] w-full flex-wrap items-center justify-between px-6 lg:px-10">
      <Image src="/logo.webp" alt={dictionary.navBar.altLogoText} width={150} height={50} />
      <nav>
        <div className="flex w-full items-center gap-4 space-x-4 text-teal-500 sm:ml-auto sm:w-auto sm:justify-end sm:gap-8">
          <a href={DOCUMENTATION_URL} target="_blank" rel="noopener noreferrer">
            <p className="hover:text-teal-700">{dictionary.navBar.links.docs}</p>
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
            <p className="hover:text-teal-700">{dictionary.navBar.links.github}</p>
          </a>

          <button onClick={() => copyToClipboard(CONTACT_EMAIL)} className="hover:text-teal-700">
            <Tooltip text={dictionary.navBar.emailTooltip}>{CONTACT_EMAIL}</Tooltip>
          </button>
        </div>
      </nav>
    </header>
  );
}
