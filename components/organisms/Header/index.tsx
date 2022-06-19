import React from 'react';
import NavItem from '../../atoms/NavItem';

const Header = () => {
  return (
    <div className='w-full h-24 bg-zinc-800 text-white px-16 flex justify-between'>
      <div className=' h-full w-24 border overflow-hidden rounded-full'>
        <img
          src='https://lafeber.com/pet-birds/wp-content/uploads/2018/07/transparent-cockatiel.png'
          alt=''
          className='object-fill'
        />
      </div>
      <div className='flex h-full items-center'>
        <NavItem to={'#'} label={'Home'} />
        <NavItem to={'#'} label={'Recipes'} />
        <NavItem to={'#'} label={'About'} />
        <NavItem to={'#'} label={'Contact Us'} />
      </div>
    </div>
  );
};

export default Header;
