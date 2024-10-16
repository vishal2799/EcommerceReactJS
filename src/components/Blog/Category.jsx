/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const Category = ({ item }) => {
  return (
    <div className='flex justify-between'>
      <Link className='text-base font-normal text-[#9F9F9F]'>{item.title}</Link>
      <h5 className='text-base font-normal text-[#9F9F9F]'>{item.count}</h5>
    </div>
  );
};

export default Category;
