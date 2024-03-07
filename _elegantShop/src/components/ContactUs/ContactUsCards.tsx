import ContactUsOneCard from './ContactUsOneCard';

function ContactUsCards() {
  return (
    <div>
      <h2 className='mb-10 font-bold text-xl text-center'>Contact Us</h2>
      <div className='mx-8 flex flex-col gap-4'>
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
