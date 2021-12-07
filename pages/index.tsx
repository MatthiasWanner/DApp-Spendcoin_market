import { Button } from '@components/FormComponents';
import type { NextPage } from 'next';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { toast } from 'react-toastify';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Link href="/shop">
        <a className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 m-5">
          Link to Shop
        </a>
      </Link>
    </div>
  );
};

export default Home;
