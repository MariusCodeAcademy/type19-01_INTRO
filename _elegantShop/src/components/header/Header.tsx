import { useState } from 'react';
import HeaderMenu from './HeaderMenu';
import { NavLink } from 'react-router-dom';
// import HeaderMenu from './HeaderMenu';

export default function Header() {
  const [menuClicked, setMenuClicked] = useState(false);

  function handleMenuClick() {
    setMenuClicked(!menuClicked);
  }
  return (
    <>
      {menuClicked && <HeaderMenu onMenuClick={handleMenuClick} />}
      {!menuClicked && (
        <header className='flex z-50 relative  px-8 py-4 justify-between bg-main'>
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
              <li className='  font-semibold'>
                <NavLink to={'/'}>Home</NavLink>
              </li>
              <li className='  font-semibold flex justify-between'>
                Shop <img src='/img/header/arrow-down.svg' alt='view more shop items'></img>
              </li>
              <li className='  '>
                <NavLink to={'/shop/1'} className='font-semibold flex justify-between'>
                  Product <img src='/img/header/arrow-down.svg' alt='view more shop items'></img>
                </NavLink>
              </li>
              <li className='  font-semibold'>
                <NavLink to={'/contact-us'}>Contact Us</NavLink>
              </li>
            </ul>
          </div>
          <div className='flex gap-1'>
            <img src='/img/header/shoppingbag.svg' alt='shopping cart' />
            <img src='/img/header/Frame.svg' alt='shopping cart count' />
          </div>
        </header>
      )}
    </>
  );
}
