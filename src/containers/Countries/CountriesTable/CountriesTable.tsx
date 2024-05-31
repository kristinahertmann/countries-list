import Header from 'components/Header';
import CountriesList from 'components/CountriesList';
import { Country } from 'util/Types';

const CountriesTable = (props: any) => {
    const countries: Country[] = props.countries;
    return (
        <div>
            <Header />
            <CountriesList countries={countries}></CountriesList>
        </div>
  );
}
export default CountriesTable;