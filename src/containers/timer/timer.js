import React from 'react';
import styles from './styles.css';
import {connect} from 'react-redux';
import * as resultActions from '../../actions/result';
import {withRouter} from 'react-router-dom';
import * as pageActions from '../../actions/page';
import PropTypes from 'prop-types';

class Timer extends React.Component {
  constructor (props) {
    super(props);
    this.timer = null;
    this.state = {
      count: props.time
    };
  }
  componentDidMount () {
    this.timer = setInterval(() => {
      this.setState({count: this.state.count - 1});
      if (!this.state.count) {
        const {resultStorage, resultActions, pageActions, history} = this.props;
        const {updateData} = resultActions;
        const {changeLocation} = pageActions;
        const unPassed = resultStorage.filter(item => !item.passed);

        unPassed.forEach(item => updateData({
          countryCode: item.countryCode,
          name: '',
          capital: '',
          language: '',
          currency: ''
        }));
        changeLocation('/result');
        history.push('/result');
      }
    }, 1000);
  }
  componentWillUnmount () {
    clearInterval(this.timer);
  }
  render () {
    const {count} = this.state;
    const minutes = Math.trunc(count / 60);
    const formatMinutes = minutes > 9 ? minutes : `0${minutes}`;
    const seconds = count % 60;
    const formatSeconds = seconds > 9 ? seconds : `0${seconds}`;
    const timer = `${formatMinutes}:${formatSeconds}`;

    return (
      <div className={styles.timer}>
        <i className="far fa-clock" />
        <span><b>{timer}</b></span>
      </div>
    );
  }
}

Timer.propTypes = {
  resultStorage: PropTypes.array,
  resultActions: PropTypes.object,
  pageActions: PropTypes.object,
  history: PropTypes.object,
  time: PropTypes.number
};

export default withRouter(connect(
  store => ({
    resultStorage: store.resultStorage
  }),
  dispatch => ({
    resultActions: {
      updateData: data => dispatch(resultActions.updateData(data))
    },
    pageActions: {
      changeLocation: location => dispatch(pageActions.changeLocation(location))
    }
  })
)(Timer));
