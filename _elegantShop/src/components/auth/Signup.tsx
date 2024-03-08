import Button from '../UI/Button';
type SignupType = {
  className?: string;
};
const Signup = ({ className }: SignupType) => {
  return (
    <div className={`container ${className} bg-white pt-10 md:pt-1`}>
      <h3 className='text-4xl'>Sign up</h3>
      <p className='mt-6'>
        Already have an account?{' '}
        <a className='text-green-400 font-semibold' href='#'>
          Sign in
        </a>
      </p>
      <form className='mt-8'>
        <label className='block mt-3' htmlFor='name'>
          your name
        </label>
        <input
          className='border-b mt-1 active:border block w-full'
          type='text'
          id='name'
          name='name'
        />
        <label className='block  mt-3' htmlFor='userName'>
          Username
        </label>
        <input
          className='border-b mt-1  active:border block w-full'
          type='text'
          id='userName'
          name='userName'
        />
        <label className='block  mt-3' htmlFor='email'>
          Email address
        </label>
        <input
          className='border-b mt-1 active:border block w-full'
          type='text'
          id='email'
          name='email'
        />
        <label className='block mt-3' htmlFor='pass'>
          Password
        </label>
        <input
          className='border-b mt-1 active:border block w-full'
          type='password'
          id='pass'
          name='pass'
        />
        <div className='inline-flex items-center'>
          <input className='form-checkbox mt-3 h-5 w-5' type='checkbox' id='agree' />
          <label className='px-4' htmlFor='agree'>
            i agree with{' '}
            <a className='font-bold' href='#'>
              Privacy Policy
            </a>{' '}
            and{' '}
            <a className='font-bold' href='#'>
              Terms of Use
            </a>
          </label>
        </div>
        <Button className='my-8 w-full' type='submit'>
          Sign up
        </Button>
      </form>
    </div>
  );
};

export default Signup;
