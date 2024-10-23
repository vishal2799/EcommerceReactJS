import logo from '../../assets/images';
import { FaRegHeart, FaRegUser, FaSearch } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { navLinks } from '../../constants';
import { NavLink } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const { toggleCart } = useCart();

  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-base leading-6 text-black font-medium border-b border-b-black'
      : 'text-base leading-6 text-black font-medium';
  return (
    <header className='font-poppins py-[30px] px-[54px] 2xl:container mx-auto'>
      <nav className='flex items-center justify-between'>
        <NavLink to='/'>
          <img src={logo} alt='logo' width={185} height={41} />
        </NavLink>
        <ul className='flex items-center gap-9 max-lg:hidden'>
          {navLinks.map((item, index) => (
            <li key={index}>
              <NavLink to={item.href} className={linkClass}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className='flex items-center gap-7 max-lg:hidden'>
          <li>
            <button>
              <FaRegUser width={28} height={28} className='text-black' />
            </button>
          </li>
          <li>
            <button>
              <FaSearch width={28} height={28} className='text-black' />
            </button>
          </li>
          <li>
            <button>
              <FaRegHeart width={28} height={28} className='text-black' />
            </button>
          </li>
          <li>
            <button onClick={toggleCart}>
              <FiShoppingCart width={28} height={28} className='text-black' />
            </button>
          </li>
        </ul>
        <div className='hidden max-lg:block'>
          <RxHamburgerMenu className='text-black text-2xl' />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
