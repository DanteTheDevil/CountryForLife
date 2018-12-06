import React from 'react';
import styles from './styles.css';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import Confirm from '../confirm/confirm.js';
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
  nextCountry() {
    const {updateData} = this.props.resultActions;

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
    event.preventDefault();
  }
  render () {
    const {resultStorage} = this.props;
    const unPassed = resultStorage.filter(item => !item.passed);
    const keys = ['Name', 'Capital', 'Language', 'Currency'];
    const list = keys.map((item) => <li key={item}>
      <label>
        {item}
        <input type={'text'} name={item.toLowerCase()} onChange={this.fieldChange(item.toLowerCase())}/>
      </label>
    </li>);

    if(!this.countryCode) {
      const index = Math.trunc(Math.random() * unPassed.length);

      this.countryCode = unPassed[index].countryCode;
    }
    return (
      <div className={styles.question}>
        <div className={styles.flag}>
          <img src={require(`../../images/flags/${this.countryCode}.svg`)} />
        </div>
        <form className={styles.content}>
          <ul>
            {list}
          </ul>
        </form>
        {unPassed.length > 1 ?
          <input className={styles.submit} type={'submit'} value={'SUBMIT'} onClick={this.nextCountry}/> :
          <Link to={'/result'} className={styles.submit} onClick={this.nextCountry}><b>{'SUBMIT'}</b></Link>
        }
      </div>
    )
  }
}

export default connect(
  store => store,
  dispatch => ({
    resultActions: {
      updateData: data => dispatch(resultActions.updateData(data))
    }
  })
)(Question);

