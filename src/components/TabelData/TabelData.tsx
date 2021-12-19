import React, { useState } from 'react';
import { DataGrid, GridColDef, GridToolbarExport, GridToolbar, GridToolbarDensitySelector, GridToolbarFilterButton } from '@mui/x-data-grid';
import { Box, IconButton, TextField } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import { AnyRecord } from 'dns';

function escapeRegExp(value: string): string {
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

interface ITabelDataProps {

}

interface Customers {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
}

interface QuickSearchToolbarProps {
    clearSearch: () => void;
    onChange: () => void;
    value: string;
}

function QuickSearchToolbar(props: QuickSearchToolbarProps) {
    return (
        <Box
            sx={{
                p: 0.5,
                pb: 0,
                justifyContent: 'space-between',
                display: 'flex',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
            }}
        >
            <div>
                <GridToolbarFilterButton />
                <GridToolbarDensitySelector />
                <GridToolbarExport />
            </div>
            <TextField
                variant="standard"
                value={props.value}
                onChange={props.onChange}
                placeholder="Search…"
                InputProps={{
                    startAdornment: <SearchIcon fontSize="small" />,
                    endAdornment: (
                        <IconButton
                            title="Clear"
                            aria-label="Clear"
                            size="small"
                            style={{ visibility: props.value ? 'visible' : 'hidden' }}
                            onClick={props.clearSearch}
                        >
                            <ClearIcon fontSize="small" />
                        </IconButton>
                    ),
                }}
                sx={{
                    width: {
                        xs: 1,
                        sm: 'auto',
                    },
                    m: (theme) => theme.spacing(1, 0.5, 1.5),
                    '& .MuiSvgIcon-root': {
                        mr: 0.5,
                    },
                    '& .MuiInput-underline:before': {
                        borderBottom: 1,
                        borderColor: 'divider',
                    },
                }}
            />
        </Box>
    );
}

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', flex: 0.3 },
    { field: 'firstName', headerName: 'First name', flex: 1, editable: true },
    { field: 'lastName', headerName: 'Last name', flex: 1, editable: true },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        flex: 0.3,
        editable: true
    },
    {
        field: 'email',
        headerName: 'E-Mail',
        flex: 1,
        editable: true
    },
];

const originalRows: Customers[] = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, email: 'JSnow@example.com' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, email: 'CLannister@example.com' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, email: 'JLannister@example.com' },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, email: 'AStark@example.com' },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 999, email: 'DTargaryen@example.com' },
    { id: 6, lastName: 'Melisandre', firstName: 'Fire', age: 150, email: 'Melisandre@example.com' },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, email: 'FClifford@example.com' },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, email: 'RFrances@example.com' },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, email: 'HRoxie@example.com' },
];

const TabelData = (props: ITabelDataProps) => {
    const [searchText, setSearchText] = React.useState('');
    const [rows, setRows] = React.useState<any[]>(originalRows);

    const requestSearch = (searchValue: string) => {
        setSearchText(searchValue);
        const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
        const filteredRows = originalRows.filter((row: any) => {
            return Object.keys(row).some((field: any) => {
                return searchRegex.test(row[field].toString());
            });
        });
        setRows(filteredRows);
    };

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                editMode="row"
                components={{
                    Toolbar: QuickSearchToolbar
                }}
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                componentsProps={{
                    toolbar: {
                        value: searchText,
                        onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
                            requestSearch(event.target.value),
                        clearSearch: () => requestSearch(''),
                    },
                }}
            />
        </div>
    );
}

export default TabelData;