import React from 'react';
import styles from './styles.scss';
import Confirm from '../../containers/confirm/confirm.js';
import Answer from '../../containers/answer/answer.js';
import Arrow from '../../containers/arrow/arrow.js';

class Result extends React.Component {
  render () {
    return (
      <div className={styles.result} >
        <div className={styles.answers}>
          <Answer type={'original'}/>
          <Answer type={'answer'}/>
        </div>
        <div className={styles.options} >
          <Arrow direction={'left'} type={'result'}/>
          <Confirm type={'/result'} text={'TRY NEW'}/>
          <Arrow direction={'right'} type={'result'}/>
        </div>
      </div>
    );
  }
}

export default Result;
