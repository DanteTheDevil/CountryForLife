import React from 'react';
import styles from './styles.css';
import {connect} from 'react-redux';
import * as countryActions from '../../actions/country.js';

class Arrow extends React.Component {
  constructor(props) {
    super(props);
    this.nextCountry = this.nextCountry.bind(this);
  }
  nextCountry() {
    const {countryStorage, direction, type, countryActions} = this.props;
    const {setVisible, setStatus} = countryActions;
    const currentIndex = countryStorage.findIndex(value => value.visible);
    const {status} = countryStorage[currentIndex];

    switch(status) {
      case 'inProcess': {
        setStatus(currentIndex, 'none');
        break;
      }
      case 'replace': {
        setStatus(currentIndex, 'hasCountry');
        break;
      }
    }
    switch(direction) {
      case 'left': return countryStorage[currentIndex - 1] ? setVisible(currentIndex, currentIndex - 1) : false;
      case 'right': {
        if(type === 'result' && currentIndex + 1 === countryStorage.length - 1) return;

        return countryStorage[currentIndex + 1] ? setVisible(currentIndex, currentIndex + 1) : false;
      }
    }
  }
  render () {
    const {direction, type} = this.props;
    const className = `fas fa-caret-${direction}`;
    const arrow = <i className={className} onClick={this.nextCountry}/>;

    switch(type) {
      case 'countries': return <div className={styles.countries}>{arrow}</div>;
      case 'result': return <div className={styles.result}>{arrow}</div>;
    }
  }
}

export default connect(
  store => store,
  dispatch => ({
    countryActions: {
      setVisible: (currentIndex, nextIndex) => dispatch(countryActions.setVisible(currentIndex, nextIndex)),
      setStatus: (countryIndex, status) => dispatch(countryActions.setStatus(countryIndex, status))
    }
  })
)(Arrow);
