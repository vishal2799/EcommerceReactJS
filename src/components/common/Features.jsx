import { features } from '../../constants';

const Features = () => {
  return (
    <div className='bg-[#FAF3EA] px-14 py-24 max-md:py-18 max-md:px-7'>
      <div className='xl:container mx-auto flex justify-between items-center max-md:flex-col max-md:items-start max-md:gap-y-6'>
        {features.map((item, index) => (
          <div key={index} className='flex items-center gap-x-[10px]'>
            {<item.icon className='text-[60px] text-black' />}
            <div>
              <h3 className='text-[25px] font-semibold leading-9'>
                {item.label}
              </h3>
              <p className='text-xl font-medium leading-[30px] text-[#898989]'>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
