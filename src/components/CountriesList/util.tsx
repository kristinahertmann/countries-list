export const tableDesignOptions = {
    initialState: { showColumnFilters: true, pagination: { pageIndex: 0, pageSize: 15 }, },
    enableColumnActions: false,
    enableSorting: false,
    enableFullScreenToggle: false,
    enableGlobalFilter: false,
    enableDensityToggle: false,
    enableHiding: false,
};

export const tableColumns = [
    {
      accessorKey: 'name',
      header: 'Country name',
      enableColumnFilter: false,
    },
    {
      accessorKey: 'code',
      header: 'Country code',
      filterVariant: 'text',
    },
];