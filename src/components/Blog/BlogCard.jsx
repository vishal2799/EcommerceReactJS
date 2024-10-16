/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { FaUser, FaCalendar, FaTag } from 'react-icons/fa';

const BlogCard = ({ item }) => {
  return (
    <div>
      <img src={item.image} height={490} className='rounded-[10px]' />
      <div className='flex items-center gap-x-9 mt-4'>
        <div className='flex items-center gap-x-2'>
          <FaUser className='text-xl text-[#9F9F9F]' />
          <h5 className='text-base font-normal text-[#9F9F9F]'>
            {item.author}
          </h5>
        </div>
        <div className='flex items-center gap-x-2'>
          <FaCalendar className='text-xl text-[#9F9F9F]' />
          <h5 className='text-base font-normal text-[#9F9F9F]'>{item.date}</h5>
        </div>
        <div className='flex items-center gap-x-2'>
          <FaTag className='text-xl text-[#9F9F9F]' />
          <h5 className='text-base font-normal text-[#9F9F9F]'>
            {item.category}
          </h5>
        </div>
      </div>
      <h3 className='text-3xl font-medium mt-4'>{item.title}</h3>
      <p className='text-base font-normal text-[#9F9F9F] leading-6 mt-3 mb-8'>
        {item.desc.substring(0, 200) + ' ...'}
      </p>
      <Link to='/' className='text-base font-normal pb-3 border-b border-black'>
        Read more
      </Link>
    </div>
  );
};

export default BlogCard;
