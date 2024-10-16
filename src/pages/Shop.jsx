import { FaFilter, FaThList } from 'react-icons/fa';
import { FiGrid } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { Breadcrumb, Features } from '../components/common';
import { products } from '../constants';

const Shop = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
  ];
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <section className='2xl:container mx-auto pb-14'>
        <div className='bg-[#F9F1E7] flex justify-center items-center py-5'>
          <div className='flex justify-between items-center w-4/5'>
            <div className='flex gap-x-6'>
              <div className='flex items-center'>
                <button>
                  <FaFilter className='text-2xl' />
                </button>
                <h4 className='text-xl font-normal'>Filter</h4>
              </div>
              <button>
                <FiGrid className='text-2xl' />
              </button>
              <button>
                <FaThList className='text-2xl' />
              </button>
              <h5 className='text-base font-normal pl-8 border-l border-black'>
                Showing 1–16 of 32 results
              </h5>
            </div>
            <div className='flex gap-x-7'>
              <div className='flex items-center'>
                <label htmlFor='show' className='text-xl font-normal mr-4'>
                  Show
                </label>
                <select name='show' id='show' className='px-2 py-2'>
                  <option value='16'>16</option>
                  <option value='32'>32</option>
                </select>
              </div>
              <div className='flex items-center'>
                <label htmlFor='show' className='text-xl font-normal mr-4'>
                  Sort by
                </label>
                <select name='show' id='show' className='px-2 py-2'>
                  <option value='16'>Default</option>
                  <option value='32'>32</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-11 px-12'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-11'>
            {products.map((item, index) => (
              <ProductCard key={index} item={item} />
            ))}
          </div>
          <div className='flex items-center gap-x-9 justify-center'>
            <Link className='bg-[#B88E2F] px-5 py-3 rounded-[10px] text-white'>
              1
            </Link>
            <Link className='bg-[#F9F1E7] px-5 py-3 rounded-xl'>2</Link>
            <Link className='bg-[#F9F1E7] px-5 py-3 rounded-xl'>3</Link>
            <Link className='bg-[#F9F1E7] px-5 py-3 rounded-xl'>Next</Link>
          </div>
        </div>
      </section>
      <Features />
    </>
  );
};

export default Shop;
