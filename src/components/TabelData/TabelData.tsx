import React from "react";
import {
  DataGrid,
  GridApi,
  GridColumns,
  GridColDef,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { Box, Button, IconButton, TextField } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

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
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
      <div>
        <Button
          variant="text"
          size="small"
          startIcon={<AddIcon />}
          onClick={handleClickOpen}
        >
          Add
        </Button>
        <Dialog
          maxWidth="md"
          fullWidth={true}
          open={open}
          onClose={handleClose}
        >
          <DialogTitle>Add</DialogTitle>
          <DialogContent dividers>
            <TextField
              autoFocus
              margin="dense"
              id="namaBarang"
              label="Nama Barang"
              type="namaBarang"
              fullWidth
              variant="outlined"
            />
            <TextField
              margin="dense"
              id="harga"
              label="Harga"
              type="number"
              fullWidth
              variant="outlined"
            />
            <TextField
              margin="dense"
              id="jumlahStok"
              label="Jumlah Stok"
              type="number"
              fullWidth
              variant="outlined"
            />
            <TextField
              margin="dense"
              id="SKU"
              label="SKU"
              type="SKU"
              fullWidth
              variant="outlined"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Confirm</Button>
          </DialogActions>
        </Dialog>
        <GridToolbarExport />
      </div>
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
    </Box>
  );
}

const columns: GridColumns[] = [
  { field: "id", headerName: "ID", flex: 0.3 },
  { field: "namaBarang", headerName: "Nama Barang", flex: 0.6 },
  {
    field: "harga",
    headerName: "Harga",
    type: "number",
    flex: 0.6,
  },
  {
    field: "jumlahStok",
    headerName: "Stok",
    type: "number",
    flex: 0.3,
  },
  {
    field: "SKU",
    headerName: "SKU",
    flex: 1,
  },
  {
    field: "actions",
    type: "actions",
    headerName: "Actions",
    flex: 1,
    cellClassName: "actions",
    getActions: ({ id }) => {
      return [
        <IconButton
          icon={<EditIcon />}
          label="Edit"
          className="textPrimary"
          onClick={handleEditClick(id)}
          color="inherit"
        />,
        <IconButton
          icon={<DeleteIcon />}
          label="Delete"
          onClick={handleDeleteClick(id)}
          color="inherit"
        />,
      ];
    },
  },
];

const originalRows: IStokBarang[] = [
  {
    id: 1,
    harga: 10000,
    namaBarang: "Jon",
    jumlahStok: 35,
    SKU: "JSnow@example.com",
  },
  {
    id: 2,
    harga: 10000,
    namaBarang: "Cersei",
    jumlahStok: 42,
    SKU: "CLannister@example.com",
  },
  {
    id: 3,
    harga: 10000,
    namaBarang: "Jaime",
    jumlahStok: 45,
    SKU: "JLannister@example.com",
  },
  {
    id: 4,
    harga: 10000,
    namaBarang: "Arya",
    jumlahStok: 16,
    SKU: "AStark@example.com",
  },
  {
    id: 5,
    harga: 10000,
    namaBarang: "Daenerys",
    jumlahStok: 999,
    SKU: "DTargaryen@example.com",
  },
  {
    id: 6,
    harga: 10000,
    namaBarang: "Fire",
    jumlahStok: 150,
    SKU: "Melisandre@example.com",
  },
  {
    id: 7,
    harga: 10000,
    namaBarang: "Ferrara",
    jumlahStok: 44,
    SKU: "FClifford@example.com",
  },
  {
    id: 8,
    harga: 10000,
    namaBarang: "Rossini",
    jumlahStok: 36,
    SKU: "RFrances@example.com",
  },
  {
    id: 9,
    harga: 10000,
    namaBarang: "Harvey",
    jumlahStok: 65,
    SKU: "HRoxie@example.com",
  },
];

const TabelData = (props: ITabelDataProps) => {
  const [searchText, setSearchText] = React.useState("");
  const [rows, setRows] = React.useState<any[]>(originalRows);

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
    <div style={{ height: 400, width: "100%" }}>
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
