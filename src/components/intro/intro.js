import React from 'react';
import styles from './styles.css';
import Confirm from '../confirm/confirm.js';

class Intro extends React.Component {
  render () {
    return (
      <div className={styles.intro} >
        <div className={styles.logo}>
          <i className="fas fa-question" />
        </div>
        <div className={styles.content}>
          <span>
            This app give you a possibility to check general info and prove your knowledge
            about different countries of Europe. To start the test follow the steps bellow:
          </span>
          <ol>
            <li>Open the card to import country <i className='fas fa-plus-circle'/>.</li>
            <li>Move mouse to the map and choose one <i className='far fa-flag'/>.</li>
            <li>Each card has options, which allow you to replace <i className='fas fa-exchange-alt' /> or
              delete <i className="fas fa-times" /> a country from the list.</li>
            <li>To see previous or next country use a propriate
              buttons <i className='fas fa-caret-left' /> and <i className='fas fa-caret-right' /> .</li>
            <li>If you want to add more countries, just use next country button <i className='fas fa-caret-right' /> to
              find an empty card form and then open it to add one more country.</li>
            <li>When you formed a list click - 'START TEST' to begin a test.</li>
          </ol>
        </div>
        <Confirm type={'/'} text={'UNDERSTOOD'}/>
      </div>
    )
  }
}

export default Intro;
