import { Banner, Categories, OurProducts, Share } from '../components/Home';

const Home = () => {
  return (
    <>
      <Banner
        title='New Arrival'
        subtitle='Discover Our New Collection'
        desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
          elit tellus, luctus nec ullamcorper mattis.'
        url='/shop'
        urlLabel='Buy Now'
      />
      <Categories />
      <OurProducts />
      <Share />
    </>
  );
};

export default Home;
