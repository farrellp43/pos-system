import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  DialogActions,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Divider,
} from "@mui/material";
import React from "react";
import { useTransaksi } from "../../context/transaksiContext";
import toRibuan from "../../utils/toRibuan";

interface IModalBayarProps {}

const ModalBayar = (props: IModalBayarProps) => {
  const {
    isOpenModalBayar,
    closeModalBayar,
    totalHarga,
    diskon,
    grandTotal,
    bayar,
    kembalian,
  } = useTransaksi();

  return (
    <Dialog fullWidth open={isOpenModalBayar} onClose={closeModalBayar}>
      <DialogContent>
        <Box justifyContent="space-between">
          <Box display="grid" gridTemplateRows="1fr 1fr 1fr">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6">Subtotal</Typography>
              <Typography variant="h6">{toRibuan(totalHarga)}</Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6">Diskon ({diskon}%)</Typography>
              <Typography variant="h6">
                -{" "}
                {toRibuan(
                  totalHarga - (totalHarga - totalHarga * (diskon / 100))
                )}
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6">Total Tagihan</Typography>
              <Typography variant="h6">{toRibuan(grandTotal)}</Typography>
            </Box>
          </Box>
          <Divider />
          <Box display="grid" gridTemplateRows="1fr 1fr">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6">Uang Yang Dibayar</Typography>
              <Typography variant="h6">{toRibuan(bayar)}</Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6">Kembalian</Typography>
              <Typography variant="h6">{toRibuan(kembalian)}</Typography>
            </Box>
          </Box>
          <Box>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Print struk"
              />
            </FormGroup>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={closeModalBayar}>
          Batal
        </Button>
        <Button variant="contained" onClick={() => {}}>
          Konfirmasi
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalBayar;
