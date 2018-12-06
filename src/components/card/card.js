import React from 'react';
import styles from './styles.css';
import Option from '../option/option.js';
import {connect} from "react-redux";
import * as countryActions from "../../actions/country";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.setStatus = this.setStatus.bind(this);
  }
  setStatus (countryIndex, status) {
    const {setStatus} = this.props.countryActions;

    return () => {
      setStatus(countryIndex, status);
    }
  }
  render() {
    const {countryStorage} = this.props;
    const country = countryStorage.find(value => value.visible);
    const countryIndex = countryStorage.indexOf(country);
    const {status} = country;

    switch(status) {
      case 'none': {
        return (
          <div className={styles.addCountry} onClick={this.setStatus(countryIndex, 'inProcess')}>
            <i className="fas fa-plus-circle"/>
          </div>
        )
      }
      case 'inProcess': {
        return (
          <div className={styles.addCountry} onClick={this.setStatus(countryIndex, 'none')}>
            <i className="fas fa-times-circle" />
          </div>
        )
      }
      case 'replace':
      case 'hasCountry': {
        const {name, capital, language, currency} = countryStorage[countryIndex];
        const values = [name, capital, language, currency];
        const keys = ['Name', 'Capital', 'Language', 'Currency'];
        const list = keys.map((item, i) => <li key={item}><span><b>{item}:</b></span><span>{values[i]}</span></li>);

        return (
          <div className={styles.hasCountry}>
            <div className={styles.flag}>
              <img src={require(`../../images/flags/${countryStorage[countryIndex].countryCode}.svg`)} />
            </div>
            <div className={styles.content}>
              <ul>
                {list}
              </ul>
            </div>
            <div className={styles.options}>
              <Option type='edit' countryIndex={countryIndex} />
              <Option type='delete' countryIndex={countryIndex} />
            </div>
          </div>
        )
      }
    }
  }
}

export default connect(
  store => store,
  dispatch => ({
    countryActions: {
      setStatus: (countryIndex, status) => dispatch(countryActions.setStatus(countryIndex, status))
    }
  })
)(Card);
