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
    hitungBayar,
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

  const handleClose = () => {
    setDisplay(0);
    aturDiskon(0, toggleDiskon);
    hitungBayar(0);
    closeModalBayar();
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
            <Stack direction="row" spacing={1}>
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
        <Grid container alignItems="center">
          <Grid item lg={6}>
            <Typography variant="subtitle1" color="#76747C" fontWeight={600}>
              Subtotal Harga
            </Typography>
          </Grid>
          <Grid item lg={6}>
            <Box display="flex" justifyContent="space-between" paddingX={1}>
              <Typography variant="h6" fontWeight="bold">
                Rp.
              </Typography>
              <Typography variant="h6" fontWeight="bold">
                {toRibuan(totalHarga)}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container alignItems="center" marginTop={1}>
          <Grid item lg={6}>
            <Typography variant="subtitle1" color="#76747C" fontWeight={600}>
              Potongan Diskon
            </Typography>
          </Grid>
          <Grid item lg={6}>
            <Box display="flex" justifyContent="space-between" bgcolor="#FFF5EC" paddingX={1}>
              <Typography variant="h6" color="#FB923C" fontWeight="bold">
                Rp.
              </Typography>
              <Typography variant="h6" color="#FB923C" fontWeight="bold">
                {toRibuan(diskon)}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container alignItems="center" marginTop={1}>
          <Grid item lg={6}>
            <Typography variant="subtitle1" color="#76747C" fontWeight={600}>
              Total Tagihan
            </Typography>
          </Grid>
          <Grid item lg={6}>
            <Box display="flex" justifyContent="space-between" bgcolor="#E8F6ED" paddingX={1}>
              <Typography variant="h6" color="primary" fontWeight="bold">
                Rp.
              </Typography>
              <Typography variant="h6" color="primary" fontWeight="bold">
                {toRibuan(grandTotal)}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container alignItems="center" marginTop={1}>
          <Grid item lg={6}>
            <Typography variant="subtitle1" color="#76747C" fontWeight={600}>
              Uang yang Dibayar
            </Typography>
          </Grid>
          <Grid item lg={6}>
            <Box display="flex" justifyContent="space-between" bgcolor="#FFF5EC" paddingX={1}>
              <Typography variant="h6" color="#FB923C" fontWeight="bold">
                Rp.
              </Typography>
              <Typography variant="h6" color="#FB923C" fontWeight="bold">
                {toRibuan(bayar)}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container alignItems="center" marginTop={1}>
          <Grid item lg={6}>
            <Typography variant="subtitle1" color="#76747C" fontWeight={600}>
              Kembalian
            </Typography>
          </Grid>
          <Grid item lg={6}>
            <Box display="flex" justifyContent="space-between" bgcolor="#FCEAEA" paddingX={1}>
              <Typography variant="h6" color="#DC2626" fontWeight="bold">
                Rp.
              </Typography>
              <Typography variant="h6" color="#DC2626" fontWeight="bold">
                {toRibuan(kembalian)}
              </Typography>
            </Box>
          </Grid>
        </Grid>
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
            onClick={() => handleClose()}
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
