import React, { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { withStyles } from "@mui/styles";
import { ThemeProvider } from "@mui/material/styles";
import { originalRows } from "../../constants/mock";
import toRupiah from "../../utils/toRupiah";
import LogoTokped from "../LogoTokped/LogoTokped";
import ActionList from "../ActionList/ActionList";
import { useStokModal } from "../../context/stokModalContext";

function escapeRegExp(value: string): string {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

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

interface QuickSearchToolbarProps {
  onChange: () => void;
  value: string;
}

const TabelBarang = (props: ITabelBarangProps) => {
  const theme = useTheme();
  const { openModal } = useStokModal();
  const [searchText, setSearchText] = useState("");
  const [rows, setRows] = useState<any[]>(originalRows);

  const QuickSearchToolbar = ({ onChange, value }: QuickSearchToolbarProps) => {
    return (
      <Box>
        <Box display="flex" justifyContent="space-between" marginTop={3}>
          <Box>
            <Typography variant="h4" fontWeight="bold">
              Daftar Produk
            </Typography>
          </Box>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              onClick={() => {}}
              startIcon={<CloudDownloadIcon />}
              size="medium"
            >
              <Typography fontWeight="bold">Download Katalog</Typography>
            </Button>
            <Button
              variant="outlined"
              onClick={() => {}}
              startIcon={<LogoTokped />}
              size="medium"
            >
              <Typography fontWeight="bold">Import</Typography>
            </Button>
          </Stack>
        </Box>
        <Box marginY={5}>
          <Stack direction="row" width="100%" spacing={3} alignItems="center">
            <Box width="40%">
              <TextField
                placeholder="Cari barang..."
                fullWidth
                size="small"
                value={value}
                onChange={onChange}
                InputProps={{
                  startAdornment: <SearchIcon />,
                }}
                variant="outlined"
              />
            </Box>
            <Box width="30%">
              <FormControl size="small" fullWidth>
                <InputLabel>Pilih kategori</InputLabel>
                <Select label="Pilih Kategori" onChange={() => {}}>
                  <MenuItem value="Makanan">Makanan</MenuItem>
                  <MenuItem value="Minuman">Minuman</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box width="30%">
              <Button
                variant="contained"
                onClick={() => openModal()}
                startIcon={<AddIcon />}
                size="large"
                fullWidth
              >
                <Typography fontWeight="bold">Tambah Barang</Typography>
              </Button>
            </Box>
          </Stack>
        </Box>
      </Box>
    );
  };

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
          <Stack direction="row" spacing={1} marginY={3}>
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
            <Typography variant="subtitle2">
              {toRupiah(params.value)}
            </Typography>
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
        return (
          <Box width="100%" marginX={2}>
            <FormControl size="small" fullWidth>
              <InputLabel sx={{ fontWeight: "bold", color: "black" }}>
                Atur
              </InputLabel>
              <Select label="Atur" onChange={() => {}}>
                <ActionList
                  onClick={() => openModal(params.row)}
                  icon={<EditIcon />}
                  color="#45A779"
                  aksi="Edit"
                />
                <ActionList
                  onClick={() => {}}
                  icon={<DeleteIcon />}
                  color="#E11D48"
                  aksi="Delete"
                />
              </Select>
            </FormControl>
          </Box>
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
    <Box
      sx={{
        height: "100vh",
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
        "& .MuiDataGrid-columnHeaders": {
          borderRadius: 1,
          borderBottom: 0,
        },
      }}
    >
      <ThemeProvider theme={theme}>
        <StyledDataGrid
          localeText={{
            footerRowSelected: (count) =>
              count !== 1
                ? `${count.toLocaleString()} baris dipilih`
                : `${count.toLocaleString()} baris dipilih`,
            footerTotalVisibleRows: (visibleCount, totalCount) =>
              `${visibleCount.toLocaleString()} dari ${totalCount.toLocaleString()}`,
          }}
          components={{
            Toolbar: QuickSearchToolbar,
          }}
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableColumnMenu
          disableSelectionOnClick
          componentsProps={{
            toolbar: {
              value: searchText,
              onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
                requestSearch(event.target.value),
            },
            pagination: {},
          }}
        />
      </ThemeProvider>
    </Box>
  );
};

export default TabelBarang;
