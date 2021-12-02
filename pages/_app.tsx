import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@components/Layout';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '@utils/api';
import { Provider as ReduxProvider } from 'react-redux';
// TODO: fix index import
import { store } from '../src/redux/index';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </ReduxProvider>
  );
}

export default MyApp;
