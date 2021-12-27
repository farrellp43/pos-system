import {
  Grid,
  TextField,
  Button,
  CardContent,
  Box,
  Typography,
  Card,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { originalRows } from "../../constants/mock";

interface IListBarangProps {}

const ListBarang = (props: IListBarangProps) => {
  return (
    <CardContent>
      <Box
        display="grid"
        gridTemplateRows="1fr 6fr 1fr"
        sx={{
          height: "80vh",
        }}
      >
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
        <Box
          sx={{
            overflowY: "scroll",
          }}
        >
          {originalRows && originalRows.length > 0 ? (
            originalRows.map((rows) => (
              // <li key={rows.id}>
              //   <span>{rows.id}</span>
              //   <span>{rows.namaBarang}</span>
              //   <span>{rows.harga}</span>
              // </li>
              <Card key={rows.id} variant="outlined" sx={{
                marginBottom: "2px"
              }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {rows.namaBarang}
                  </Typography>
                  <Typography variant="subtitle1">
                    {rows.harga}
                  </Typography>
                </CardContent>
              </Card>
            ))
          ) : (
            <h1>Barang tidak ditemukan!</h1>
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
