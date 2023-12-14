import { Html, Main, Head, NextScript } from 'next/document';
import { env } from '@/env/env.mjs';
import { dictionary } from '@/libs/en';

export default function Document({ locale }: { locale: string }) {
  return (
    <Html lang="en" className="h-full">
      <Head>
        <meta name="description" content={dictionary.meta.description} />
        <meta property="og:title" content={dictionary.meta.ogFacebook.title} />
        <meta property="og:description" content={dictionary.meta.ogFacebook.description} />
        <meta property="og:locale" content={locale} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${env.NEXT_PUBLIC_DOMAIN_URL}/smart-beaver-page.jpg`} />
        <meta name="twitter:image" content={`${env.NEXT_PUBLIC_DOMAIN_URL}/smart-beaver-page.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={dictionary.meta.ogTwitter.title} />
        <meta name="twitter:description" content={dictionary.meta.ogTwitter.description} />
        <link rel="icon" href="/favicons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#0a766c" />
        <meta name="msapplication-TileColor" content="#0a766c" />
        <meta name="theme-color" content="#0a766c" />
        <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
      </Head>
      <NextScript />
      <body className="mx-auto h-screen min-h-screen overflow-hidden bg-slate-900">
        <Main />
      </body>
    </Html>
  );
}
