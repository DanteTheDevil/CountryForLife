export const initialState = {
  location: '/intro'
};

export function page (state = initialState, action) {
  switch (action.type) {
    case 'PAGE_CHANGE_LOCATION': {
      const {location} = action.payload;
      return {
        location: location
      };
    }
    default: {
      return state;
    }
  }
}
