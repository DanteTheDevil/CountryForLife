import * as actionTypes from '../constants/result';

export const getData = countries => {
  return {
    type: actionTypes.RESULT_GET_DATA,
    payload: countries
  };
};

export const updateData = data => {
  return {
    type: actionTypes.RESULT_UPDATE_DATA,
    payload: data
  };
};

export const removeAll = () => {
  return {
    type: actionTypes.RESULT_DELETE_ALL
  };
};
