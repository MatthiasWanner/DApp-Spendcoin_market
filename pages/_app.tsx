import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../src/components/layout';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '@utils/api';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}

export default MyApp;
