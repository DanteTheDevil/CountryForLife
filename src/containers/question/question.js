import React from 'react';
import styles from './styles.scss';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as resultActions from '../../actions/result';
import * as pageActions from '../../actions/page';
import PropTypes from 'prop-types';
import Greetings from '../../components/greetings/greetings';

class Question extends React.Component {
  constructor (props) {
    super(props);
    this.countryCode = '';
    this.greetings = '';
    this.state = {
      name: '',
      capital: '',
      language: '',
      currency: ''
    };
  }
  fieldChange = name => {
    return event => {
      this.setState({
        [name]: event.target.value
      });
    };
  };
  nextCountry = event => {
    const {updateData} = this.props.resultActions;
    const {history, resultStorage, pageActions} = this.props;
    const unPassed = resultStorage.filter(item => !item.passed);
    const {changeLocation} = pageActions;

    updateData({
      countryCode: this.countryCode,
      ...this.state
    });
    this.countryCode = '';
    this.setState({
      name: '',
      capital: '',
      language: '',
      currency: ''
    });
    if (unPassed.length - 1 === 0) {
      changeLocation('/result');
      history.push('/result');
    }
    event.preventDefault();
  };
  render () {
    const {resultStorage} = this.props;
    const unPassed = resultStorage.filter(item => !item.passed);
    const keys = ['Name', 'Capital', 'Language', 'Currency'];
    const list = keys.map(item => {
      const formatItem = item.toLowerCase();
      const data = this.state[formatItem];
      return (
        <li key={item}>
          <label>
            {item}
            <input value={data} type={'text'} name={formatItem}
                   onChange={this.fieldChange(formatItem)}/>
          </label>
        </li>
      );
    });

    if (!this.countryCode) {
      const index = Math.trunc(Math.random() * unPassed.length);
      this.countryCode = unPassed[index].countryCode;
      this.greetings = unPassed[index].greetings;
    }

    return (
      <div className={styles.question}>
        <Greetings greetings={this.greetings} />
        <div className={styles.flag}>
          <img src={`./images/flags/${this.countryCode}.svg`} />
        </div>
        <form className={styles.content} onSubmit={this.nextCountry}>
          <ul>
            {list}
          </ul>
          <input className={styles.submit} type={'submit'} value={'SUBMIT'}/>
        </form>
      </div>
    );
  }
}

Question.propTypes = {
  resultActions: PropTypes.object,
  history: PropTypes.object,
  resultStorage: PropTypes.array,
  pageActions: PropTypes.object
};

const mapStateToProps = store => {
  return store;
};

const mapDispatchToProps = dispatch => {
  return {
    resultActions: {
      updateData: data => dispatch(resultActions.updateData(data))
    },
    pageActions: {
      changeLocation: location => dispatch(pageActions.changeLocation(location))
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Question));

