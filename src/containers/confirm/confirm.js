import React from 'react';
import styles from './styles.scss';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as resultActions from '../../actions/result';
import * as countryActions from '../../actions/country';
import * as pageActions from '../../actions/page';
import PropTypes from 'prop-types';

class Confirm extends React.Component {
  constructor (props) {
    super(props);
    this.redirect = {
      'intro': '/intro',
      '/intro': '/countries',
      '/countries': '/test',
      '/test': '/result',
      '/result': '/countries'
    };
  }
  onClick = () => {
    const {type, countryStorage, resultActions, countryActions, pageActions, history} = this.props;
    const {getData, removeAll: resultRemoveAll} = resultActions;
    const {setVisible, setStatus, removeAll: countryRemoveAll} = countryActions;
    const {changeLocation} = pageActions;
    const countryIndex = countryStorage.findIndex(item => item.visible);

    changeLocation(this.redirect[type]);
    switch (type) {
      case '/countries': {
        if (countryStorage.length === 1) {
          changeLocation(type);
          history.push(type);
          break;
        }
        setVisible(countryIndex, 0);
        setStatus(countryIndex, 'hasCountry');
        getData(countryStorage);
        break;
      }
      case '/result': {
        countryRemoveAll();
        resultRemoveAll();
        break;
      }
    }
  };
  render () {
    const {type, text} = this.props;

    return (
      <Link to={this.redirect[type]} className={styles.confirm} onClick={this.onClick}>
        <b>{text}</b>
      </Link>
    );
  }
}

Confirm.propTypes = {
  type: PropTypes.string,
  countryStorage: PropTypes.array,
  resultActions: PropTypes.object,
  countryActions: PropTypes.object,
  pageActions: PropTypes.object,
  history: PropTypes.object,
  text: PropTypes.string
};

const mapStateToProps = store => {
  return store;
};

const mapDispatchToProps = dispatch => {
  return {
    resultActions: {
      getData: countries =>
        dispatch(resultActions.getData(countries)),
      removeAll: () =>
        dispatch(resultActions.removeAll())
    },
    countryActions: {
      setVisible: (currentIndex, nextIndex) =>
        dispatch(countryActions.setVisible(currentIndex, nextIndex)),
      removeAll: () =>
        dispatch(countryActions.removeAll()),
      setStatus: (countryIndex, status) =>
        dispatch(countryActions.setStatus(countryIndex, status))
    },
    pageActions: {
      changeLocation: location =>
        dispatch(pageActions.changeLocation(location))
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Confirm));

