import React from 'react';
import styles from './styles.css';
import * as countryActions from "../../actions/country";
import {connect} from "react-redux";

class Option extends React.Component {
  constructor(props){
    super(props);
    this.replaceCountry = this.replaceCountry.bind(this);
    this.removeCountry = this.removeCountry.bind(this);
  }
  replaceCountry () {
    const {countryIndex, countryStorage} = this.props;
    const {setStatus} = this.props.countryActions;
    const {status} = countryStorage[countryIndex];

    switch(status) {
      case 'hasCountry': return setStatus(countryIndex, 'replace');
      case 'replace': return setStatus(countryIndex, 'hasCountry');
    }
  }
  removeCountry (countryIndex) {
    return () => {
      const {deleteCountry} = this.props.countryActions;

      deleteCountry(countryIndex);
    }
  }
  render () {
    const {type, countryIndex, countryStorage} = this.props;

    switch(type) {
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

export default connect(
  store => store,
  dispatch => ({
    countryActions: {
      getData: (countryName, countryIndex) => dispatch(countryActions.getData(countryName, countryIndex)),
      remove: (countryIndex) => dispatch(countryActions.remove(countryIndex)),
      setStatus: (countryIndex, status) => dispatch(countryActions.setStatus(countryIndex, status))
    }
  })
)(Option);
