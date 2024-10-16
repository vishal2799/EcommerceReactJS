import { useState } from 'react';
import VerticalTabs from '../components/common/VerticalTabs';

const CheckoutSection = () => {
  const [country, setCountry] = useState('india');
  const [email, setEmail] = useState('');
  return (
    <section className='py-14 font-poppins'>
      <div className='xl:container mx-auto max-2xl:px-10 flex max-md:flex-col max-md:gap-y-5'>
        <div className='w-1/2 max-md:w-full max-md:px-1'>
          <div className='w-11/12 mx-auto'>
            <h2 className='text-4xl font-semibold mb-9'>Billing Details</h2>
            <form>
              <div className='mb-9'>
                <label
                  htmlFor='email'
                  className='block text-base font-medium mb-5'
                >
                  Email Address
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='border border-[#9F9F9F] rounded-lg w-full py-6 px-8'
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='mb-9'>
                <label
                  htmlFor='country'
                  className='block text-base font-medium mb-5'
                >
                  Country
                </label>
                <select
                  name='country'
                  id='country'
                  className='border border-[#9F9F9F] rounded-lg w-full py-6 px-8'
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value='srilanka'>Sri Lanka</option>
                  <option value='india'>India</option>
                  <option value='canada'>Canada</option>
                </select>
              </div>
            </form>
          </div>
        </div>
        <div className='w-1/2 px-9 py-[86px] max-md:w-full max-md:px-6 max-md:py-10'>
          <div className='flex flex-col gap-y-4 pb-10 border-b border-[#D9D9D9]'>
            <div className='flex justify-between items-center'>
              <h4 className='text-2xl font-medium'>Product</h4>
              <h4 className='text-2xl font-medium'>Subtotal</h4>
            </div>
            <div className='flex justify-between items-center'>
              <h5 className='text-base font-normal text-[#9F9F9F]'>
                Asgaard sofa{' '}
                <span className='text-xs font-medium text-black'>x 1</span>
              </h5>
              <h5 className='text-base font-light'>Rs. 250,000.00</h5>
            </div>
            <div className='flex justify-between items-center'>
              <h5 className='text-base font-normal'>Subtotal</h5>
              <h5 className='text-base font-light'>Rs. 250,000.00</h5>
            </div>
            <div className='flex justify-between items-center'>
              <h5 className='text-base font-normal'>Total</h5>
              <h5 className='text-2xl font-bold text-[#B88E2F]'>
                Rs. 250,000.00
              </h5>
            </div>
          </div>
          <div className='mt-6 w-full'>
            <VerticalTabs />
          </div>
          <h4 className='text-base font-medium mt-6 mb-10'>
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our <strong>privacy policy.</strong>
          </h4>
          <div className='text-center'>
            <button className='text-xl font-normal py-4 w-3/4 border border-black rounded-2xl'>
              Place Order
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutSection;
