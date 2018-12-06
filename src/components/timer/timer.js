import React from 'react';
import styles from './styles.css';
import {connect} from 'react-redux';
import * as resultActions from '../../actions/result';
import {withRouter} from 'react-router-dom';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.timer = null;
    this.state = {
      count: props.time
    };
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({count: this.state.count - 1});
      if(!this.state.count) {
        const {resultStorage, resultActions} = this.props;
        const {updateData} = resultActions;
        const unPassed = resultStorage.filter(item => !item.passed);
        const {history} = this.props;

        for(let item of unPassed) {
          updateData({
            countryCode: item.countryCode,
            name: '',
            capital: '',
            language: '',
            currency: ''
          });
        }
        history.push('/result');
      }
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render () {
    const {count} = this.state;
    const minutes = Math.trunc(count/60) > 9 ? Math.trunc(count/60) : `0${Math.trunc(count/60)}`;
    const seconds = count % 60 > 9 ? count % 60 : `0${count % 60}`;
    const timer = `${minutes}:${seconds}`;

    return (
      <div className={styles.timer}>
        <i className="far fa-clock" />
        <span><b>{timer}</b></span>
      </div>
    )
  }
}

export default withRouter(connect(
  store => ({
    resultStorage: store.resultStorage
  }),
  dispatch => ({
    resultActions: {
      updateData: data => dispatch(resultActions.updateData(data))
    }
  })
)(Timer));
