/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const RecentPost = ({ item }) => {
  return (
    <div className='flex items-center gap-x-2'>
      <img src={item.image} height={80} width={80} className='rounded-[10px]' />
      <div>
        <Link className='text-sm font-normal'>{item.title}</Link>
        <h6 className='text-xs font-normal text-[#9F9F9F]'>{item.date}</h6>
      </div>
    </div>
  );
};

export default RecentPost;
