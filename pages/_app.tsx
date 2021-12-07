import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@components/Layout';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '@utils/api';
import { Provider as ReduxProvider } from 'react-redux';
import { MetaMaskProvider } from 'metamask-react';
import { store } from '@redux/index';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <MetaMaskProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MetaMaskProvider>
      </QueryClientProvider>
    </ReduxProvider>
  );
}

export default MyApp;
