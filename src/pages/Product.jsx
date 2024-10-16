import { useEffect, useState } from 'react';
import { Product11, Product12, ProductSide } from '../assets/images';
import { Tabs, Tab, Breadcrumb } from '../components/common';
import {
  FaStar,
  FaStarHalf,
  FaPlus,
  FaMinus,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';
import ProductThumbnail from '../components/ProductThumbnail';
import { furniture, products } from '../constants';
import { Link, useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Product = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'Asgaard sofa', href: '/product' },
  ];

  const [bigProductImg, setBigProductImg] = useState(ProductSide);

  const { id } = useParams();
  const product = products.find((prod) => prod.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const { addToCart, cart, toggleCart } = useCart();

  useEffect(() => {
    const itemInCart = cart.find((item) => item.id === product.id);
    if (itemInCart) {
      setIsAddedToCart(true);
    } else {
      setIsAddedToCart(false);
    }
  }, [cart, id]);

  const handleIncrease = () => {
    setQuantity((prevQty) => prevQty + 1);
  };

  const handleDecrease = () => {
    setQuantity((prevQty) => (prevQty > 1 ? prevQty - 1 : 1));
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    setIsAddedToCart(true);
  };

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <section className='font-poppins border-b pt-8 pb-14 2xl:container mx-auto'>
        <div className='px-6 md:px-12 flex flex-col gap-y-8 md:flex-row md:gap-y-0 md:justify-between'>
          <div className='w-full md:w-1/2 md:px-12'>
            <div className='flex flex-col-reverse gap-y-8 md:flex-row md:justify-evenly'>
              <div className='md:w-1/4 flex flex-row gap-x-2 md:flex-col md:gap-y-8'>
                {furniture.map((image, index) => (
                  <ProductThumbnail
                    key={index}
                    index={index}
                    imgURL={image}
                    changeBigProductImage={(shoe) => setBigProductImg(shoe)}
                    bigProductImg={bigProductImg}
                  />
                ))}
              </div>
              <div className='md:w-2/3'>
                <img
                  src={bigProductImg}
                  height={500}
                  className='w-full rounded-[10px] object-cover'
                />
              </div>
            </div>
          </div>
          <div className='w-full md:w-1/2'>
            <div className='pb-14 border-b border-[#D9D9D9]'>
              <h2 className='text-[42px] font-normal'>{product.name}</h2>
              <h4 className='text-2xl font-medium text-[#9F9F9F]'>
                {product.price}
              </h4>
              <div className='flex items-center gap-x-4 mt-[10px]'>
                <div className='flex gap-x-[6px]'>
                  <FaStar className='text-base text-[#FFC700]' />
                  <FaStar className='text-base text-[#FFC700]' />
                  <FaStar className='text-base text-[#FFC700]' />
                  <FaStar className='text-base text-[#FFC700]' />
                  <FaStarHalf className='text-base text-[#FFC700]' />
                </div>
                <h6 className='text-[13px] font-normal text-[#9F9F9F] pl-5 border-l border-[#9F9F9F]'>
                  5 Customer Review
                </h6>
              </div>
              <h6 className='text-[13px] font-normal mt-3'>
                Setting the bar as one of the loudest speakers in its class, the
                Kilburn is a compact, stout-hearted hero with a well-balanced
                audio which boasts a clear midrange and extended highs for a
                sound.
              </h6>
              <div className='flex flex-col mt-5 gap-y-3'>
                <h6 className='text-sm font-normal text-[#9F9F9F]'>Size</h6>
                <div className='flex gap-x-4'>
                  <button className='w-10 h-10 text-center flex justify-center items-center text-[13px] rounded-[5px] font-normal text-white bg-[#B88E2F]'>
                    L
                  </button>
                  <button className='w-10 h-10 text-center flex justify-center items-center text-[13px] rounded-[5px] font-normal text-black bg-[#F9F1E7]'>
                    XL
                  </button>
                  <button className='w-10 h-10 text-center flex justify-center items-center text-[13px] rounded-[5px] font-normal text-black bg-[#F9F1E7]'>
                    XS
                  </button>
                </div>
              </div>
              <div className='flex flex-col mt-5 gap-y-3'>
                <h6 className='text-sm font-normal text-[#9F9F9F]'>Color</h6>
                <div className='flex gap-x-4'>
                  <button className='w-10 h-10 text-center flex justify-center items-center text-[13px] rounded-full font-normal text-white bg-[#B88E2F]'></button>
                  <button className='w-10 h-10 text-center flex justify-center items-center text-[13px] rounded-full font-normal text-black bg-[#F9F1E7]'></button>
                  <button className='w-10 h-10 text-center flex justify-center items-center text-[13px] rounded-full font-normal text-black bg-[#F9F1E7]'></button>
                </div>
              </div>
              <div className='flex flex-col gap-y-4 md:flex-row md:gap-x-4 mt-8'>
                {!isAddedToCart ? (
                  <>
                    <div className='flex justify-between md:justify-center md:items-center md:gap-x-4 py-4 px-4 rounded-2xl border border-[#9F9F9F]'>
                      <button onClick={handleDecrease}>
                        <FaMinus className='text-lg' />
                      </button>
                      <span>{quantity}</span>
                      <button onClick={handleIncrease}>
                        <FaPlus className='text-lg' />
                      </button>
                    </div>
                    <button
                      onClick={handleAddToCart}
                      disabled={isAddedToCart}
                      className='text-xl font-normal py-3 px-8 border border-black rounded-2xl'
                    >
                      Add To Cart
                    </button>
                  </>
                ) : (
                  <button
                    onClick={toggleCart}
                    className='text-xl font-normal py-3 px-8 border border-black rounded-2xl'
                  >
                    Go to Cart
                  </button>
                )}

                <Link
                  to='/comparison'
                  className='flex justify-center items-center text-xl font-normal py-3 px-8 border border-black rounded-2xl'
                >
                  <FaPlus className='text-lg mr-2' /> Compare
                </Link>
              </div>
            </div>
            <div className='flex flex-col gap-y-3 pt-10'>
              <div className='flex'>
                <h4 className='w-24 text-base font-normal text-[#9F9F9F]'>
                  SKU
                </h4>
                <span className='mr-2'>: </span>

                <h4 className='text-base font-normal text-[#9F9F9F]'>SS001</h4>
              </div>
              <div className='flex'>
                <h4 className='w-24 text-base font-normal text-[#9F9F9F]'>
                  Category
                </h4>
                <span className='mr-2'>: </span>

                <h4 className='text-base font-normal text-[#9F9F9F]'>Sofas</h4>
              </div>
              <div className='flex'>
                <h4 className='w-24 text-base font-normal text-[#9F9F9F]'>
                  Tags
                </h4>
                <span className='mr-2'>: </span>
                <h4 className='text-base font-normal text-[#9F9F9F]'>
                  Sofa, Chair, Home, Shop
                </h4>
              </div>
              <div className='flex'>
                <h4 className='w-24 text-base font-normal text-[#9F9F9F]'>
                  Share
                </h4>
                <span className='mr-2'>: </span>
                <div className='flex gap-x-6'>
                  <FaFacebook className='text-xl' />
                  <FaTwitter className='text-xl' />
                  <FaLinkedin className='text-xl' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='font-poppins pt-4 pb-5 px-4 md:pt-12 md:pb-16 md:px-24 2xl:container mx-auto'>
        <div>
          <Tabs>
            <Tab label='Description'>
              <div>
                <div className='w-11/12 mx-auto'>
                  <p className='text-base font-normal text-[#9F9F9F] mb-7'>
                    Embodying the raw, wayward spirit of rock n roll, the
                    Kilburn portable active stereo speaker takes the
                    unmistakable look and sound of Marshall, unplugs the chords,
                    and takes the show on the road.
                  </p>
                  <p className='text-base font-normal text-[#9F9F9F] mb-9'>
                    Weighing in under 7 pounds, the Kilburn is a lightweight
                    piece of vintage styled engineering. Setting the bar as one
                    of the loudest speakers in its class, the Kilburn is a
                    compact, stout-hearted hero with a well-balanced audio which
                    boasts a clear midrange and extended highs for a sound that
                    is both articulate and pronounced. The analogue knobs allow
                    you to fine tune the controls to your personal preferences
                    while the guitar-influenced leather strap enables easy and
                    stylish travel.
                  </p>
                </div>
                <div className='flex flex-col gap-y-5 md:gap-y-0 md:flex-row md:justify-center md:gap-x-8'>
                  <img
                    src={Product11}
                    height={340}
                    className='w-full md:w-1/2'
                  />
                  <img
                    src={Product12}
                    height={340}
                    className='w-full md:w-1/2'
                  />
                </div>
              </div>
            </Tab>
            <Tab label='Additional Information'>
              <h1>Tab2</h1>
            </Tab>
            <Tab label='Reviews [5]'>
              <h1>Tab3</h1>
            </Tab>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default Product;
