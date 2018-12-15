import * as actionTypes from '../constants/country';

export const getData = (countryName, countryIndex) => {
  return dispatch => {
    const dataApi = 'https://restcountries.eu/rest/v2/alpha/';
    const dataUrl = `${dataApi}${countryName}`;
    const greetingsKey = 'trnsl.1.1.20181214T014542Z.3992549ce869d36f.' +
      '0028a82b85ca21e60c000c3e4c95e614c51aac44';
    const greetingsText = 'hello';
    const greetingsApi = 'https://translate.yandex.net/api/v1.5/tr.json/translate?';
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

        return {
          countryCode: code,
          name: formatName,
          capital: capital,
          language: language,
          langCode: langCode,
          currency: currency,
        };
      })
      .then(response => {
        const greetingsUrl = `${greetingsApi}key=${greetingsKey}&text=${greetingsText}
        &lang=en-${response.langCode}&format=plain&options=1`;

        Object.assign(data, response);
        return request(greetingsUrl);
      })
      .then(response => {
        data.greetings = response.text[0];

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

        switch (errorCode) {
          case 400: {
            data.greetings = greetingsText;
            dispatch({
              type: actionTypes.COUNTRY_GET_DATA,
              payload: {
                countryIndex: countryIndex,
                status: 'hasCountry',
                data: data
              }
            });
            break;
          }
        }
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
      if (response.status === 200) {
        return Promise.resolve(response.json());
      }
      return Promise.reject(new Error(response.status));
    });
}
