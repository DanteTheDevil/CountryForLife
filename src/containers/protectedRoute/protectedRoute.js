import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

class ProtectedRoute extends React.Component {
  render () {
    const {path, pageStatus} = this.props;
    const {location} = pageStatus;

    return path === location ?
      <Route {...this.props}/> :
      <Redirect to={'/intro'}/>;
  }
}

const mapStateToProps = store => {
  return {
    pageStatus: store.pageStatus
  };
};

export default connect(mapStateToProps)(ProtectedRoute);
