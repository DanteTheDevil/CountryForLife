import React from 'react';
import styles from './styles.css';
import Confirm from '../../containers/confirm/confirm.js';

class Intro extends React.Component {
  render () {
    return (
      <div className={styles.intro} >
        <div className={styles.logo}>
          <i className="fas fa-question" />
        </div>
        <div className={styles.content}>
            This app give you a possibility to check general info and prove your knowledge
            about different countries. Guide:
          <ol>
            <li>Open the country card<i className='fas fa-plus-circle'/>.</li>
            <li>Move mouse to the map and choose country <i className='far fa-flag'/>.</li>
            <li>Each card has options, which allow you to replace
              <i className='fas fa-exchange-alt' /> or delete <i className="fas fa-times" />
              a country from the list.</li>
            <li>To see previous or next country use <i className='fas fa-caret-left' />
              and <i className='fas fa-caret-right' /> .</li>
            <li>To add more countries use next country button <i className='fas fa-caret-right' />
              to find an empty card form and repeat 1 and 2 steps.</li>
          </ol>
        </div>
        <Confirm type={'/intro'} text={'UNDERSTOOD'}/>
      </div>
    );
  }
}

export default Intro;
