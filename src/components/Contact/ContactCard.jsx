/* eslint-disable react/prop-types */

const ContactCard = ({ item }) => {
  return (
    <div className='flex items-baseline gap-x-[30px]'>
      {<item.icon className='text-[23px] text-black' />}
      <div>
        <h3 className='text-2xl font-medium'>{item.label}</h3>
        <p className='text-base font-normal'>{item.description}</p>
      </div>
    </div>
  );
};

export default ContactCard;
