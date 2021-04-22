import React from 'react';
import ImgageOne from '../img/crossfit-534615_1920.jpeg';
import ImageTwo from '../img/training-828741_1920.jpeg';

const Content = () => {
  return (
    <>
      <div className="menu-card">
        <img className="h-full rounded mb-20 shadow" src={ImageTwo} alt="" />
        <div className="content-center">
          <h2 className="text-2xl mb-2">Shop</h2>
          <p className="mb-2"> Some Some Some more, more more</p>
          <span>100$</span>
        </div>
      </div>
      <div className="menu-card">
        <img className="h-full rounded mb-20 shadow" src={ImgageOne} alt="" />
        <div className="content-center">
          <h2 className="text-2xl mb-2">Shop</h2>
          <p className="mb-2"> Some Some Some more, more more</p>
          <span>100$</span>
        </div>
      </div>
    </>
  );
};

export default Content;
