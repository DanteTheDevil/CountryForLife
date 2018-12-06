import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import Logo from '../logo/logo.js';
import Map from '../map/map.js';
import Intro from '../intro/intro.js';
import Countries from '../countries/countries.js';
import Test from '../test/test.js';
import Result from '../result/result.js';
import Footer from '../footer/footer.js';

class App extends React.Component {
  componentWillMount() {
    const {pageStatus, location, history} = this.props;
    console.log(pageStatus.location, location.pathname);
    if(pageStatus.location !== location.pathname) {

      history.push(pageStatus.location);
    }
  }
  render() {
    return (
      <React.Fragment>
        <Logo />
        <Map />
        <Switch>
          <Route exact path={'/'} component={Intro} />
          <Route path={'/countries'} component={Countries} />
          <Route path={'/test'} component={Test} />
          <Route path={'/result'} component={Result}/>
          <Redirect from={'/*'} to={'/'} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withRouter(connect(
  store => ({
    pageStatus: store.pageStatus
  })
)(App));
