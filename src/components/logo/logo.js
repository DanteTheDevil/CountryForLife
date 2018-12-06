import React from 'react';
import styles from './styles.css';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={require('../../images/left_arrows.png')} alt='hello'/>
      <img src={require('../../images/logo.png')} alt='hello'/>
      <img src={require('../../images/right_arrows.png')} alt='hello'/>
    </div>
  )
};


export default Logo;
