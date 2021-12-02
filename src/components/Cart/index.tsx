import DesktopCart from './DesktopCart';
import MobileCart from './MobileCart';

export default function Cart(): JSX.Element {
  return (
    <>
      <MobileCart />
      <DesktopCart />
    </>
  );
}
