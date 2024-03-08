import ContactForm from '../components/ContactFormST/ContactForm';
import ContactHeroST from '../components/ContactFormST/ContactHeroST';
import ContactUsCards from '../components/ContactUs/ContactUsCards';

import Header from '../components/header/Header';

function ContactUs() {
  return (
    <div>
      <Header />
      <ContactHeroST />
      <ContactUsCards />
      <ContactForm />
    </div>
  );
}

export default ContactUs;
