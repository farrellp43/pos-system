import { Box, Button, Stack, Divider, Typography } from "@mui/material";
import React from "react";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { useTransaksi } from "../../context/transaksiContext";
import toRupiah from "../../utils/toRupiah";
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
        <Typography variant="h5" fontWeight="bold">
          Barang yang Dipesan
        </Typography>
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
              url={rows.url}
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
          <Typography variant="subtitle1" color="#76747C" fontWeight={600}>
            Subtotal Harga
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            {toRupiah(totalHarga)}
          </Typography>
        </Box>
        {/* {diskon ? (
          <React.Fragment>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h6">Diskon ({diskon}%)</Typography>
              <Typography variant="h6">
                -{" "}
                {toRupiah(
                  totalHarga - (totalHarga - totalHarga * (diskon / 100))
                )}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h6">Total Tagihan</Typography>
              <Typography variant="h6">{toRupiah(grandTotal)}</Typography>
            </Box>
          </React.Fragment>
        ) : (
          ""
        )}
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h6">Uang Yang Dibayar</Typography>
          <Typography variant="h6">{toRupiah(bayar)}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h6">Kembalian</Typography>
          <Typography variant="h6">{toRupiah(kembalian)}</Typography>
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
            <Typography fontWeight="bold">Bayar</Typography>
          </Button>
          <Button
            variant="outlined"
            onClick={() => handleReset()}
            startIcon={<RestartAltIcon />}
            size="large"
            fullWidth
          >
            <Typography fontWeight="bold">Kosongkan</Typography>
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ListPesan;
