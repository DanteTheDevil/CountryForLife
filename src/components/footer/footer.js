import React from 'react';
import styles from './styles.scss';

class Footer extends React.Component {
  render () {
    return (
      <div className={styles.footer}>
        <a href={'https://github.com/DanteTheDevil/CountryForLife'}>
          <i className={`fab fa-github ${styles.icon}`} />
        </a>
      </div>
    );
  }
}

export default Footer;
