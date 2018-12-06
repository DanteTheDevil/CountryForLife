import React from 'react';
import {connect} from "react-redux";
import styles from './styles.css';
import * as countryActions from "../../actions/country";
import Coordinates from './coordinates.js';
import Hint from '../hint/hint.js';
import countries from './countries.js';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.state = {
      hint: {
        icon: 'none',
        text: 'none',
        visibility: false,
        x: 0,
        y: 0
      }
    };
    this.onClick = this.onClick.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }
  onMouseOver(event) {
    const {id} = event.target;
    const newCountry = countries.find(value => value.code === id.toUpperCase());
    const hint = this.state.hint;

    if(id) {
      hint.visibility = true;
      hint.text = newCountry.name;
      hint.icon = `./src/images/flags/${id}.svg`;
      this.setState({hint: hint});
    }
  }
  onMouseOut(event) {
    const hint = this.state.hint;

    hint.visibility = false;
    this.setState({hint: hint});
  }
  onMouseMove (event) {
    const windowX = document.documentElement.clientWidth;
    const windowY = document.documentElement.clientHeight;
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const hint = this.state.hint;
    const x = windowX / 2 > mouseX ? mouseX + 30 : mouseX - 180;
    const y = mouseY;

    hint.x = x;
    hint.y = y;

    this.setState({
      hint: hint
    });
  }
  onMouseLeave (event) {
    const hint = this.state.hint;

    hint.visibility = false;
    hint.icon = 'none';
    hint.text = 'none';
    this.setState({
      hint: hint
    });
  }
  onClick(event) {
    const {countryStorage} = this.props;
    const country = countryStorage.find(value => value.status === 'inProcess' || value.status === 'replace');
    const {id} = event.target;
    const sameCountry = countryStorage.find(value => value.countryCode.toLowerCase() === id);

    if(!sameCountry) {
      if(country && id) {
        const {getData} = this.props.countryActions;
        const countryIndex = countryStorage.indexOf(country);

        getData(id, countryIndex);
      }
    }
    return false;
  }
  render () {
      return (
        <div ref={this.ref}>
          <Hint params={this.state.hint}/>
          <svg xmlns='http://www.w3.org/2000/svg' className={styles.map}
               onClick={this.onClick} onMouseOver={this.onMouseOver} onMouseMove={this.onMouseMove}
               onMouseLeave={this.onMouseLeave} onMouseOut={this.onMouseOut} viewBox="0 0 685 520">
            <defs id='defs3159'>
              <clipPath id='clipPath7195'>
                <rect id='rect7197' y='163.352' x='1594.606' height='6873.128' width='7331.494'
                      fill='green' stroke='rgba(255,255,255,0)' strokeWidth='2.352' />
              </clipPath>
            </defs>
            <Coordinates />
          </svg>
        </div>
      )
  }
}

export default connect(
  store => store,
  dispatch => ({
    countryActions: {
      getData: (countryName, countryIndex) => dispatch(countryActions.getData(countryName, countryIndex))
    }
  })
)(Map);
