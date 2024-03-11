import { Formik, Form, Field, FormikHelpers } from 'formik';

interface FormData {
  email: string;
}

const validate = (values: FormData) => {
  const errors: Partial<FormData> = {};
  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

const NewsLetter = () => {
  const initialValues: FormData = { email: '' };

  const handleSubmit = (values: FormData, actions: FormikHelpers<FormData>) => {
    // Handle form submission here
    console.log(values);
    actions.resetForm(); // Išvalyti formą
    actions.setSubmitting(false);
  };

  return (
    <div className='bg-gray-200 bg-cover flex flex-col items-center justify-center flex-shrink-0 md:bg-[url(/images/newsletterBg.jpg)]'>
      <div className='px-8 pl-8'>
        <h1 className='font-medium pt-20 pb-2 text-[32px] text-center'>
          Join Our Newsletter
        </h1>
        <p className='text-center text-sm'>
          Sign up for deals, new products and promotions
        </p>
      </div>
      <div className='pt-8 pb-20'>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validate={validate}
        >
          {({ errors, isSubmitting }) => (
            <Form className='flex flex-col md:flex-row items-center justify-center text-gray-400'>
              {isSubmitting && <h1>Loading...</h1>}
              <div className='flex items-center'>
                <img
                  className='pr-2'
                  src='/images/newsLetterEmail.svg'
                  alt=''
                />
                <Field
                  className='bg-gray-200 md:bg-transparent'
                  type='email'
                  name='email'
                  placeholder='Email address'
                />
                <button type='submit' className='text-gray-400 ml-2'>
                  Signup
                </button>
              </div>
              {errors.email && (
                <div className='text-red-500'>{errors.email}</div>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default NewsLetter;
