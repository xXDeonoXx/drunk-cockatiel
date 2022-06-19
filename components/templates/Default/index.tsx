import React from 'react';
import Footer from '../../organisms/Footer';
import Header from '../../organisms/Header';

interface DefaultTeampleProps {
  children?: React.ReactNode;
}

const DefaultTemplate: React.FC<DefaultTeampleProps> = ({ children }) => {
  return (
    <div className='w-full h-full bg-zinc-900 flex flex-col items-center'>
      <div className='max-w-7xl flex flex-col w-full'>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default DefaultTemplate;
