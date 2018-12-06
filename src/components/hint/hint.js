import React from 'react';
import styles from './styles.css';

class Hint extends React.Component {

  render () {
    const {x, y, text, icon, visibility} = this.props.params;
    const cordX=`${x}px`;
    const cordY=`${y - 50 + pageYOffset}px`;

    return (
      <div style={{top: cordY, left: cordX}} className={visibility ? styles.hint : styles.hidden}>
        <img src={icon} />
        <span><b>{text}</b></span>
      </div>
    )
  }
}

export default Hint;
