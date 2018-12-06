export const changeLocation = location => {
  return {
    type: 'PAGE_CHANGE_LOCATION',
    payload: {
      location: location
    }
  }
};
