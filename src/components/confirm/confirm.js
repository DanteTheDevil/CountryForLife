import React from 'react';
import styles from './styles.css';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import * as resultActions from '../../actions/result';
import * as countryActions from '../../actions/country';
import * as pageActions from '../../actions/page';

class Confirm extends React.Component {
  constructor(props) {
    super(props);
    this.redirect = {
      'intro': '/',
      '/': '/countries',
      '/countries': '/test',
      '/test': '/result',
      '/result': '/countries'
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    const {type, countryStorage, resultActions, countryActions} = this.props;
    const {getData, removeAll: resultRemoveAll} = resultActions;
    const {setVisible, removeAll: countryRemoveAll} = countryActions;
    const {changeLocation} = pageActions;
    const countryIndex = countryStorage.findIndex(item => item.visible);

    changeLocation(this.redirect[type]);
    switch(type) {
      case '/countries': {
        setVisible(countryIndex, 0);
        getData(countryStorage);
        break;
      }
      case '/result': {
        countryRemoveAll();
        resultRemoveAll();
        break;
      }
    }
  }
  render () {
    const {type, text} = this.props;


    return (
      <Link to={this.redirect[type]} className={styles.confirm} onClick={this.onClick}>
        <b>{text}</b>
      </Link>
    )
  }
}

export default connect(
  store => store,
  dispatch => ({
    resultActions: {
      getData: countries => dispatch(resultActions.getData(countries)),
      removeAll: () => dispatch(resultActions.removeAll())
    },
    countryActions: {
      setVisible: (currentIndex, nextIndex) => dispatch(countryActions.setVisible(currentIndex, nextIndex)),
      removeAll: () => dispatch(countryActions.removeAll())
    },
    pageActions: {
      changeLocation: location => dispatch(pageActions.changeLocation(location))
    }
  })
)(Confirm);

