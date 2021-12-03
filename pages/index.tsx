import { Button } from '@components/FormComponents';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { toast } from 'react-toastify';
import GoToShopButton from '@components/Shop/GoToShopButton';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Button
        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 m-5"
        handleClick={() => toast.success('Good News 🚀')}
      >
        Notify good news!
      </Button>
      <Button
        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 m-5"
        handleClick={() => toast.warning('Bad News 🌧')}
      >
        Notify Bad news!
      </Button>
      <GoToShopButton>Go to shop</GoToShopButton>
    </div>
  );
};

export default Home;
