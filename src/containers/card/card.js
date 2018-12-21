import React from 'react';
import styles from './styles.scss';
import Option from '../option/option.js';
import { connect } from 'react-redux';
import * as countryActions from '../../actions/country';
import PropTypes from 'prop-types';

class Card extends React.Component {
  setStatus = (countryIndex, status) => {
    const {setStatus} = this.props.countryActions;

    return () => {
      setStatus(countryIndex, status);
    };
  };
  render () {
    const {countryStorage} = this.props;
    const countryIndex = countryStorage.findIndex(item => item.visible);
    const {status} = countryStorage[countryIndex];

    switch (status) {
      case 'none': {
        return (
          <div className={styles.addCountry} >
            <i className="fas fa-plus-circle" onClick={this.setStatus(countryIndex, 'add')}/>
          </div>
        );
      }
      case 'add': {
        return (
          <div className={styles.addCountry} >
            <i className="fas fa-times-circle" onClick={this.setStatus(countryIndex, 'none')}/>
          </div>
        );
      }
      case 'loading_add':
      case 'loading_replace': {
        return (
          <div className={styles.loadingCountry} >
            <div className={styles.spinner}/>
          </div>
        );
      }
      case 'replace':
      case 'hasCountry': {
        const {name, capital, language, currency} = countryStorage[countryIndex];
        const values = [name, capital, language, currency];
        const keys = ['Name', 'Capital', 'Language', 'Currency'];
        const list = keys.map((item, i) =>
          <li key={item}>
            <span><b>{item}:</b></span><div>{values[i]}</div>
          </li>);
        const {countryCode} = countryStorage[countryIndex];

        return (
          <div className={styles.hasCountry}>
            <div className={styles.flag}>
              <img src={`./images/flags/${countryCode}.svg`} />
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
        );
      }
    }
  }
}

Card.propTypes = {
  countryStorage: PropTypes.array,
  countryActions: PropTypes.object,
  setStatus: PropTypes.func
};

const mapStateToProps = store => {
  return store;
};

const mapDispatchToProps = dispatch => {
  return {
    countryActions: {
      setStatus: (countryIndex, status) => dispatch(countryActions.setStatus(countryIndex, status))
    }
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(Card);
