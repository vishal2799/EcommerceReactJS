import { Breadcrumb, Features } from '../components/common';
import { CartSection } from '../sections';

const Cart = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Cart', href: '/cart' },
  ];
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <CartSection />
      <Features />
    </>
  );
};

export default Cart;
