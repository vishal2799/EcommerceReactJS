import { FaSearch } from 'react-icons/fa';
import { blog, blogCategory, recentPosts } from '../constants';
import { BlogCard, RecentPost, Category } from '../components/Blog';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  const [search, setSearch] = useState('');

  return (
    <section className='font-poppins px-24 pt-20 pb-16 xl:container mx-auto max-md:px-4 max-md:pt-8 max-md:pb-6'>
      <div className='flex justify-between max-md:flex-col max-md:gap-y-10'>
        <div className='w-3/5 flex flex-col gap-y-14 max-md:w-full'>
          {blog.map((item, index) => (
            <BlogCard key={index} item={item} />
          ))}
        </div>
        <div className='w-4/12 flex flex-col max-md:w-full'>
          <div className='px-10 py-5 flex flex-col items-center max-md:px-1'>
            <div className='w-11/12 flex items-center mb-10 py-3 px-4 border border-[#9F9F9F] rounded-[10px]'>
              <input
                type='text'
                className='w-full focus:outline-none'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <FaSearch className='text-2xl' />
            </div>
            <div className='w-3/4 mb-16'>
              <h3 className='text-2xl font-medium mb-8'>Categories</h3>
              <div className='flex flex-col gap-y-10'>
                {blogCategory.map((item, index) => (
                  <Category key={index} item={item} />
                ))}
              </div>
            </div>
            <div className='w-3/4'>
              <h3 className='text-2xl font-medium mb-8'>Recent Posts</h3>
              <div className='flex flex-col gap-y-10'>
                {recentPosts.map((item, index) => (
                  <RecentPost key={index} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center mt-14 gap-x-9 justify-center'>
        <Link className='bg-[#B88E2F] px-5 py-3 rounded-[10px] text-white'>
          1
        </Link>
        <Link className='bg-[#F9F1E7] px-5 py-3 rounded-xl'>2</Link>
        <Link className='bg-[#F9F1E7] px-5 py-3 rounded-xl'>3</Link>
        <Link className='bg-[#F9F1E7] px-5 py-3 rounded-xl'>Next</Link>
      </div>
    </section>
  );
};

export default BlogSection;
