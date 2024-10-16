import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { cartItems } from '../constants';

const CartSection = () => {
  function formatAndMultiply(number, quantity) {
    const result = number * quantity;
    return result.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
  return (
    <section className='font-poppins px-[100px] pt-[72px] pb-16 xl:container mx-auto max-md:px-3 max-md:pt-8 max-md:pb-8'>
      <div className='flex justify-between max-md:flex-col max-md:gap-y-6'>
        <div className='max-md:overflow-x-scroll w-3/5 max-md:w-full'>
          <table className='w-full'>
            <thead className='bg-[#F9F1E7]'>
              <tr>
                <th className='py-4 px-2 text-base font-medium leading-6'></th>
                <th className='py-4 px-2 text-base font-medium leading-6'>
                  Product
                </th>
                <th className='py-4 px-2 text-base font-medium leading-6'>
                  Price
                </th>
                <th className='py-4 px-2 text-base font-medium leading-6'>
                  Quantity
                </th>
                <th className='py-4 px-2 text-base font-medium leading-6'>
                  Subtotal
                </th>
                <th className='py-4 px-2 text-base font-medium leading-6'></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td className='py-10 pr-2 w-[100px]'>
                    <img src={item.image} className='w-full h-[100px]' />
                  </td>
                  <td className='py-10 px-2 text-base font-medium leading-6 text-[#9F9F9F]'>
                    {item.name}
                  </td>
                  <td className='py-10 px-2 text-base font-medium leading-6 text-[#9F9F9F]'>
                    Rs. {formatAndMultiply(item.price, 1)}
                  </td>
                  <td className='text-center'>
                    <input
                      type='number'
                      value={item.quantity}
                      className='border border-[#9F9F9F] w-11 h-11 py-2 px-2 rounded-md'
                    />
                  </td>
                  <td className='py-10 px-2 text-base font-medium leading-6 text-black'>
                    Rs. {formatAndMultiply(item.price, item.quantity)}
                  </td>
                  <td className='pr-3'>
                    <FaTrash className='text-xl text-[#B88E2F]' />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='w-4/12 bg-[#F9F1E7] pt-4 px-[75px] pb-[80px] text-center max-md:w-full'>
          <h2 className='text-[32px] font-semibold'>Cart Totals</h2>
          <div className='mt-[60px] mb-[48px]'>
            <div className='flex justify-between mb-7'>
              <h5 className='text-base font-medium leading-6'>Subtotal</h5>
              <h5 className='text-base font-normal leading-6 text-[#9F9F9F]'>
                Rs. 250,000.00
              </h5>
            </div>
            <div className='flex justify-between'>
              <h5 className='text-base font-medium leading-6'>Total</h5>
              <h5 className='text-xl font-medium leading-[30px] text-[#B88E2F]'>
                Rs. 250,000.00
              </h5>
            </div>
          </div>
          <Link
            to='/checkout'
            className='text-xl font-normal px-[40px] py-[14px] rounded-2xl border border-black'
          >
            Check Out
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CartSection;
