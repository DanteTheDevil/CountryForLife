import React from 'react';
import styles from './styles.css';
import * as countryActions from '../../actions/country';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class Option extends React.Component {
  replaceCountry = () => {
    const {countryIndex, countryStorage} = this.props;
    const {setStatus} = this.props.countryActions;
    const {status} = countryStorage[countryIndex];

    switch (status) {
      case 'hasCountry': {
        setStatus(countryIndex, 'replace');
        break;
      }
      case 'replace': {
        setStatus(countryIndex, 'replace');
        break;
      }
    }
  };
  removeCountry = countryIndex => {
    return () => {
      const {remove} = this.props.countryActions;

      remove(countryIndex);
    };
  };
  render () {
    const {type, countryIndex, countryStorage} = this.props;

    switch (type) {
      case 'edit':{
        const editClass = countryStorage[countryIndex].status === 'replace' ?
          `fas fa-exchange-alt ${styles.active}` :
          `fas fa-exchange-alt ${styles.option}`;

        return <i className={editClass} onClick={this.replaceCountry}/> ;
      }
      case 'delete':{
        const editClass = `fas fa-times ${styles.option}`;

        return <i className={editClass} onClick={this.removeCountry(countryIndex)}/>;
      }
    }
  }
}

Option.propTypes = {
  countryIndex: PropTypes.number,
  countryStorage: PropTypes.array,
  countryActions: PropTypes.object,
  type: PropTypes.string
};

export default connect(
  store => store,
  dispatch => ({
    countryActions: {
      getData: (countryName, countryIndex) =>
        dispatch(countryActions.getData(countryName, countryIndex)),
      remove: countryIndex =>
        dispatch(countryActions.remove(countryIndex)),
      setStatus: (countryIndex, status) =>
        dispatch(countryActions.setStatus(countryIndex, status))
    }
  })
)(Option);
