import React from 'react';
import styles from './styles.scss';
import PropTypes from 'prop-types';

class Greetings extends React.Component {
  render () {
    const {greetings} = this.props;
    const greetingsText = getTextFromHTML(greetings);
    const formatGreetings = `${greetingsText[0].toUpperCase()}${greetingsText.slice(1)}!`;

    return (
      <div className={styles.greetings}>
        {formatGreetings}
      </div>
    );
  }
}

Greetings.propTypes = {
  greetings: PropTypes.string
};

export default Greetings;

function getTextFromHTML (text) {
  const span = document.createElement('span');

  span.innerHTML = text;
  return span.textContent || span.innerText;
}
