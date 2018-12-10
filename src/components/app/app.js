import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import ProtectedRoute from '../../containers/protectedRoute/protectedRoute.js';
import Logo from '../logo/logo.js';
import Map from '../../containers/map/map.js';
import Intro from '../intro/intro.js';
import Countries from '../../containers/countries/countries.js';
import Test from '../../containers/test/test.js';
import Result from '../result/result.js';
import Footer from '../footer/footer.js';

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Logo />
        <Switch>
          <Route exact path={'/intro'} component={Intro} />
          <ProtectedRoute path={'/countries'} component={() =>
            <React.Fragment>
              <Map />
              <Countries />
            </React.Fragment>
          } />
          <ProtectedRoute path={'/test'} component={Test} />
          <ProtectedRoute path={'/result'} component={Result} />
          <Redirect to={`${process.env.PUBLIC_URL}/intro`}/>
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
