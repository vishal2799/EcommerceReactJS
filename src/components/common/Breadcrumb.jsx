/* eslint-disable react/prop-types */
import { Cart as CartImg, Logo1 } from '../../assets/images';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ items }) => {
  return (
    <div>
      {items.length <= 2 ? (
        <div
          style={{ '--image-url': `url(${CartImg})` }}
          className='font-poppins bg-[image:var(--image-url)] h-[315px] flex justify-center items-center 2xl:container mx-auto'
        >
          <div className='flex flex-col items-center'>
            <img src={Logo1} width={77} height={77} />
            <h2 className='text-5xl font-medium leading-[72px]'>
              {items[items.length - 1].label}
            </h2>
            <nav aria-label='Breadcrumb'>
              <ol className='list-reset flex'>
                {items.map((item, index) => (
                  <li key={index} className='flex items-center'>
                    {index < items.length - 1 ? (
                      <>
                        <Link
                          to={item.href}
                          className='text-base font-medium text-black'
                        >
                          {item.label}
                        </Link>
                        <span className='text-base font-medium text-black mx-2'>
                          &gt;
                        </span>
                      </>
                    ) : (
                      <span className='text-base font-light text-black'>
                        {item.label}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>
      ) : (
        <div className='font-poppins bg-[#F9F1E7] h-[100px] flex justify-start items-center px-[54px] 2xl:container mx-auto'>
          <nav aria-label='Breadcrumb'>
            <ol className='list-reset flex'>
              {items.map((item, index) => (
                <li key={index} className='flex items-center'>
                  {index < items.length - 1 ? (
                    <>
                      <Link
                        to={item.href}
                        className='text-base font-normal text-[#9F9F9F]'
                      >
                        {item.label}
                      </Link>
                      <span className='text-base font-normal text-black mx-3'>
                        &gt;
                      </span>
                    </>
                  ) : (
                    <span className='text-base font-normal text-black py-[5px] px-4 border-l border-[#9F9F9F]'>
                      {item.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Breadcrumb;
