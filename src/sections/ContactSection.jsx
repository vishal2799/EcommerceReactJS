import { useState } from 'react';
import { contact } from '../constants';
import ContactCard from '../components/Contact/ContactCard';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  return (
    <section className='font-poppins pt-24 pb-16 xl:container mx-auto max-md:pt-10 max-md:pb-8'>
      <h3 className='text-4xl font-semibold text-center'>
        Get In Touch With Us
      </h3>
      <p className='text-base font-normal text-[#9F9F9F] text-center mt-2 w-3/5 mx-auto max-md:w-11/12'>
        For More Information About Our Product & Services. Please Feel Free To
        Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
        Hesitate!
      </p>
      <div className='flex justify-between w-4/5 mx-auto mt-[14px] pt-24 max-md:flex-col max-md:gap-y-10 max-md:pt-8'>
        <div className='w-2/5 flex flex-col gap-y-10 px-12 max-md:w-11/12 max-md:px-1 mx-auto'>
          {contact.map((item, index) => (
            <ContactCard key={index} item={item} />
          ))}
        </div>
        <div className='w-2/4 px-12 max-md:w-11/12 mx-auto max-md:px-1'>
          <form>
            <div className='mb-9'>
              <label
                htmlFor='name'
                className='block text-base font-medium mb-5'
              >
                Your Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                className='border border-[#9F9F9F] rounded-lg w-full py-6 px-8'
                placeholder='Abc'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className='mb-9'>
              <label
                htmlFor='email'
                className='block text-base font-medium mb-5'
              >
                Email Address
              </label>
              <input
                type='email'
                id='email'
                name='email'
                className='border border-[#9F9F9F] rounded-lg w-full py-6 px-8'
                placeholder='Abc@test.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='mb-9'>
              <label
                htmlFor='subject'
                className='block text-base font-medium mb-5'
              >
                Subject
              </label>
              <input
                type='text'
                id='subject'
                name='subject'
                className='border border-[#9F9F9F] rounded-lg w-full py-6 px-8'
                placeholder='This is optional'
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className='mb-9'>
              <label
                htmlFor='message'
                className='block text-base font-medium mb-5'
              >
                Message
              </label>
              <textarea
                id='message'
                name='message'
                rows={4}
                className='border border-[#9F9F9F] rounded-lg w-full py-6 px-8'
                placeholder='Your Message Here...'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button
              type='submit'
              className='text-base font-normal text-white py-[14px] px-[90px] bg-yellow-600 rounded-md'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
