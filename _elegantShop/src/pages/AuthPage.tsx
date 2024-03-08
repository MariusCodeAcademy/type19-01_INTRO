import Signup from '../components/auth/Signup';

const AuthPage = () => {
  return (
    <div className='w-screen min-h-screen bg-gradient-to-r from-gray-100 from-50% to-white to-50% overflow-hidden'>
      <div className='grid max-w-7xl grid-cols-1 mx-auto md:grid-cols-2 items-center '>
        <div className='relative '>
          <h6 className='absolute top-3 left-1/2 -translate-x-1/2 font-bold'>
            3legant<span className='text-[#6c7275] font-bold'>.</span>
          </h6>
          <img className='' src='/img/auth/auth.jpg' alt='Authentication' />
        </div>
        <Signup className='md:pl-20' />
      </div>
    </div>
  );
};

export default AuthPage;
