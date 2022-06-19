import React from 'react';

const Banner = () => {
  return (
    <div
      className='w-full h-[35rem]'
      style={{
        backgroundImage: `url("/images/bartender-making-delicious-refreshing-cocktail.jpeg")`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
      }}
    >
      <div className='bg-black bg-opacity-60 w-full h-full flex justify-center items-center'>
        <h1 className='text-yellow-500 text-5xl uppercase font-sans'>
          The Drunk Cockatiel
        </h1>
      </div>
    </div>
  );
};

export default Banner;
