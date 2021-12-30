import {
  Grid,
  TextField,
  Button,
  CardContent,
  Box,
  Typography,
  Card,
  IconButton,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import React, { useState } from "react";
import { originalRows } from "../../constants/mock";
import CardBarang from "../CardBarang/CardBarang";
import { useStokModal } from "../../context/stokModalContext";
import { useTransaksi } from "../../context/transaksiContext";

interface IListBarangProps {}

interface ICart {
  id: number;
  namaBarang: string;
  harga: number;
  qty: number;
}

const ListBarang = (props: IListBarangProps) => {
  const [nama, setNama] = useState("");
  const [barang, setBarang] = useState(originalRows);
  const [totalHarga, serTotalHarga] = useState(0);
  const { openModal } = useStokModal();

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
    <CardContent>
      <Box
        display="grid"
        gridTemplateRows="1fr 6fr 1fr"
        sx={{
          height: "80vh",
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <TextField
            placeholder="Cari barang..."
            fullWidth
            size="medium"
            value={nama}
            onChange={filter}
            InputProps={{
              sx: { paddingRight: 0 },
              startAdornment: <SearchIcon fontSize="small" />,
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    variant="contained"
                    onClick={handleClickOpen}
                    startIcon={<AddIcon />}
                    size="large"
                    sx={{
                      lineHeight: 2.7,
                    }}
                  >
                    Barang
                  </Button>
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
        </Box>
        <Box
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
        <Box>
          <Typography variant="h6">Total Harga</Typography>
        </Box>
      </Box>
    </CardContent>
  );
};

export default ListBarang;
