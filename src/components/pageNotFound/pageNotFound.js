import React from 'react';
import styles from './styles.css';

class pageNotFound extends React.Component {
  render () {
    return (
      <div className={styles.pageNotFound}>
        <div className={styles.errorCode}>
          <b>404</b>
        </div>
        <div className={styles.errorText}>
          <span><b>PAGE</b></span>
          <span><b>NOT</b></span>
          <span><b>FOUND</b></span>
        </div>
      </div>
    );
  }
}

export default pageNotFound;
