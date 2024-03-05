import { useState } from 'react';
import HeaderMenu from './HeaderMenu';

export default function Header() {
  const [menuClicked, setMenuClicked] = useState(false);

  function handleMenuClick() {
    setMenuClicked(!menuClicked);
  }

  return menuClicked ? (
    <HeaderMenu onMenuClick={handleMenuClick} />
  ) : (
    <header className='flex px-8 py-4 justify-between bg-[rgba(255,170,0,0.64)]'>
      <div className='flex '>
        <img onClick={handleMenuClick} src='/img/header/menu-line-horizontal.png' alt='menu' />
        <p className='font-semibold'>
          3legant<span className='text-[#6C7275]'>.</span>
        </p>
      </div>
      <div className='flex gap-1'>
        <img src='/img/header/shoppingbag.svg' alt='shopping cart' />
        <img src='/img/header/Frame.svg' alt='shopping cart count' />
      </div>
    </header>
  );
}
