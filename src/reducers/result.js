export const initialState = [];

export function result (state = initialState, action) {
  switch (action.type) {
    case 'RESULT_GET_DATA': {
      const data = action.payload;

      return data
        .filter(item => item.status === 'hasCountry')
        .map(item => {
          return {
            countryCode: item.countryCode,
            passed: false
          };
        });
    }
    case 'RESULT_UPDATE_DATA': {
      const resultStorage = state;
      const {countryCode} = action.payload;
      const countryIndex = resultStorage.findIndex(item => item.countryCode === countryCode);

      resultStorage[countryIndex] = {
        ...action.payload,
        passed: true
      };

      return resultStorage;
    }
    case 'RESULT_DELETE_ALL': {
      return [];
    }
    default: {
      return state;
    }
  }
}
