import * as actionTypes from '../constants/country';

export const getData = (countryName, countryIndex, cardStatus) => {
  return dispatch => {
    const dataApi = 'https://restcountries.eu/rest/v2/alpha/';
    const dataUrl = `${dataApi}${countryName}`;
    const greetingsApi = 'https://fourtonfish.com/hellosalut/';
    const data = {};

    request(dataUrl)
      .then(response => {
        const {alpha2Code, name, capital, languages, currencies} = response;
        const formatName = name.indexOf('(') > 0 ?
          name.slice(0, name.indexOf('(') ) :
          name;
        const {iso639_1: langCode} = languages[0];
        const code = alpha2Code.toLowerCase();
        const language = languages[0].name;
        const currency = currencies[0].name;
        const countryData = {
          countryCode: code,
          name: formatName,
          capital: capital,
          language: language,
          langCode: langCode,
          currency: currency,
        };

        Object.assign(data, countryData);
        return {
          langCode: langCode,
        };
      })
      .then(response => {
        const {langCode} = response;
        const greetingsUrl = `${greetingsApi}?lang=${langCode}`;

        return request(greetingsUrl);
      })
      .then(response => {
        data.greetings = response.hello;
        dispatch({
          type: actionTypes.COUNTRY_GET_DATA,
          payload: {
            countryIndex: countryIndex,
            status: 'hasCountry',
            data: data
          }
        });
      })
      .catch(error => {
        const errorCode = parseInt(error.message, 10);
        const status = cardStatus === 'loading_add' ?
          'none' :
          'hasCountry';

        dispatch({
          type: actionTypes.COUNTRY_SET_STATUS,
          payload: {
            countryIndex: countryIndex,
            status: status
          }
        });
      });
  };
};

export const setVisible = (currentIndex, nextIndex) => {
  return {
    type: actionTypes.COUNTRY_SET_VISIBLE,
    payload: {
      currentIndex: currentIndex,
      nextIndex: nextIndex
    }
  };
};

export const remove = countryIndex => {
  return {
    type: actionTypes.COUNTRY_DELETE,
    payload: {
      countryIndex: countryIndex
    }
  };
};

export const removeAll = () => {
  return {
    type: actionTypes.COUNTRY_DELETE_ALL
  };
};

export const setStatus = (countryIndex, status) => {
  return {
    type: actionTypes.COUNTRY_SET_STATUS,
    payload: {
      countryIndex: countryIndex,
      status: status
    }
  };
};

function request (url) {
  return fetch(url)
    .then(response => {
      switch (response.status) {
        case 200: {
          return Promise.resolve(response.json());
        }
        case 204: {
          throw new Error('No data');
        }
        default: {
          throw new Error(response.status);
        }
      }
    });
}
