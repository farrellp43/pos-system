import { TextField, Button, Box, Typography, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PercentIcon from "@mui/icons-material/Percent";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import React, { useState } from "react";
import { originalRows } from "../../constants/mock";
import CardBarang from "../CardBarang/CardBarang";
import { useStokModal } from "../../context/stokModalContext";
import { useTransaksi } from "../../context/transaksiContext";
import toRibuan from "../../utils/toRibuan";

interface IListBarangProps {}

// interface ICart {
//   id: number;
//   namaBarang: string;
//   harga: number;
//   qty: number;
// }

const ListBarang = (props: IListBarangProps) => {
  const { openModal } = useStokModal();
  const {
    totalHarga,
    bayar,
    kembalian,
    handleReset,
    openModalTransaksi,
    openModalBayar,
    diskon,
    grandTotal
  } = useTransaksi();
  const [nama, setNama] = useState("");
  const [barang, setBarang] = useState(originalRows);

  const handleClickOpen = () => {
    openModal();
  };

  const filter = (e: any) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = originalRows.filter((barang) => {
        return barang.namaBarang
          .toLowerCase()
          .startsWith(keyword.toLowerCase());
      });
      setBarang(results);
    } else {
      setBarang(originalRows);
    }

    setNama(keyword);
  };

  return (
    // <CardContent
    //   sx={{
    //     padding: 0,
    //   }}
    // >
    <Box
      display="grid"
      gridTemplateRows="1fr 6fr 3fr 1fr"
      sx={{
        height: "100vh",
      }}
    >
      <Box alignItems="center" margin={2}>
        <Stack direction="row" width="100%" spacing={2}>
          <Box width="40%">
            <TextField
              placeholder="Cari barang..."
              fullWidth
              size="small"
              value={nama}
              onChange={filter}
              InputProps={{
                startAdornment: <SearchIcon fontSize="small" />,
              }}
              variant="outlined"
            />
          </Box>
          <Box width="30%">
            <FormControl size="small" fullWidth>
              <InputLabel id="demo-simple-select-helper-label">
                Pilih Kategori
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                label="Pilih Kategori"
                onChange={() => {}}
              >
                <MenuItem value="Makanan">Makanan</MenuItem>
                <MenuItem value="Minuman">Minuman</MenuItem>
                <MenuItem value="Lain-lain">Lain-lain</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box width="30%">
            <Button
              variant="contained"
              onClick={handleClickOpen}
              startIcon={<AddIcon />}
              size="medium"
              fullWidth
              sx={{
                lineHeight: 2,
              }}
            >
              Barang
            </Button>
          </Box>
        </Stack>
      </Box>
      <Box
        marginX={2}
        sx={{
          overflowY: "scroll",
        }}
      >
        {barang && barang.length > 0 ? (
          barang.map((rows) => (
            <CardBarang
              key={rows.id}
              id={rows.id}
              namaBarang={rows.namaBarang}
              harga={rows.harga}
            />
          ))
        ) : (
          <Typography variant="h6">Barang tidak ditemukan</Typography>
        )}
      </Box>
      <Box padding={2} borderTop={1}>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h6">
            {diskon ? "Subtotal" : "Total Tagihan"}
          </Typography>
          <Typography variant="h6">{toRibuan(totalHarga)}</Typography>
        </Box>
        {diskon ? (
          <React.Fragment>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h6">Diskon ({diskon}%)</Typography>
              <Typography variant="h6">- {toRibuan(totalHarga - (totalHarga - (totalHarga * (diskon / 100))))}</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h6">Total Tagihan</Typography>
              <Typography variant="h6">{toRibuan(grandTotal)}</Typography>
            </Box>
          </React.Fragment>
        ) : (
          ""
        )}
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h6">Uang Yang Dibayar</Typography>
          <Typography variant="h6">{toRibuan(bayar)}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h6">Kembalian</Typography>
          <Typography variant="h6">{toRibuan(kembalian)}</Typography>
        </Box>
      </Box>
      <Box marginX={2} marginBottom={2}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Button
            variant="text"
            onClick={() => handleReset()}
            startIcon={<RestartAltIcon />}
            size="large"
            fullWidth
          >
            Reset
          </Button>
          <Button
            variant="outlined"
            onClick={() => openModalTransaksi()}
            startIcon={<PercentIcon />}
            size="large"
            fullWidth
          >
            Set Diskon
          </Button>
          <Button
            variant="contained"
            onClick={() => openModalBayar()}
            startIcon={<ReceiptIcon />}
            size="large"
            fullWidth
          >
            Bayar
          </Button>
        </Stack>
      </Box>
    </Box>
    // </CardContent>
  );
};

export default ListBarang;
