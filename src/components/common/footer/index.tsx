import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='LogoLayout'>
        <div className='Logo'></div>
        <div className='KatItb'>
          <li>KAT</li>
          <li>ITB</li>
          <li>2022</li>
        </div>
      </div>
      <div className='ContentLayout'>
        Footer Content
      </div>
    </div>
  );
};

export default Footer;