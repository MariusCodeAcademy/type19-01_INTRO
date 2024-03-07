import { Link } from 'react-router-dom';

export default function ContactForm() {
  return (
    <div className='container mb-5 grid md:grid-cols-2 mt-6 gap-2'>
      <div className='md:order-last'>
        <iframe
          title='Google Map'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2908.162467316678!2d2.361626541873872!3d43.20608157124712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ae2c6ae7af34b7%3A0x52e5b6d2cb68c874!2sCit%C3%A9%20de%20Carcassonne!5e0!3m2!1sfr!2sfr!4v1709798138558!5m2!1sfr!2sfr'
          allowFullScreen=''
          className='w-full h-full min-h-[311px]'
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
      <div>
        <form className='flex flex-col'>
          <div className='mb-3'>
            <label htmlFor='name' className='text-sx font-bold text-gray-500'>
              FULL NAME
            </label>
            <input type='text' className='border rounded-md px-3 py-2 mt-1 w-full placeholder-text-base' id='name' name='name' placeholder='Your Name' />
          </div>
          <div className='mb-3'>
            <label htmlFor='email' className='text-sx font-bold text-gray-500'>
              EMAIL ADDRESS
            </label>
            <input type='email' className='border rounded-md px-3 py-2 mt-1 w-full' id='email' name='email' placeholder='Your Email' />
          </div>
          <div className='mb-3'>
            <label htmlFor='message' className='text-sx font-bold text-gray-500'>
              MESSAGE
            </label>
            <textarea className='border rounded-md px-3 py-2 mt-1 w-full' id='message' name='message' placeholder='Your Message'></textarea>
          </div>
          <button type='submit' className='bg-neutral-900 hover:bg-outline text-white font-bold py-2 px-10 rounded-lg ml-auto mr-auto self-center md:ml-0'>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
