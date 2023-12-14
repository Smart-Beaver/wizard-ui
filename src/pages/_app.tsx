import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Fonts from '@/components/layout/Fonts';
import Layout from '@/components/layout/Layout';
import MobileView from '@/components/layout/MobileView';
import ToastWrapper from '@/components/shared/ToastWrapper';
import { dictionary } from '@/libs/en';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{dictionary.meta.title}</title>
      </Head>
      <Fonts />
      <ToastWrapper />
      <Layout>
        {/* Aplication supports only desktop resolutions, that is why it is added like this below */}
        <div className="lg:hidden">
          <MobileView />
        </div>
        <div className="hidden w-full lg:block">
          <Component {...pageProps} />
        </div>
      </Layout>
    </>
  );
}
