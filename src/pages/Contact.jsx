import { Breadcrumb, Features } from '../components/common';
import { ContactSection } from '../sections';

const Contact = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Contact', href: '/contact' },
  ];
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <ContactSection />
      <Features />
    </>
  );
};

export default Contact;
