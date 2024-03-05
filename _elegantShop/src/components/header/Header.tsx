import { useState } from 'react';
// import HeaderMenu from './HeaderMenu';

export default function Header() {
  const [menuClicked, setMenuClicked] = useState(false);

  function handleMenuClick() {
    setMenuClicked(!menuClicked);
  }
  // sm:w-32
  return (
    <header className='flex  px-8 py-4 justify-between bg-[rgba(255,170,0,0.64)]'>
      <div className='flex '>
        <img
          onClick={handleMenuClick}
          src='/img/header/menu-line-horizontal.png'
          className='sm:hidden'
          alt='menu'
        />
        <p className='font-semibold sm:text-2xl'>
          3legant<span className='text-[#6C7275]'>.</span>
        </p>
      </div>
      <div id='hiddenOnSmall' className='md:flex hidden sm:flex'>
        <ul className='flex items-center gap-4'>
          <li className='  font-semibold'>Home</li>
          <li className='  font-semibold flex justify-between'>
            Shop <img src='/img/header/arrow-down.svg' alt='view more shop items'></img>
          </li>
          <li className='  font-semibold flex justify-between'>
            Product <img src='/img/header/arrow-down.svg' alt='view more shop items'></img>
          </li>
          <li className='  font-semibold'>Constact Us</li>
        </ul>
      </div>
      <div className='flex gap-1'>
        <img src='/img/header/shoppingbag.svg' alt='shopping cart' />
        <img src='/img/header/Frame.svg' alt='shopping cart count' />
      </div>
    </header>
  );
}
