import { useMemo } from 'react';
import './CountriesList.css';
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';
import { Country } from 'containers/Countries/types';
import { tableColumns, tableDesignOptions } from 'components/util';

const CountriesList = (props: any) => {
  const listOfCountries: Country[] = props.countries;

  const columns = useMemo<MRT_ColumnDef<Country>[]>(
    () => tableColumns as MRT_ColumnDef<Country>[],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data: listOfCountries,
    ...tableDesignOptions,
  });

  return <div className='table-container'><MaterialReactTable table={table} /></div>;
};

export default CountriesList;