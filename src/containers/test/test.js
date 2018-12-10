import React from 'react';
import styles from './styles.css';
import Timer from '../timer/timer';
import Question from '../question/question.js';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class Test extends React.Component {
  render () {
    const {countryStorage} = this.props;
    const time = (countryStorage.length - 1) * 15;

    return (
      <div className={styles.test} >
        <Question />
        <div>
          <Timer time={time} />
        </div>
      </div>
    );
  }
}

Test.propTypes = {
  countryStorage: PropTypes.array
};


export default connect(
  store => ({
    countryStorage: store.countryStorage
  })
)(Test);
