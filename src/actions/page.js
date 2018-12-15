import * as actionTypes from '../constants/page';

export const changeLocation = location => {
  return {
    type: actionTypes.PAGE_CHANGE_LOCATION,
    payload: {
      location: location
    }
  };
};
