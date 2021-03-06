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
import ImportExportIcon from '@mui/icons-material/ImportExport';
import { withStyles } from "@mui/styles";
import { ThemeProvider } from "@mui/material/styles";
import { originalRows } from "../../constants/mock";
import toRupiah from "../../utils/toRupiah";
import LogoTokped from "../LogoTokped/LogoTokped";
import { useStokModal } from "../../context/stokModalContext";
import DropdownTable from "../DropdownTable/DropdownTable";
import { useKategoriModal } from "../../context/kategoriModalContext";

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
    "& .MuiDataGrid-iconButtonContainer": {
      visibility: "visible",
      width: "0 !important",
    },
    border: 0,
  },
})(DataGrid);

interface ITabelBarangProps {}

const CustomUnsortedIcon = () => {
  return <ImportExportIcon />;
};

interface QuickSearchToolbarProps {
  onChange: () => void;
  value: string;
}

const QuickSearchToolbar = ({ onChange, value }: QuickSearchToolbarProps) => {
  const { openModal } = useStokModal();
  const { openModalKategori } = useKategoriModal();

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
          <Box width="20%">
            <FormControl size="small" fullWidth>
              <InputLabel>Pilih kategori</InputLabel>
              <Select label="Pilih Kategori" onChange={() => {}}>
                <MenuItem value="Makanan">Makanan</MenuItem>
                <MenuItem value="Minuman">Minuman</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box width="20%">
            <Button
              variant="outlined"
              onClick={() => openModalKategori()}
              startIcon={<AddIcon />}
              size="large"
              fullWidth
            >
              <Typography fontWeight="bold">Tambah Kategori</Typography>
            </Button>
          </Box>
          <Box width="20%">
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

const TabelBarang = (props: ITabelBarangProps) => {
  const theme = useTheme();
  const [searchText, setSearchText] = useState("");
  const [rows, setRows] = useState<any[]>(originalRows);

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "No",
      headerClassName: "headerColumn",
      headerAlign: "center",
      align: "center",
      flex: 1,
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
      valueGetter: (params) => params.row.infoBarang.nama,
      renderCell: (params) => {
        return (
          <Stack direction="row" spacing={1} marginY={3}>
            <Avatar
              sx={{ bgcolor: "#6AB893", width: 50, height: 55 }}
              variant="rounded"
              alt={params.row.infoBarang.nama}
              src={params.row.infoBarang.url}
            />
            <Box>
              <Typography variant="subtitle2" fontWeight="bold">
                {params.row.infoBarang.nama}
              </Typography>
            </Box>
          </Stack>
        );
      },
      // sortComparator: (v1, v2) => v1.nama.localeCompare(v2.nama)
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
        return <DropdownTable parameter={params.row} />;
      },
    },
  ];

  const requestSearch = (searchValue: string) => {
    // const rowsNoUrl = originalRows.map(({ infoBarang, ...rest }) => ({
    //   ...rest,
    // }));
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), "i");
    const filteredRows = originalRows.filter((row: any) => {
      return Object.keys(row).some((field: any) => {
        console.log(row[field]);
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
            ColumnUnsortedIcon: CustomUnsortedIcon,
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
          }}
        />
      </ThemeProvider>
    </Box>
  );
};

export default TabelBarang;
