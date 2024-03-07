export default function HeaderMenu({ onMenuClick = () => {} }) {
  return (
    <div className='p-6'>
      <div className='flex justify-between'>
        <p className='font-semibold'>3legant.</p>
        <img src='/img/header/Line.svg' onClick={onMenuClick} className='text-black' alt='' />
      </div>
      <div className='relative mt-3'>
        <img
          src='/img/header/search.svg'
          alt='search'
          className='pl-3 top-1/2 -translate-y-1/2 absolute'
        />
        <input
          type='text'
          className='bg-transparent w-full border border-black pl-11
           px-3 py-2 rounded-md text-sm leading-6 '
          placeholder='Search'
        />
      </div>
      <div className=''>
        <ul>
          <li className='border-b py-3 font-semibold'>Home</li>
          <li className='border-b py-3 font-semibold flex justify-between'>
            Shop <img src='/img/header/arrow-down.svg' alt='view more shop items'></img>
          </li>
          <li className='border-b py-3 font-semibold flex justify-between'>
            Product <img src='/img/header/arrow-down.svg' alt='view more shop items'></img>
          </li>
          <li className='border-b py-3 font-semibold'>Constact Us</li>
        </ul>
      </div>
      <div className='mt-56'>
        <ul className='pb-7'>
          <li className=' text-[#6c7275] font-semibold border-b py-3 flex justify-between'>
            Cart <img src='/img/header/shoppingbag.svg' alt='view more shop items'></img>
          </li>
          <li className='text-[#6c7275] font-semibold border-b py-3 flex justify-between'>
            Whishlist <img src='/img/header/heart.svg' alt='view more shop items'></img>
          </li>
        </ul>
        <button className='w-full border rounded-md bg-[#232627] py-4 text-white' type='button'>
          Sign In
        </button>
        <ul className='flex gap-3 pt-4'>
          <li>
            <img src='/img/header/instagram.svg' alt='instagram' />
          </li>
          <li>
            <img src='/img/header/facebook.svg' alt='facebook' />
          </li>
          <li>
            <img src='/img/header/youtube.svg' alt='youtube' />
          </li>
        </ul>
      </div>
    </div>
  );
}
