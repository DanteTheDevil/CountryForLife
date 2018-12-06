import React from 'react';
import styles from './styles.css';
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import * as resultActions from "../../actions/result";

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.countryCode = '';
    this.state = {
      name: '',
      capital: '',
      language: '',
      currency: ''
    };
    this.nextCountry = this.nextCountry.bind(this);
    this.fieldChange = this.fieldChange.bind(this);
  }
  fieldChange (name) {
    return (event) => {
      this.setState({
        [name]: event.target.value
      });
    }
  }
  nextCountry(event) {
    const {updateData} = this.props.resultActions;
    const {history, resultStorage} = this.props;
    const unPassed = resultStorage.filter(item => !item.passed);

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
    if(unPassed.length - 1 === 0) {
      history.push('/result');
    }
    event.preventDefault();
  }
  render () {
    const {resultStorage} = this.props;
    const unPassed = resultStorage.filter(item => !item.passed);
    const keys = ['Name', 'Capital', 'Language', 'Currency'];
    const list = keys.map((item) => {
      const formatItem = item.toLowerCase();
      const data = this.state[formatItem];

      return <li key={item}>
        <label>
          {item}
          <input value={data} type={'text'} name={formatItem} onChange={this.fieldChange(formatItem)}/>
        </label>
      </li>
    });

    if(!this.countryCode) {
      const index = Math.trunc(Math.random() * unPassed.length);

      this.countryCode = unPassed[index].countryCode;
    }
    return (
      <div className={styles.question}>
        <div className={styles.flag}>
          <img src={require(`../../images/flags/${this.countryCode}.svg`)} />
        </div>
        <form className={styles.content} onSubmit={this.nextCountry}>
          <ul>
            {list}
          </ul>
          <input className={styles.submit} type={'submit'} value={'SUBMIT'}/>
        </form>
      </div>
    )
  }
}

export default withRouter(connect(
  store => store,
  dispatch => ({
    resultActions: {
      updateData: data => dispatch(resultActions.updateData(data))
    }
  })
)(Question));

