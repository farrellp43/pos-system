import React, { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  Avatar,
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { withStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { originalRows } from "../../constants/mock";

const defaultTheme = createTheme();

const StyledDataGrid = withStyles({
  root: {
    "& .MuiDataGrid-renderingZone": {
      maxHeight: "none !important",
    },
    "& .MuiDataGrid-cell": {
      lineHeight: "unset !important",
      maxHeight: "none !important",
      whiteSpace: "normal",
    },
    "& .MuiDataGrid-row": {
      maxHeight: "none !important",
    },
  },
})(DataGrid);

interface ITabelBarangProps {}

const columns: GridColDef[] = [
  { field: "id", headerName: "No", headerAlign: "center", flex: 0.5 },
  {
    field: "infoBarang",
    headerName: "Info Barang",
    headerAlign: "center",
    flex: 3,
    renderCell: (params) => {
      return (
        <Stack direction="row" spacing={1} alignItems="center" marginY={1}>
          <Avatar
            sx={{ bgcolor: "#6AB893", width: 65, height: 70 }}
            variant="rounded"
            alt={params.value.nama}
            src={params.value.url}
          />
          <Box>
            <Typography variant="subtitle1" fontWeight="bold">
              {params.value.nama}
            </Typography>
          </Box>
        </Stack>
      );
    },
  },
  { field: "kategori", headerName: "Kategori", headerAlign: "center", flex: 2 },
  {
    field: "harga",
    headerName: "Harga",
    headerAlign: "center",
    flex: 2,
  },
  {
    field: "jumlahStok",
    headerName: "Stok",
    headerAlign: "center",
    flex: 1.5,
  },
  {
    field: "SKU",
    headerName: "SKU",
    headerAlign: "center",
    flex: 2,
  },
  {
    field: "aksi",
    headerName: "",
    headerAlign: "center",
    flex: 2,
    sortable: false,
    disableColumnMenu: true,
    renderCell: (params) => {
      // const onClickDelete = () => {
      //   return alert(JSON.stringify(params.row, null, 4));
      // };
      //   const handleOpen = () => {
      //     setIsOpen(true);
      //   };

      //   const handleClickOpen = () => {
      //     openModal(params.row);
      //   };

      return (
        <React.Fragment>
          {/* <IconButton onClick={handleClickOpen}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => handleOpen()}>
            <DeleteIcon />
          </IconButton>
          <ModalDelete
            isDialogOpened={isOpen}
            handleCloseDialog={() => setIsOpen(false)}
          /> */}
          <FormControl size="small" fullWidth>
            <InputLabel>Atur</InputLabel>
            <Select label="Atur" onChange={() => {}}>
              <MenuItem value="Edit">Edit</MenuItem>
              <MenuItem value="Hapus">Hapus</MenuItem>
            </Select>
          </FormControl>
        </React.Fragment>
      );
    },
  },
];

const TabelBarang = (props: ITabelBarangProps) => {
  const [rows, setRows] = useState<any[]>(originalRows);

  return (
    <Box sx={{ height: 500, width: "100%" }}>
      <ThemeProvider theme={defaultTheme}>
        <StyledDataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </ThemeProvider>
    </Box>
  );
};

export default TabelBarang;
