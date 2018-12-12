import React from 'react';
import styles from './styles.scss';

class Logo extends React.Component {
  render () {
    return (
      <div className={styles.logo}>
        <img src={'./images/left_arrows.png'} />
        <img src={'./images/logo.png'} />
        <img src={'./images/right_arrows.png'} />
      </div>
    );
  }
}


export default Logo;
