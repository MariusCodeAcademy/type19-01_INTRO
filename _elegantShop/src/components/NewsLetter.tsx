const NewsLetter = () => {
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
        <form className='flex justify-between text-gray-400 '>
          <img className='pr-2' src='/images/newsLetterEmail.svg' alt='' />
          <input
            className='bg-gray-200 md:bg-transparent'
            type='email'
            placeholder='Email address'
          />
          <button className='text-gray-400'>Signup</button>
        </form>
      </div>
    </div>
  );
};
export default NewsLetter;
