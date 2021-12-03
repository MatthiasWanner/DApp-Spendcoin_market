import Link from 'next/link';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

function GoToShopButton({ children, className = '' }: IProps): JSX.Element {
  return (
    <Link href="/shop">
      <a
        className={`inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-sapphire hover:bg-indigo-dye focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 m-5 ${className}`}
      >
        {children}
      </a>
    </Link>
  );
}

export default GoToShopButton;
