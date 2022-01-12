import { TextField, Button, Box, Typography, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import React, { useState } from "react";
import { originalRows } from "../../constants/mock";
import CardBarang from "../CardBarang/CardBarang";
import { useStokModal } from "../../context/stokModalContext";

interface IListBarangProps {}

// interface ICart {
//   id: number;
//   namaBarang: string;
//   harga: number;
//   qty: number;
// }

const ListBarang = (props: IListBarangProps) => {
  const { openModal } = useStokModal();
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
      gridTemplateRows="auto 1fr"
      sx={{
        height: "100vh",
      }}
    >
      <Box alignItems="center" margin={2}>
        <Stack direction="row" width="100%" spacing={2} alignItems="center">
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
                Kategori
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
              <Typography fontWeight="bold">Tambah</Typography>
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
              url={rows.url}
            />
          ))
        ) : (
          <Typography variant="h6">Barang tidak ditemukan</Typography>
        )}
      </Box>
    </Box>
    // </CardContent>
  );
};

export default ListBarang;
