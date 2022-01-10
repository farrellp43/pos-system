import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useTransaksi } from "../../context/transaksiContext";
import toRibuan from "../../utils/toRibuan";

interface IInfoTagihanProps {}

const InfoTagihan = (props: IInfoTagihanProps) => {
  const { totalHarga, diskon, grandTotal, bayar, kembalian, closeModalBayar } = useTransaksi();

  return (
    <Box
      display="grid"
      gridTemplateRows="auto 1fr auto"
      sx={{
        height: "90vh",
      }}
    >
      <Box margin={2} paddingTop={2}>
        <Typography variant="h5" fontWeight="bold" marginBottom={1}>
          Set Diskon Harga
        </Typography>
        <Grid container alignItems="center">
          <Grid item lg={6}>
            <Stack direction="row" spacing={3}>
              <Button variant="outlined">Nominal</Button>
              <Button variant="outlined">Persentase</Button>
            </Stack>
          </Grid>
          <Grid item lg={6}>
            <TextField fullWidth size="small" />
          </Grid>
        </Grid>
      </Box>
      <Box marginX={2}>
        <Typography variant="h5" fontWeight="bold" marginBottom={1}>
          Rincian Transaksi
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Subtotal Harga</Typography>
          <Typography variant="h6">{toRibuan(totalHarga)}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Potongan Diskon</Typography>
          <Typography variant="h6">
            {toRibuan(totalHarga - (totalHarga - totalHarga * (diskon / 100)))}
          </Typography>
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
      <Box margin={2}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Button
            variant="contained"
            onClick={() => {}}
            // startIcon={<ReceiptIcon />}
            size="large"
            fullWidth
          >
            Bayar
          </Button>
          <Button variant="outlined" onClick={() => closeModalBayar()} size="large" fullWidth>
            Kembali
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default InfoTagihan;
