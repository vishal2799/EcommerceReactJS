import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { MdCompareArrows } from 'react-icons/md';
import { FaRegHeart, FaEye } from 'react-icons/fa';
import { useEffect, useState } from 'react';

/* eslint-disable react/prop-types */
const ProductCard = ({ item }) => {
  const { addToCart, cart, toggleCart } = useCart();
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  useEffect(() => {
    const itemInCart = cart.find((itemm) => itemm.id === item.id);
    if (itemInCart) {
      setIsAddedToCart(true);
    } else {
      setIsAddedToCart(false);
    }
  }, [cart, item.id]);

  const handleAddToCart = () => {
    addToCart({ ...item, quantity: 1 });
  };

  return (
    <div className='group relative overflow-hidden'>
      <div className='relative h-[300px]'>
        <img src={item.image} alt='' className='absolute h-full w-full' />
        <div className='absolute right-4 top-4 h-14 w-14 bg-[#2EC1AC] rounded-full flex justify-center items-center'>
          <span className='text-base font-medium text-white'>-50%</span>
        </div>
      </div>

      <div className='px-4 pt-4 pb-8 bg-[#F4F5F7]'>
        <h3 className='text-2xl font-semibold text-[#3A3A3A]'>{item.name}</h3>
        <p className='text-base font-medium text-[#898989] my-2'>{item.desc}</p>
        <p className='text-xl font-semibold text-[#3A3A3A] flex justify-between items-center'>
          {item.price}{' '}
          <span className='text-base font-normal text-[#B0B0B0] line-through'>
            Rp 3.500.000
          </span>
        </p>
      </div>

      <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-500 ease-in-out z-10'></div>

      <div className='absolute inset-0 flex justify-center items-center flex-col opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-full transition-all duration-500 ease-in-out z-20'>
        <button
          onClick={!isAddedToCart ? handleAddToCart : toggleCart}
          className='bg-white py-3 px-12 text-[#B88E2F] text-base font-semibold'
        >
          {!isAddedToCart ? 'Add To Cart' : 'Go To Cart'}
        </button>
        <div className='flex justify-between items-center mt-3 gap-x-4'>
          <Link
            to={`/shop/${item.id}`}
            className='text-white text-base font-semibold flex items-center'
          >
            <FaEye className='text-white mr-1' /> View
          </Link>
          <Link
            to='/comparison'
            className='text-white text-base font-semibold flex items-center'
          >
            <MdCompareArrows className='text-white mr-1' /> Compare
          </Link>
          <button className='text-white text-base font-semibold flex items-center'>
            <FaRegHeart className='text-white mr-1' /> Like
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
