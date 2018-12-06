import {createStore, applyMiddleware} from 'redux';
import {combineReducers} from 'redux';
import {country} from './country';
import {result} from './result';
import {page} from './page';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  countryStorage: country,
  resultStorage: result,
  pageStatus: page
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
