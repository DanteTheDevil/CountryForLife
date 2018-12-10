export const getData = (countryName, countryIndex) => {
  return dispatch => {
    const apiAdress = 'https://restcountries.eu/rest/v2/alpha/';
    const url = `${apiAdress}${countryName}`;

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(response => {
        const {alpha2Code, name, capital, languages, currencies} = response;
        const code = alpha2Code.toLowerCase();
        const language = languages[0].name;
        const currency = currencies[0].name;

        return {
          countryCode: code,
          name: name,
          capital: capital,
          language: language,
          currency: currency
        };
      })
      .then(response => {
        dispatch({
          type: 'COUNTRY_GET_DATA',
          payload: {
            countryIndex: countryIndex,
            status: 'hasCountry',
            data: response
          }
        });
      });
  };
};

export const setVisible = (currentIndex, nextIndex) => {
  return {
    type: 'COUNTRY_SET_VISIBLE',
    payload: {
      currentIndex: currentIndex,
      nextIndex: nextIndex
    }
  };
};

export const remove = countryIndex => {
  return {
    type: 'COUNTRY_DELETE',
    payload: {
      countryIndex: countryIndex
    }
  };
};

export const removeAll = () => {
  return {
    type: 'COUNTRY_DELETE_ALL'
  };
};

export const setStatus = (countryIndex, status) => {
  return {
    type: 'COUNTRY_SET_STATUS',
    payload: {
      countryIndex: countryIndex,
      status: status
    }
  };
};
