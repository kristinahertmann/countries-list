import { useMemo } from 'react';
import './CountriesList.css';
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';
import { tableColumns, tableDesignOptions } from './TableHelper';
import { Country } from 'util/Types';

const CountriesList = (props: any) => {
  const listOfCountries: Country[] = props.countries;

  const countryTableColumns = useMemo<MRT_ColumnDef<Country>[]>(
    () => tableColumns as MRT_ColumnDef<Country>[],
    [],
  );

  const countryTable = useMaterialReactTable({
    columns: countryTableColumns,
    data: listOfCountries,
    ...tableDesignOptions,
  });

  return <div className='table-container'><MaterialReactTable table={countryTable} /></div>;
};

export default CountriesList;