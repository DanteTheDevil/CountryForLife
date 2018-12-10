import React from 'react';
import styles from './styles.css';

class Logo extends React.Component {
  render () {
    return (
      <div className={styles.logo}>
        <img src={'./src/images/left_arrows.png'} />
        <img src={'./src/images/logo.png'} />
        <img src={'./src/images/right_arrows.png'} />
      </div>
    );
  }
}


export default Logo;
