import React from 'react';
import {connect} from 'react-redux';
import styles from './styles.scss';
import * as countryActions from '../../actions/country';
import Coordinates from './coordinates.js';
import Hint from '../../components/hint/hint.js';
import Panel from '../../components/panel/panel.js';
import countries from './countries.js';
import PropTypes from 'prop-types';

class Map extends React.Component {
  constructor (props) {
    super(props);
    this.map = React.createRef();
    this.state = {
      hint: {
        icon: 'none',
        text: 'none',
        visibility: false,
        x: 0,
        y: 0
      },
      viewBox: {
        x: 20,
        y: 220,
        width: 800,
        height: 500
      }
    };
  }
  onMouseOver = event => {
    const {id} = event.target;
    const newCountry = countries.find(value => value.code === id.toUpperCase());
    const hint = this.state.hint;

    if (id) {
      hint.visibility = true;
      hint.text = newCountry.name;
      hint.icon = `./images/flags/${id}.svg`;
      this.setState({hint: hint});
    }
  };
  onMouseOut = () => {
    const hint = this.state.hint;

    hint.visibility = false;
    this.setState({hint: hint});
  };
  onMouseMove = event => {
    const windowX = document.documentElement.clientWidth;
    const {offsetTop, offsetHeight} = this.map.current;
    const {clientX, clientY, pageY} = event;
    const {hint} = this.state;
    const x = windowX / 2 > clientX ? clientX + 30 : clientX - 180;
    const y = pageY > offsetTop + offsetHeight / 2  ? clientY - 30 : clientY + 70 ;

    hint.x = x;
    hint.y = y;
    this.setState({
      hint: hint
    });
  };
  onMouseLeave = () => {
    const {hint} = this.state;

    hint.visibility = false;
    hint.icon = 'none';
    hint.text = 'none';
    this.setState({
      hint: hint
    });
  };
  onClick = event => {
    const {countryStorage} = this.props;
    const country = countryStorage.find(value => {
      const {status} = value;

      return status === 'add' || status === 'replace';
    });
    const {id} = event.target;
    const sameCountry = countryStorage.find(value => value.countryCode.toLowerCase() === id);

    if (!sameCountry && country && id) {
      const {getData, setStatus} = this.props.countryActions;
      const countryIndex = countryStorage.indexOf(country);
      const status = countryStorage[countryIndex].status === 'add' ?
        'loading_add' :
        'loading_replace';

      setStatus(countryIndex, status);
      getData(id, countryIndex, status);
    }
    return false;
  };
  panelOptions = type => {
    return () => {
      const {viewBox} = this.state;
      const scaleX = 0.1 * viewBox.width;
      const scaleY = 0.1 * viewBox.height;

      switch (type) {
        case 'left': {
          viewBox.x -= 50;
          break;
        }
        case 'right': {
          viewBox.x += 50;
          break;
        }
        case 'up': {
          viewBox.y -= 50;
          break;
        }
        case 'down': {
          viewBox.y += 50;
          break;
        }
        case 'zoomPlus': {
          viewBox.x += scaleX / 1.9;
          viewBox.y += scaleY / 2 ;
          viewBox.width -= scaleX;
          viewBox.height -= scaleY;
          break;
        }
        case 'zoomMinus': {
          viewBox.x -= scaleX / 1.9;
          viewBox.y -= scaleY / 2;
          viewBox.width += scaleX;
          viewBox.height += scaleY;
          break;
        }
      }
      this.setState({viewBox: viewBox});
    };
  };
  render () {
    const {x ,y, width, height} = this.state.viewBox;
    const viewBox = `${x} ${y} ${width} ${height}`;

    return (
      <div ref={this.map} className={styles.map}>
        <Panel panelOptions={this.panelOptions}/>
        <Hint params={this.state.hint}/>
        <svg xmlns='http://www.w3.org/2000/svg'
             onClick={this.onClick} onMouseOver={this.onMouseOver} onMouseMove={this.onMouseMove}
             onMouseLeave={this.onMouseLeave} onMouseOut={this.onMouseOut} viewBox={viewBox}>
          <Coordinates/>
        </svg>
      </div>
    );
  }
}

Map.propTypes = {
  countryActions: PropTypes.object,
  countryStorage: PropTypes.array,
  getData: PropTypes.func
};

const mapStateToProps = store => {
  return store;
};

const mapDispatchToProps = dispatch => {
  return {
    countryActions: {
      getData: (countryName, countryIndex, cardStatus) =>
        dispatch(countryActions.getData(countryName, countryIndex, cardStatus)),
      setStatus: (countryIndex, status) =>
        dispatch(countryActions.setStatus(countryIndex, status))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
