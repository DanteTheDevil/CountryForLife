import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './reducers/index';
import './style.css';
import App from './components/app/app.js';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);
