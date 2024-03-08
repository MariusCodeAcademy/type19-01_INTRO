import { Link } from 'react-router-dom';

export default function ContactHeroST() {
  return (
    <div className='container'>
      <div className='flex gap-3 align-items-center mt-4 mb-12'>
        <p className='text-stone-600 text-sm font-medium'>
          <Link to={'/'}>Home {'>'}</Link>
        </p>
        <p className='text-neutral-900 text-sm font-medium'>Contact Us</p>
      </div>
      <div className='max-w-[450px] sm:max-w-[660px]'>
        <h2 className='text-neutral-900 text-4xl font-medium sm:text-5xl'>We believe in sustainable decor. We're passionate about life at home.</h2>
        <p className='mt-6 mb-10'>
          Our features timeless furniture, with natural fabrics, curved lines, plenty of mirrors and classic design, which can be incorporated into any decor
          project. The pieces enchant for their sobriety, to last for generation, faithful to the shapes of each period, with a touch of the present.
        </p>
      </div>
    </div>
  );
}
