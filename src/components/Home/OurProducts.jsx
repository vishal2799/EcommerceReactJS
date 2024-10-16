import { Link } from 'react-router-dom';
import { ProductCard } from '../';
import { products } from '../../constants';

const OurProducts = () => {
  const homeProducts = products.slice(0, 8);
  return (
    <section className='px-[30px] pb-16 font-poppins max-md:px-4 xl:container mx-auto'>
      <h2 className='text-[40px] font-bold text-[#3A3A3A] text-center mb-8'>
        Our Products
      </h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8'>
        {homeProducts.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </div>

      <div className='flex justify-center items-center'>
        <Link
          to='/shop'
          className='border border-[#B88E2F] bg-white py-3 px-[70px] text-[#B88E2F] text-base font-semibold'
        >
          Show More
        </Link>
      </div>
    </section>
  );
};

export default OurProducts;
