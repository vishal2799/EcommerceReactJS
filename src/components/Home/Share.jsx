const Share = () => {
  return (
    <section className='font-poppins pt-16 pb-12 xl:container mx-auto'>
      <div className='text-center'>
        <h6 className='text-xl font-semibold text-[#616161] mb-2'>
          Share your setup with
        </h6>
        <h3 className='text-[40px] font-bold text-[#3A3A3A]'>
          #FuniroFurniture
        </h3>
      </div>
      <div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4'>
          <div className='grid grid-rows-2 grid-cols-2 gap-4'>
            <div>
              <img
                className='h-auto max-w-full rounded-lg object-cover'
                src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg'
                alt='image-1'
              />
            </div>
            <div>
              <img
                className='h-auto max-w-full rounded-lg object-cover'
                src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg'
                alt='image-2'
              />
            </div>
            <div>
              <img
                className='h-auto max-w-full rounded-lg object-cover'
                src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg'
                alt='image-3'
              />
            </div>
            <div>
              <img
                className='h-auto max-w-full rounded-lg object-cover'
                src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg'
                alt='image-4'
              />
            </div>
          </div>

          <div className='flex items-center justify-center'>
            <img
              className='h-[50vh] w-full rounded-lg object-cover'
              src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg'
              alt='image-5'
            />
          </div>

          <div className='grid grid-rows-2 grid-cols-2 gap-4'>
            <div>
              <img
                className='h-auto max-w-full rounded-lg object-cover'
                src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg'
                alt='image-6'
              />
            </div>
            <div>
              <img
                className='h-auto max-w-full rounded-lg object-cover'
                src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg'
                alt='image-7'
              />
            </div>
            <div>
              <img
                className='h-auto max-w-full rounded-lg object-cover'
                src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg'
                alt='image-8'
              />
            </div>
            <div>
              <img
                className='h-auto max-w-full rounded-lg object-cover'
                src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg'
                alt='image-9'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Share;
