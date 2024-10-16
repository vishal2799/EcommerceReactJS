import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const CategoryCard = ({ item }) => {
  return (
    <div className='text-center w-full'>
      <Link to={item.url}>
        <img
          src={item.image}
          alt=''
          className='h-[480px] mb-7 w-full object-cover'
        />
        <span className='text-2xl font-semibold text-[#333333]'>
          {item.label}
        </span>
      </Link>
    </div>
  );
};

export default CategoryCard;
