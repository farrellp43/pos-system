import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import PercentIcon from "@mui/icons-material/Percent";
import { useTransaksi } from "../../context/transaksiContext";
import toRibuan from "../../utils/toRibuan";

interface IModalDiskonProps {}

const ModalDiskon = (props: IModalDiskonProps) => {
  const { totalHarga, isOpenModal, closeModalTransaksi, aturDiskon, grandTotal } =
    useTransaksi();

  return (
    <Dialog fullWidth open={isOpenModal} onClose={closeModalTransaksi}>
      <DialogTitle>Atur Diskon</DialogTitle>
      <DialogContent>
        <Box display="grid" gridTemplateRows="1fr 1fr 1fr">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6">Harga Awal</Typography>
            <Typography variant="h6">{toRibuan(totalHarga)}</Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6">Set Diskon</Typography>
            <TextField
              placeholder="Diskon"
              size="small"
              type="number"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                aturDiskon(Number(event.target.value));
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PercentIcon />
                  </InputAdornment>
                ),
                inputProps: {
                  style: { width: "50px", textAlign: "center" },
                },
              }}
            />
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6">Harga Setelah Diskon</Typography>
            <Typography variant="h6">{toRibuan(grandTotal)}</Typography>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModalTransaksi}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalDiskon;
