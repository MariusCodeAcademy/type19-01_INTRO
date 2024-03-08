import ContactUsOneCard from './ContactUsOneCard';

function ContactUsCards() {
  return (
    <div>
      <h2 className='mb-10 font-bold text-xl text-center md:text-5xl'>
        Contact Us
      </h2>
      <div className='mx-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6'>
        <ContactUsOneCard
          src='/images/store 01.svg'
          alt='Parduotuve'
          title='Address'
          bottomText='234 Hai Trieu, Ho Chi Minh City, Viet Nam'
        />
        <ContactUsOneCard
          src='/images/call.svg'
          alt='Telefonas'
          title='Contact us'
          bottomText='+84 234 567 890'
        />
        <ContactUsOneCard
          src='/images/mail.svg'
          alt='Elektroninis pastas'
          title='Email'
          bottomText='hello@3legant.com'
        />
      </div>
    </div>
  );
}

export default ContactUsCards;
