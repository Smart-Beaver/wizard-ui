'use client';
import Script from 'next/script';
import { env } from '@/env/env.mjs';

const GoogleTagManager: React.FC = () => {
  if (env.NEXT_PUBLIC_ENVIRONMENT !== 'production') {
    return null;
  }

  return (
    <>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${env.NEXT_PUBLIC_GA_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${env.NEXT_PUBLIC_GA_ID}');
  `
        }}
      />
    </>
  );
};

export default GoogleTagManager;
