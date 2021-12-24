import React, { Fragment, useState } from "react";
import { DataGrid, GridColDef, GridToolbarExport } from "@mui/x-data-grid";
import { Box, Button, IconButton, TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useStokModal } from "../../context/stokModalContext";
import ModalDelete from "../ModalDelete/ModalDelete";
import { originalRows } from "../../constants/mock";

function escapeRegExp(value: string): string {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

interface ITabelDataProps {}

interface IStokBarang {
  id: number;
  namaBarang: string;
  harga: number;
  jumlahStok: number;
  SKU: string;
}

interface QuickSearchToolbarProps {
  clearSearch: () => void;
  onChange: () => void;
  value: string;
}

function QuickSearchToolbar(props: QuickSearchToolbarProps) {
  const { openModal } = useStokModal();

  const handleClickOpen = () => {
    openModal();
  };

  return (
    <Box
      sx={{
        p: 0.5,
        pb: 0,
        justifyContent: "space-between",
        display: "flex",
        alignItems: "flex-start",
        flexWrap: "wrap",
      }}
    >
      <TextField
        variant="outlined"
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
              style={{ visibility: props.value ? "visible" : "hidden" }}
              onClick={props.clearSearch}
            >
              <ClearIcon fontSize="small" />
            </IconButton>
          ),
        }}
        sx={{
          width: {
            xs: 1,
            sm: "auto",
          },
          m: (theme) => theme.spacing(1, 0.5, 1.5),
          "& .MuiSvgIcon-root": {
            mr: 0.5,
          },
          "& .MuiInput-underline:before": {
            borderBottom: 1,
            borderColor: "divider",
          },
        }}
      />
      <div>
        <Stack direction="row" spacing={2} mt={2} mr={2}>
          <GridToolbarExport variant="outlined" size="medium" />
          <Button
            variant="contained"
            size="medium"
            startIcon={<AddIcon />}
            onClick={handleClickOpen}
          >
            Add
          </Button>
        </Stack>
      </div>
    </Box>
  );
}

const TabelData = (props: ITabelDataProps) => {
  const [searchText, setSearchText] = React.useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [rows, setRows] = React.useState<any[]>(originalRows);
  const { openModal } = useStokModal();

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "namaBarang", headerName: "Nama Barang", width: 150 },
    {
      field: "harga",
      headerName: "Harga",
      type: "number",
      width: 100,
    },
    {
      field: "jumlahStok",
      headerName: "Stok",
      type: "number",
      width: 100,
    },
    {
      field: "SKU",
      headerName: "SKU",
      width: 200,
    },
    {
      field: "action",
      headerName: "Actions",
      width: 100,
      sortable: false,
      disableColumnMenu: true,

      renderCell: (params) => {
        // const onClickDelete = () => {
        //   return alert(JSON.stringify(params.row, null, 4));
        // };
        const handleOpen = () => {
          setIsOpen(true);
        };

        const handleClickOpen = () => {
          openModal(params.row);
        };

        return (
          <Fragment>
            <IconButton onClick={handleClickOpen}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => handleOpen()}>
              <DeleteIcon />
            </IconButton>
            <ModalDelete
              isDialogOpened={isOpen}
              handleCloseDialog={() => setIsOpen(false)}
            />
          </Fragment>
        );
      },
    },
  ];

  const requestSearch = (searchValue: string) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), "i");
    const filteredRows = originalRows.filter((row: any) => {
      return Object.keys(row).some((field: any) => {
        return searchRegex.test(row[field].toString());
      });
    });
    setRows(filteredRows);
  };

  return (
    <div style={{ height: 500, width: 800 }}>
      <DataGrid
        editMode="row"
        components={{
          Toolbar: QuickSearchToolbar,
        }}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        componentsProps={{
          toolbar: {
            value: searchText,
            onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
              requestSearch(event.target.value),
            clearSearch: () => requestSearch(""),
          },
        }}
      />
    </div>
  );
};

export default TabelData;
