import { FaStar, FaStarHalf } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Compare1 } from '../assets/images';
import { Breadcrumb, Features } from '../components/common';

const ProductComparison = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Comparison', href: '/comparison' },
  ];
  const comparisonData = {
    titles: ['General', 'Dimensions'],
    properties: {
      General: ['Model Number', 'Brand'],
      Dimensions: ['Width', 'Height'],
    },
    products: [
      {
        General: ['12345', 'Brand A'],
        Dimensions: ['10cm', '15cm'],
      },
      {
        General: ['67890', 'Brand B'],
        Dimensions: ['12cm', '16cm'],
      },
    ],
  };

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className='max-w-7xl mx-auto mt-5 mb-20 font-poppins'>
        <div className='flex flex-col gap-y-10 overflow-x-auto'>
          <div className='min-w-[1200px] lg:min-w-0 grid grid-cols-4 py-6'>
            <div className='col-span-1 px-7'>
              <div className='flex flex-col'>
                <h3 className='text-[28px] font-medium mb-5'>
                  Go to Product page for more Products
                </h3>
                <Link
                  to='/shop'
                  className='w-fit text-xl font-medium text-[#727272] pb-1 border-b border-[#727272]'
                >
                  View More
                </Link>
              </div>
            </div>

            <div className='col-span-1 px-7'>
              <div className='flex flex-col'>
                <img
                  src={Compare1}
                  height={176}
                  className='w-full rounded-md object-cover'
                />
                <div className='flex flex-col gap-y-[5px] pt-4 pl-[2px]'>
                  <h3 className='text-2xl font-medium'>Asgaard Sofa</h3>
                  <h5 className='text-lg font-medium'>Rs. 250,000.00</h5>
                  <div className='flex items-center'>
                    <h5 className='text-lg font-medium'>4.7</h5>
                    <div className='flex gap-x-[7px] px-1'>
                      <FaStar className='text-base text-[#FFC700]' />
                      <FaStar className='text-base text-[#FFC700]' />
                      <FaStar className='text-base text-[#FFC700]' />
                      <FaStar className='text-base text-[#FFC700]' />
                      <FaStarHalf className='text-base text-[#FFC700]' />
                    </div>
                    <h6 className='text-[13px] font-normal text-[#9F9F9F] pl-2 border-l border-[#9F9F9F]'>
                      204 Review
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-span-1 px-7'>
              <div className='flex flex-col'>
                <img
                  src={Compare1}
                  height={176}
                  className='w-full rounded-md object-cover'
                />
                <div className='flex flex-col gap-y-[5px] pt-4 pl-[2px]'>
                  <h3 className='text-2xl font-medium'>Asgaard Sofa</h3>
                  <h5 className='text-lg font-medium'>Rs. 250,000.00</h5>
                  <div className='flex items-center'>
                    <h5 className='text-lg font-medium'>4.7</h5>
                    <div className='flex gap-x-[7px] px-1'>
                      <FaStar className='text-base text-[#FFC700]' />
                      <FaStar className='text-base text-[#FFC700]' />
                      <FaStar className='text-base text-[#FFC700]' />
                      <FaStar className='text-base text-[#FFC700]' />
                      <FaStarHalf className='text-base text-[#FFC700]' />
                    </div>
                    <h6 className='text-[13px] font-normal text-[#9F9F9F] pl-2 border-l border-[#9F9F9F]'>
                      204 Review
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-span-1 px-7'>
              <div className='flex flex-col gap-y-[14px] py-10 px-2'>
                <h3 className='text-2xl font-semibold'>Add A Product</h3>
                <select
                  name='show'
                  id='show'
                  className='px-3 py-2 text-white text-sm font-semibold bg-[#B88E2F] rounded-[6px]'
                >
                  <option value='16'>Choose a Product</option>
                  <option value='32'>32</option>
                </select>
              </div>
            </div>
          </div>

          <div className='min-w-[1200px] lg:min-w-0 grid grid-cols-4 border-t border-black'>
            <div className='col-span-1 px-7 border-r border-black'>
              {comparisonData.titles.map((title, titleIdx) => (
                <div key={titleIdx} className='py-3'>
                  <h3 className='text-[28px] font-medium p-2'>{title}</h3>
                  {comparisonData.properties[title].map((property, propIdx) => (
                    <div key={propIdx} className='text-xl font-normal p-2'>
                      {property}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className='col-span-1 px-7 border-r border-black'>
              {comparisonData.titles.map((title, titleIdx) => (
                <div key={titleIdx} className='py-3'>
                  <div className='text-[28px] font-medium p-2'>&nbsp;</div>
                  {comparisonData.properties[title].map((property, propIdx) => (
                    <div key={propIdx} className='text-xl font-normal p-2'>
                      {comparisonData.products[0][title][propIdx]}
                    </div>
                  ))}
                </div>
              ))}
              <div className='mt-10'>
                <button className='text-xl font-normal text-white py-4 px-12 bg-[#B88E2F]'>
                  Add To Cart
                </button>
              </div>
            </div>

            <div className='col-span-1 px-7 border-r border-black'>
              {comparisonData.titles.map((title, titleIdx) => (
                <div key={titleIdx} className='py-3'>
                  <div className='text-[28px] font-medium p-2'>&nbsp;</div>
                  {comparisonData.properties[title].map((property, propIdx) => (
                    <div key={propIdx} className='text-xl font-normal p-2'>
                      {comparisonData.products[1][title][propIdx]}
                    </div>
                  ))}
                </div>
              ))}
              <div className='mt-10'>
                <button className='text-xl font-normal text-white py-4 px-12 bg-[#B88E2F]'>
                  Add To Cart
                </button>
              </div>
            </div>

            <div className='col-span-1 px-7'></div>
          </div>
        </div>
      </div>

      <Features />
    </>
  );
};

export default ProductComparison;
