import React from 'react';
import styles from './styles.scss';
import PropTypes from 'prop-types';

class Greetings extends React.Component {
  render () {
    const {greetings} = this.props;
    const formatGreetings = `${greetings[0].toUpperCase()}${greetings.slice(1)}!`;

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

