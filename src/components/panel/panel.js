import React from 'react';
import styles from './styles.css';
import PropTypes from 'prop-types';

class Panel extends React.Component {
  render () {
    const {panelOptions} = this.props;

    return (
      <div className={styles.panel}>
        <div className={styles.top}>
          <i className={`fas fa-caret-up ${styles.arrow}`} onClick={panelOptions('up')}/>
        </div>
        <div className={styles.middle}>
          <i className={`fas fa-caret-left ${styles.arrow }`} onClick={panelOptions('left')} />
          <div className={styles.zoom}>
            <i className={`far fa-plus-square ${styles.zoomOptions}`}
               onClick={panelOptions('zoomPlus')}/>
            <i className={`far fa-minus-square ${styles.zoomOptions}`}
               onClick={panelOptions('zoomMinus')}/>
          </div>
          <i className={`fas fa-caret-right ${styles.arrow}`} onClick={panelOptions('right')}/>
        </div>
        <div className={styles.bottom}>
          <i className={`fas fa-caret-down ${styles.arrow}`} onClick={panelOptions('down')}/>
        </div>
      </div>
    );
  }
}

Panel.propTypes = {
  panelOptions: PropTypes.func
};

export default Panel;
