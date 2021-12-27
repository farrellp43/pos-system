import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ListBarang from "../../components/ListBarang/ListBarang";
import QuickActionUang from "../../components/QuickActionUang/QuickActionUang";
import Kalkulator from "../../components/Kalkulator/Kalkulator";

interface ITransaksi {}

const Transaksi = (props: ITransaksi) => {
  return (
    <Box
      sx={{
        m: 2,
      }}
    >
      <Grid container spacing={2}>
        <Grid item md={4}>
          <Card
            variant="outlined"
          >
            <ListBarang />
          </Card>
        </Grid>
        <Grid item md={8}>
          <Card variant="outlined">
            <Kalkulator />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Transaksi;
