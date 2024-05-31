import axios from 'axios';

const countriesApi= "https://countries.trevorblades.com/";
const COUNTRIES_QUERY = `
 query GetCountry {
    countries {
      name,
      code
    }
  }
`;

const CountriesService = {
  getCountries: function() {
    return axios.post(countriesApi, {
      query: COUNTRIES_QUERY,
    });
  },
};

export default CountriesService;
