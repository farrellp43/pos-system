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
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <TextField
            placeholder="Cari barang..."
            fullWidth
            size="medium"
            InputProps={{
              sx: { paddingRight: 0 },
              startAdornment: <SearchIcon fontSize="small" />,
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    variant="contained"
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
        {/* <Grid container>
          <Grid item md={8}></Grid>
          <Grid item md={4}></Grid>
        </Grid> */}
        <Box
          sx={{
            overflowY: "scroll",
          }}
        >
          {originalRows && originalRows.length > 0 ? (
            originalRows.map((rows) => (
              <CardBarang
                key={rows.id}
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
