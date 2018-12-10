import React from 'react';
import styles from './styles.css';
import PropTypes from 'prop-types';

class Hint extends React.Component {
  render () {
    const {x, y, text, icon, visibility} = this.props.params;
    const cordX = `${x}px`;
    const cordY = `${y - 50 + pageYOffset}px`;

    if (icon !== 'none') {
      return (
        <div style={{top: cordY, left: cordX}} className={visibility ? styles.hint : styles.hidden}>
          <img src={icon} alt={''}/>
          <div><b>{text}</b></div>
        </div>
      );
    }
  }
}

Hint.propTypes = {
  params: PropTypes.object,
  x: PropTypes.number,
  y: PropTypes.number,
  text: PropTypes.string,
  icon: PropTypes.string,
  visibility: PropTypes.bool
};
export default Hint;
