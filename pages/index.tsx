import { Button } from '@components/FormComponents';
import type { NextPage } from 'next';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { toast } from 'react-toastify';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Button
        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 m-5"
        handleClick={() => toast.success('Good News 🚀', {})}
      >
        Notify good new!
      </Button>
      <Button
        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 m-5"
        handleClick={() => toast.warning('Bad News 🌧')}
      >
        Notify good new!
      </Button>
      <Link href="/shop">
        <a className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 m-5">
          Link to Shop
        </a>
      </Link>
    </div>
  );
};

export default Home;
