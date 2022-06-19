import React from 'react';

interface NavItemProps {
  to: string;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ label, to }) => {
  return (
    <div className='mx-2'>
      <a href={to} className={`hover:underline p-2`}>
        {label}
      </a>
    </div>
  );
};

export default NavItem;
