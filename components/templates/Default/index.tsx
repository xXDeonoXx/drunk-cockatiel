import React from 'react';

interface DefaultTeampleProps {
  children?: React.ReactNode;
}

const DefaultTemplate: React.FC<DefaultTeampleProps> = ({ children }) => {
  return (
    <div className='w-full h-full bg-zinc-900 flex justify-center'>
      <div className='max-w-7xl flex flex-col w-full'>{children}</div>
    </div>
  );
};

export default DefaultTemplate;
