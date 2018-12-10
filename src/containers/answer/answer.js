import React from 'react';
import styles from './styles.css';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class Answer extends React.Component {
  render () {
    const {type, countryStorage, resultStorage} = this.props;
    const countryIndex = countryStorage.findIndex(item => item.visible);
    const flag = countryStorage[countryIndex].countryCode;
    const keys = ['Name', 'Capital', 'Language', 'Currency'];
    const {name: cName, capital: cCapital, language: cLanguage, currency: cCurrency} =
      countryStorage[countryIndex];
    const {name: rName, capital: rCapital, language: rLanguage, currency: rCurrency} =
      resultStorage[countryIndex];
    const countryValues = [cName, cCapital, cLanguage, cCurrency];
    const resultValues = [rName, rCapital, rLanguage, rCurrency];
    const list = type === 'original' ?
      keys.map((item, i) =>
        <li key={item}>
          <span><b>{item}:</b></span><div>{countryValues[i]}</div>
        </li>) :
      keys.map((item, i) => {
        const correctIcon = resultValues[i] === countryValues[i] ?
          <i className="fas fa-check" style={{color: '#00e700'}}/> :
          <i className="fas fa-times" style={{color: '#e60000'}}/>;

        return <li key={item}>
          <span><b>{item}:</b></span><div>{resultValues[i]} {correctIcon}</div>
        </li>;
      });

    return (
      <div className={styles.answer}>
        <div className={styles.flag}>
          <img src={`./src/images/flags/${flag}.svg`} />
        </div>
        <div className={styles.content}>
          <ul>
            {list}
          </ul>
        </div>
        <span className={styles.type}><b>{type.toUpperCase()}</b></span>
      </div>
    );
  }
}

Answer.propTypes = {
  type: PropTypes.string,
  countryStorage: PropTypes.array,
  resultStorage: PropTypes.array
};

export default connect(
  store => store
)(Answer);


