import AboutUs from '../components/AboutUs/AboutUs';
import ContactForm from '../components/ContactFormST/ContactForm';
import ContactUsCards from '../components/ContactUs/ContactUsCards';

import Header from '../components/header/Header';

function ContactUs() {
  return (
    <div>
      <Header />

      <AboutUs />
      <ContactUsCards />
      <ContactForm />
    </div>
  );
}

export default ContactUs;
