import { useState } from 'react';
import HeaderMenu from './HeaderMenu';
import { NavLink } from 'react-router-dom';
// import HeaderMenu from './HeaderMenu';

type menuItemType = {
  id: number;
  url: string;
  name: string;
  children?: menuItemType[];
};

const meniuItems: menuItemType[] = [
  { id: 1, url: '/', name: 'Home' },
  {
    id: 2,
    url: '/shop',
    name: 'Shop',
    children: [
      { id: 1, url: '/shop/new', name: 'New Items' },
      { id: 2, url: '/shop/popular', name: 'Popular Items' },
    ],
  },
  {
    id: 3,
    url: '/product',
    name: 'Products',
    children: [
      { id: 1, url: '/product/1', name: 'Sofa' },
      { id: 2, url: '/product/2', name: 'Dalykas' },
    ],
  },
  { id: 4, url: '/contact-us', name: 'Contact Us' },
  { id: 5, url: '/blog', name: 'Blog' },
];

type HeaderProps = {
  main?: boolean;
};

export default function Header({ main }: HeaderProps) {
  const [menuClicked, setMenuClicked] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(2);

  function handleMenuClick() {
    setMenuClicked(!menuClicked);
  }

  function handleSubmenuShow(id: number) {
    if (openSubMenu === id) {
      return setOpenSubMenu(0);
    }
    setOpenSubMenu(id);
  }
  return (
    <>
      {menuClicked && <HeaderMenu onMenuClick={handleMenuClick} />}
      {!menuClicked && (
        <header
          className={`flex z-50 relative  px-8 py-4 justify-between ${main ? 'bg-main' : ''} `}>
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
            {/* main menu items */}
            <ul className='flex items-center gap-4'>
              {meniuItems.map((mObj) => (
                <li
                  key={mObj.id}
                  className={
                    mObj.children?.length ? 'flex justify-between font-semibold' : 'font-semibold'
                  }>
                  <NavLink to={mObj.url}>{mObj.name}</NavLink>
                  {mObj.children ? (
                    <img
                      onClick={() => handleSubmenuShow(mObj.id)}
                      src='/img/header/arrow-down.svg'
                      alt='view more shop items'></img>
                  ) : null}
                  {mObj.children?.length && (
                    <ul
                      className={`submenu absolute left-0 right-0 top-full mt-4 bg-white border-2  place-items-center p-4 gap-3 
                    ${openSubMenu === mObj.id ? 'grid' : 'hidden'}`}>
                      {mObj.children?.map((subObj) => (
                        <NavLink key={subObj.id} to={subObj.url}>
                          {subObj.name}
                        </NavLink>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            {/* // main menu items */}
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
