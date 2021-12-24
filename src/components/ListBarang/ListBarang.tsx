import {
  Grid,
  TextField,
  Button,
  CardContent,
  Box,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { originalRows } from "../../constants/mock";

interface IListBarangProps {}

const ListBarang = (props: IListBarangProps) => {
  return (
    <CardContent
      sx={{
        minHeight: "85vh",
      }}
    >
      <Grid
        container
        direction="column"
        spacing={2}
        alignItems="stretch"
      >
        <Grid item md={3}>
          <Grid container>
            <Grid item md={8}>
              <TextField
                placeholder="Cari barang..."
                InputProps={{
                  startAdornment: <SearchIcon fontSize="small" />,
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item md={4}>
              <Button variant="contained" size="small">
                Tambah Barang
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md="auto">
          <Box
            sx={{
              overflowY: "scroll",
            }}
          >
            {originalRows && originalRows.length > 0 ? (
              originalRows.map((rows) => (
                <li key={rows.id}>
                  <span>{rows.id}</span>
                  <span>{rows.namaBarang}</span>
                  <span>{rows.harga}</span>
                </li>
              ))
            ) : (
              <h1>Barang tidak ditemukan!</h1>
            )}
          </Box>
        </Grid>
        <Grid item md={3}>
          <Box>
            <Typography variant="h6">Total Harga</Typography>
          </Box>
        </Grid>
      </Grid>
    </CardContent>
  );
};

export default ListBarang;
