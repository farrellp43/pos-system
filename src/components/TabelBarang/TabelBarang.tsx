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
  useTheme,
} from "@mui/material";
import { withStyles } from "@mui/styles";
import { ThemeProvider } from "@mui/material/styles";
import { originalRows } from "../../constants/mock";
import toRupiah from "../../utils/toRupiah";

const StyledDataGrid = withStyles({
  root: {
    "& .MuiDataGrid-renderingZone": {
      maxHeight: "none !important",
    },
    "& .MuiDataGrid-cell": {
      lineHeight: "unset !important",
      maxHeight: "none !important",
      whiteSpace: "normal",
      borderBottom: 0,
    },
    "& .MuiDataGrid-row": {
      maxHeight: "none !important",
    },
    border: 0,
  },
})(DataGrid);

interface ITabelBarangProps {}

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "No",
    headerClassName: "headerColumn",
    headerAlign: "center",
    align: "center",
    flex: 0.5,
    renderCell: (params) => {
      return (
        <Box marginY={1}>
          <Typography variant="subtitle2" fontWeight="bold">
            {params.value}
          </Typography>
        </Box>
      );
    },
  },
  {
    field: "infoBarang",
    headerName: "Info Barang",
    headerClassName: "headerColumn",
    headerAlign: "center",
    flex: 3,
    renderCell: (params) => {
      return (
        <Stack direction="row" spacing={1} marginY={1}>
          <Avatar
            sx={{ bgcolor: "#6AB893", width: 50, height: 55 }}
            variant="rounded"
            alt={params.value.nama}
            src={params.value.url}
          />
          <Box>
            <Typography variant="subtitle2" fontWeight="bold">
              {params.value.nama}
            </Typography>
          </Box>
        </Stack>
      );
    },
  },
  {
    field: "kategori",
    headerName: "Kategori",
    headerClassName: "headerColumn",
    headerAlign: "center",
    align: "center",
    flex: 2,
    renderCell: (params) => {
      return (
        <Box marginY={1}>
          <Typography variant="subtitle2">{params.value}</Typography>
        </Box>
      );
    },
  },
  {
    field: "harga",
    headerName: "Harga",
    headerClassName: "headerColumn",
    headerAlign: "center",
    align: "center",
    flex: 2,
    renderCell: (params) => {
      return (
        <Box marginY={1}>
          <Typography variant="subtitle2">{toRupiah(params.value)}</Typography>
        </Box>
      );
    },
  },
  {
    field: "jumlahStok",
    headerName: "Stok",
    headerClassName: "headerColumn",
    headerAlign: "center",
    align: "center",
    flex: 1.5,
    renderCell: (params) => {
      return (
        <Box marginY={1}>
          <Typography variant="subtitle2">{params.value}</Typography>
        </Box>
      );
    },
  },
  {
    field: "SKU",
    headerName: "SKU",
    headerClassName: "headerColumn",
    headerAlign: "center",
    align: "center",
    flex: 2,
    renderCell: (params) => {
      return (
        <Box marginY={1}>
          <Typography variant="subtitle2">{params.value}</Typography>
        </Box>
      );
    },
  },
  {
    field: "aksi",
    headerName: "Aksi",
    headerClassName: "headerColumn",
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
            <InputLabel sx={{ fontWeight: "bold", color: "black" }}>
              Atur
            </InputLabel>
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
  const theme = useTheme();
  const [rows, setRows] = useState<any[]>(originalRows);

  return (
    <Box
      sx={{
        height: 500,
        width: "100%",
        "& .headerColumn": {
          backgroundColor: "#EDF7F2",
          fontSize: "18px",
        },
        "& .MuiDataGrid-columnHeaderTitle": {
          fontWeight: "bold",
        },
        "& .MuiDataGrid-columnSeparator": {
          visibility: "hidden",
        },
      }}
    >
      <ThemeProvider theme={theme}>
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
