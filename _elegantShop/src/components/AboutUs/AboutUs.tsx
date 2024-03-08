import { NavLink } from 'react-router-dom';

export default function AboutUs() {
  return (
    <div className=' mx-8 grid grid-cols-1 md:grid-cols-2'>
      <img src='/Contact us img.png' alt='contact us img' />
      <div className='bg-slate-100 px-4 pb-16'>
        <h3 className='pt-16 text-xl pb-4 font-semibold'>About Us</h3>
        <p className='mb-6 font-normal'>
          3legant is a gift & decorations store based in HCMC, Vietnam. Est since 2019. Our customer service
          is always prepared to support you 24/7
        </p>
        <NavLink className={'pt-16 text-xl font-semibold'} to={'/'}>
          Shop Now -&gt;
        </NavLink>
      </div>
    </div>
  );
}
