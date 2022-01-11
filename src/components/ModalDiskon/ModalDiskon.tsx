import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
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
  const {
    totalHarga,
    isOpenModalTransaksi,
    closeModalTransaksi,
    aturDiskon,
    grandTotal,
    diskon,
  } = useTransaksi();

  return (
    <Dialog fullWidth open={isOpenModalTransaksi} onClose={closeModalTransaksi}>
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
              value={diskon}
              size="small"
              type="number"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                aturDiskon(Number(event.target.value), "nominal"); //hanya placeholder, tolong hiraukan
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
        <Button variant="contained" onClick={closeModalTransaksi}>
          Konfirmasi
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalDiskon;
