export const getData = countries => {
  return {
    type: 'RESULT_GET_DATA',
    payload: countries
  }
};

export const updateData = data => {
  return {
    type: 'RESULT_UPDATE_DATA',
    payload: data
  }
};

export const removeAll = () => {
  return {
    type: 'RESULT_DELETE_ALL'
  }
};
