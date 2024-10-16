import { Link } from 'react-router-dom';
import { navLinks2, navLinks3 } from '../../constants';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  return (
    <div className='font-poppins border-t border-t-[#D9D9D9] px-24 pt-12 pb-10 max-md:px-4 xl:container mx-auto'>
      <div className='flex flex-col gap-y-12 max-sm:gap-y-8'>
        <div className='flex max-md:flex-col max-md:gap-y-6'>
          <div className='w-2/5 max-md:w-11/12'>
            <h3 className='text-2xl font-bold mb-[50px] max-sm:mb-4'>
              Funiro.
            </h3>
            <p className='text-base font-normal text-[#9F9F9F]'>
              400 University Drive Suite 200 Coral Gables,<br></br>FL 33134 USA
            </p>
          </div>
          <div className='w-3/5 flex justify-between max-md:flex-col max-md:w-11/12 max-md:gap-y-6'>
            <div className='w-1/2 flex justify-between max-md:w-full max-sm:flex-col max-sm:gap-y-6 max-sm:text-center'>
              <div>
                <h5 className='text-base font-medium text-[#9F9F9F] mb-14 max-sm:mb-3'>
                  Link
                </h5>
                <ul className='flex flex-col gap-y-11 max-sm:gap-y-4'>
                  {navLinks2.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.href}
                        className='text-base font-medium text-black'
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className='text-base font-medium text-[#9F9F9F] mb-14 max-sm:mb-3'>
                  Help
                </h5>
                <ul className='flex flex-col gap-y-11 max-sm:gap-y-4'>
                  {navLinks3.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.href}
                        className='text-base font-medium text-black'
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='w-2/5 max-md:w-full'>
              <h5 className='text-base font-medium text-[#9F9F9F] mb-14 max-sm:mb-3'>
                Newsletter
              </h5>
              <div className='flex gap-[11px] items-center'>
                <input
                  type='email'
                  className='placeholder-[#9F9F9F] text-[14px] font-medium pr-4 pb-[3px] border-b border-b-black'
                  placeholder='Enter Your Email Address'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className='text-[14px] font-medium pb-[3px] border-b border-b-black'>
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='pt-9 border-t border-t-[#D9D9D9] text-base font-normal'>
          2023 furino. All rights reverved
        </div>
      </div>
    </div>
  );
};

export default Footer;
