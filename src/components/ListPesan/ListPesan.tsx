import { Box, Button, Stack, Divider, Typography } from "@mui/material";
import React from "react";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { useTransaksi } from "../../context/transaksiContext";
import toRibuan from "../../utils/toRibuan";
import CardPesan from "../CardPesan/CardPesan";

interface IListPesanProps {}

const ListPesan = (props: IListPesanProps) => {
  const { totalHarga, cart, openModalBayar, handleReset } = useTransaksi();

  return (
    <Box
      display="grid"
      gridTemplateRows="auto 1fr auto auto"
      sx={{
        height: "100vh",
      }}
    >
      <Box margin={2}>
        <Typography variant="h5">Barang yang Dipesan</Typography>
      </Box>
      <Box
        marginX={2}
        sx={{
          overflowY: "scroll",
        }}
      >
        {cart ? (
          cart.map((rows) => (
            <CardPesan
              key={rows.id}
              id={rows.id}
              namaBarang={rows.namaBarang}
              harga={rows.harga}
              qty={rows.qty}
            />
          ))
        ) : (
          <Typography variant="h6">Barang tidak ditemukan</Typography>
        )}
      </Box>
      <Divider />
      <Box padding={2}>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h6">Subtotal Harga</Typography>
          <Typography variant="h6">{toRibuan(totalHarga)}</Typography>
        </Box>
        {/* {diskon ? (
          <React.Fragment>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h6">Diskon ({diskon}%)</Typography>
              <Typography variant="h6">
                -{" "}
                {toRibuan(
                  totalHarga - (totalHarga - totalHarga * (diskon / 100))
                )}
              </Typography>
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
        </Box> */}
      </Box>
      <Box marginX={2} marginBottom={2}>
        <Stack direction="row" spacing={2} alignItems="center">
          {/* <Button
            variant="outlined"
            onClick={() => openModalTransaksi()}
            startIcon={<PercentIcon />}
            size="large"
            fullWidth
          >
            Set Diskon
          </Button> */}
          <Button
            variant="contained"
            onClick={() => openModalBayar()}
            // startIcon={<ReceiptIcon />}
            size="large"
            fullWidth
          >
            Bayar
          </Button>
          <Button
            variant="text"
            onClick={() => handleReset()}
            startIcon={<RestartAltIcon />}
            size="large"
            fullWidth
          >
            Reset
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ListPesan;
