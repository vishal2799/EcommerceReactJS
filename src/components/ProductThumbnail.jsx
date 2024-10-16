/* eslint-disable react/prop-types */
const ProductThumbnail = ({ imgURL, changeBigProductImage, bigProductImg }) => {
  const handleClick = () => {
    if (bigProductImg !== imgURL.bigProduct) {
      changeBigProductImage(imgURL.bigProduct);
    }
  };
  return (
    <div
      className={`w-[70px] h-[70px] border-2 rounded-xl ${
        bigProductImg === imgURL.bigProduct
          ? 'border-black'
          : 'border-transparent'
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <img
        src={imgURL.thumbnail}
        alt='furniture colletion'
        className='w-full h-full object-contain'
      />
    </div>
  );
};

export default ProductThumbnail;
