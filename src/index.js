import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './reducers/index';
import './styles.css';
import App from './components/app/app.js';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename = {process.env.PUBLIC_URL + '/'} >
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);
