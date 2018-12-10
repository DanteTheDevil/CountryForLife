import React from 'react';
import styles from './styles.css';
import {connect} from 'react-redux';
import * as countryActions from '../../actions/country.js';
import PropTypes from 'prop-types';

class Arrow extends React.Component {
  nextCountry = () => {
    const {countryStorage, direction, type, countryActions} = this.props;
    const {setVisible, setStatus} = countryActions;
    const currentIndex = countryStorage.findIndex(value => value.visible);
    const {status} = countryStorage[currentIndex];

    switch (status) {
      case 'inProcess': {
        setStatus(currentIndex, 'none');
        break;
      }
      case 'replace': {
        setStatus(currentIndex, 'hasCountry');
        break;
      }
    }
    if (direction === 'left') {
      if (countryStorage[currentIndex - 1]) {
        setVisible(currentIndex, currentIndex - 1);
      }
    } else if (direction === 'right') {
      if (type === 'result' && currentIndex + 1 === countryStorage.length - 1){
        return;
      }
      if (countryStorage[currentIndex + 1]) {
        setVisible(currentIndex, currentIndex + 1);
      }
    }
  };
  render () {
    const {direction, type} = this.props;
    const className = `fas fa-caret-${direction}`;
    const arrow = <i className={className} onClick={this.nextCountry}/>;

    switch (type) {
      case 'countries': return <div className={styles.countries}>{arrow}</div>;
      case 'result': return <div className={styles.result}>{arrow}</div>;
    }
  }
}

Arrow.propTypes = {
  countryStorage: PropTypes.array,
  direction: PropTypes.string,
  type: PropTypes.string,
  countryActions: PropTypes.object
};

export default connect(
  store => store,
  dispatch => ({
    countryActions: {
      setVisible: (currentIndex, nextIndex) =>
        dispatch(countryActions.setVisible(currentIndex, nextIndex)),
      setStatus: (countryIndex, status) => dispatch(countryActions.setStatus(countryIndex, status))
    }
  })
)(Arrow);
