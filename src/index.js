import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './reducers/index';
import './styles.css';
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

/*if ('serviceWorker' in navigator) {
  console.log('it works');
  navigator.serviceWorker.register('./service-worker.js');
}*/
