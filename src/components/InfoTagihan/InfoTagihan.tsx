import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useTransaksi } from "../../context/transaksiContext";
import toRibuan from "../../utils/toRibuan";

interface IInfoTagihanProps {}

type ToggleDiskon = "nominal" | "persentase";

const InfoTagihan = (props: IInfoTagihanProps) => {
  const {
    totalHarga,
    diskon,
    aturDiskon,
    grandTotal,
    bayar,
    kembalian,
    closeModalBayar,
  } = useTransaksi();
  const [toggleDiskon, setToggleDiskon] = useState<ToggleDiskon>("nominal");
  const [display, setDisplay] = useState(0);

  const pilihNominal = () => {
    setToggleDiskon("nominal");
    setDisplay(0);
    aturDiskon(0, toggleDiskon);
  };

  const pilihPersentase = () => {
    setToggleDiskon("persentase");
    setDisplay(0);
    aturDiskon(0, toggleDiskon);
  };

  return (
    <Box
      display="grid"
      gridTemplateRows="auto 1fr auto"
      sx={{
        height: "90vh",
      }}
    >
      <Box marginLeft={3} marginRight={4} marginTop={4}>
        <Typography variant="h5" fontWeight="bold" marginBottom={1}>
          Set Diskon Harga
        </Typography>
        <Grid container alignItems="center">
          <Grid item lg={6}>
            <Stack direction="row" spacing={3}>
              <Button
                variant={toggleDiskon === "nominal" ? "contained" : "outlined"}
                onClick={() => pilihNominal()}
              >
                <Typography>Nominal</Typography>
              </Button>
              <Button
                variant={
                  toggleDiskon === "persentase" ? "contained" : "outlined"
                }
                onClick={() => pilihPersentase()}
              >
                <Typography>Presentase</Typography>
              </Button>
            </Stack>
          </Grid>
          <Grid item lg={6}>
            <TextField
              fullWidth
              size="small"
              value={display}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setDisplay(Number(event.target.value));
                aturDiskon(Number(event.target.value), toggleDiskon);
              }}
              inputProps={{
                style: {
                  fontWeight: "bold",
                  textAlign: "right",
                },
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <Box marginLeft={3} marginRight={4} paddingTop={4}>
        <Typography variant="h5" fontWeight="bold" marginBottom={1}>
          Rincian Transaksi
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Subtotal Harga</Typography>
          <Typography variant="h6">{toRibuan(totalHarga)}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Potongan Diskon</Typography>
          <Typography variant="h6">{toRibuan(diskon)}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Total Tagihan</Typography>
          <Typography variant="h6">{toRibuan(grandTotal)}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Uang yang Dibayar</Typography>
          <Typography variant="h6">{toRibuan(bayar)}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Kembalian</Typography>
          <Typography variant="h6">{toRibuan(kembalian)}</Typography>
        </Box>
      </Box>
      <Box marginLeft={3} marginRight={4} marginBottom={4}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Button
            variant="contained"
            onClick={() => {}}
            // startIcon={<ReceiptIcon />}
            size="large"
            fullWidth
          >
            <Typography>Bayar</Typography>
          </Button>
          <Button
            variant="outlined"
            onClick={() => closeModalBayar()}
            size="large"
            fullWidth
          >
            <Typography>Kembali</Typography>
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default InfoTagihan;
