import * as actionTypes from '../constants/result';

export const initialState = [];

export function result (state = initialState, action) {
  switch (action.type) {
    case actionTypes.RESULT_GET_DATA: {
      const data = action.payload;
      return data
        .filter(item => item.status === 'hasCountry')
        .map(item => {
          return {
            countryCode: item.countryCode,
            greetings: item.greetings,
            passed: false
          };
        });
    }
    case actionTypes.RESULT_UPDATE_DATA: {
      const resultStorage = state;
      const {countryCode} = action.payload;
      const countryIndex = resultStorage.findIndex(item => item.countryCode === countryCode);

      resultStorage[countryIndex] = {
        ...action.payload,
        passed: true
      };

      return resultStorage;
    }
    case actionTypes.RESULT_DELETE_ALL: {
      return [];
    }
    default: {
      return state;
    }
  }
}
