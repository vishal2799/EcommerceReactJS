/* eslint-disable react/prop-types */
import { Banner as BannerImg } from '../../assets/images';
import { Link } from 'react-router-dom';

const Banner = ({
  title = 'New Arrival',
  subtitle = 'Discover Our New Collection',
  desc = 'Lorem ipsum',
  urlLabel = 'Buy',
  url = '/',
}) => {
  return (
    <div
      style={{ '--image-url': `url(${BannerImg})` }}
      className='font-poppins bg-[image:var(--image-url)] h-[700px] flex max-md:justify-center justify-end items-center min-[712px]:px-14 2xl:container mx-auto'
    >
      <div className='w-1/2 max-md:w-11/12 px-10 pt-16 pb-9 bg-[#FFF3E3] rounded-[10px]'>
        <h5 className='text-base font-semibold tracking-wider text-[#333333]'>
          {title}
        </h5>
        <h1 className='text-[52px] font-bold text-[#B88E2F] leading-[65px] mb-[17px]'>
          {subtitle}
        </h1>
        <p className='text-[18px] font-medium leading-6 text-[#333333]'>
          {desc}
        </p>
        <Link
          to={url}
          className='inline-block capitalize bg-[#B88E2F] px-[72px] py-6 text-white font-bold text-base mt-12'
        >
          {urlLabel}
        </Link>
      </div>
    </div>
  );
};

export default Banner;
