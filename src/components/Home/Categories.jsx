import { categories } from '../../constants';
import { CategoryCard } from './';

const Categories = () => {
  return (
    <section className='font-poppins py-14 px-32 max-md:px-4 2xl:container mx-auto'>
      <div className='mb-16 text-center'>
        <h2 className='text-3xl font-bold text-[#333333]'>Browse The Range</h2>
        <p className='text-xl font-normal text-[#666666]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {categories.map((item, index) => (
          <CategoryCard item={item} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
