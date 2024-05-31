import { useState, useEffect } from 'react';
import CountriesService from 'services';
import { Country } from '../../util/types';
import ErrorPage from 'components/ErrorPage';
import Loading from 'components/Loading';
import CountriesTable from './CountriesTable/CountriesTable';

const Countries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const getCountriesData = async () => {
      try {
        const response = await CountriesService.getCountries();
        if (response) {
          const data = response.data.data.countries;
          const countryList: Country[] = data.map((country: Country) => {return ({name: country.name, code: country.code})})
          setCountries(countryList);
          setIsLoaded(true);
        }
      } catch (error: any) {
        setIsLoaded(true);
        setError(true);
      }
    };
    getCountriesData();
  }, []);

  if (error) {
    return <ErrorPage message="Something went wrong!" />;
  } else if (!isLoaded) {
    return <Loading />;
  } else {
    return <CountriesTable countries={countries} />;
  }
}
  
export default Countries;