export const initialState = [
  {
    status: 'none',
    countryCode: 'none',
    visible: true
  }
];

export function country (state = initialState, action) {
  switch(action.type) {
    case 'COUNTRY_SET_STATUS': {
      const {countryIndex, status} = action.payload;
      const countryStorage = [...state];

      countryStorage[countryIndex].status = status;
      return countryStorage;
    }
    case 'COUNTRY_GET_DATA': {
      const {countryIndex, status, data} = action.payload;
      const countryStorage = [...state];

      if(countryStorage[countryIndex].status === 'inProcess') {
        countryStorage[countryIndex+1] = {
          status: 'none',
          countryCode: 'none',
          visible: false
        };
      }
      countryStorage[countryIndex] = {
        ...countryStorage[countryIndex],
        status: status,
        ...data
      };
      return countryStorage;
    }
    case 'COUNTRY_SET_VISIBLE': {
      const {currentIndex, nextIndex} = action.payload;
      const countryStorage = [...state];

      countryStorage[currentIndex].visible = false;
      countryStorage[nextIndex].visible = true;
      return countryStorage;
    }
    case 'COUNTRY_DELETE': {
      const countryStorage = [...state];
      const {countryIndex} = action.payload;

      countryStorage.splice(countryIndex, 1);
      countryStorage[countryIndex].visible = true;
      return countryStorage;
    }
    case 'COUNTRY_DELETE_ALL': {
      return [{
        status: 'none',
        countryCode: 'none',
        visible: true
      }];
    }
    default: {
      return state;
    }
  }
}
