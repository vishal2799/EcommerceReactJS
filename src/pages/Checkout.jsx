import { Breadcrumb, Features } from '../components/common';
import { CheckoutSection } from '../sections';

const Checkout = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Checkout', href: '/checkout' },
  ];
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <CheckoutSection />
      <Features />
    </>
  );
};

export default Checkout;
