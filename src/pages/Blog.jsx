import { Breadcrumb, Features } from '../components/common';
import { BlogSection } from '../sections';

const Blog = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
  ];
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <BlogSection />
      <Features />
    </>
  );
};

export default Blog;
