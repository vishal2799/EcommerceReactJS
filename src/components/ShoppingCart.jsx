import { Link } from 'react-router-dom';
import { ProductSide } from '../assets/images';
import { useCart } from '../context/CartContext'; // Import the useCart hook
import { FaRegTrashAlt } from 'react-icons/fa';
import { useEffect } from 'react';

const ShoppingCart = () => {
  const { isCartOpen, toggleCart, removeFromCart, cart } = useCart(); // Access cart state and functions

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isCartOpen]);
  return (
    <>
      {isCartOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-40'
          onClick={toggleCart}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 w-96 h-screen bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex flex-col h-full'>
          <div className='flex justify-between items-center px-6 py-6 border-b border-gray-300'>
            <h4 className='text-2xl font-semibold'>Shopping Cart</h4>
            <button className=' text-[#9F9F9F] text-lg' onClick={toggleCart}>
              &#10005;
            </button>
          </div>

          <div className='flex-1 overflow-y-auto px-6 py-4'>
            {cart.length > 0 ? (
              cart.map((item, index) => (
                <div
                  key={index}
                  className='flex justify-between items-center mb-4'
                >
                  <div className='flex gap-x-4 items-center'>
                    <img
                      src={ProductSide}
                      className='w-[100px] h-[100px] rounded-md object-cover'
                      alt={`Cart item ${index}`}
                    />
                    <div>
                      <h5 className='text-base font-normal'>{item.name}</h5>
                      <h5 className='text-base font-light text-black'>
                        {item.quantity}
                        <span className='ml-4 text-xs font-light'>X</span>
                        <span className='ml-4 text-xs font-medium text-[#B88E2F]'>
                          Rs. {item.price}
                        </span>
                      </h5>
                    </div>
                  </div>
                  <button
                    className='w-7 h-7 bg-[#9F9F9F] flex justify-center items-center rounded-full'
                    onClick={() => removeFromCart(item.id)}
                  >
                    <FaRegTrashAlt className='text-xs text-white' />
                  </button>
                </div>
              ))
            ) : (
              <p className='text-center text-gray-500'>Your cart is empty</p>
            )}
          </div>

          <div className='flex justify-between px-6 py-2'>
            <h5 className='text-base font-normal'>Subtotal</h5>
            <h5 className='text-base font-semibold text-[#B88E2F]'>
              Rs. 520,000.00
            </h5>
          </div>
          <div className='px-6 py-6 border-t border-gray-300'>
            <div className='flex justify-between items-center'>
              <Link
                to='/cart'
                className='text-xs font-normal rounded-[50px] py-[6px] px-[30px] border border-black'
              >
                Cart
              </Link>
              <Link
                to='/checkout'
                className='text-xs font-normal rounded-[50px] py-[6px] px-[30px] border border-black'
              >
                Checkout
              </Link>
              <Link
                to='/comparison'
                className='text-xs font-normal rounded-[50px] py-[6px] px-[30px] border border-black'
              >
                Comparison
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
