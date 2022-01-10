import {
  Dialog,
  Divider,
  Grid,
} from "@mui/material";
import React from "react";
import { useTransaksi } from "../../context/transaksiContext";
import InfoTagihan from "../InfoTagihan/InfoTagihan";
import Kalkulator from "../Kalkulator/Kalkulator";

interface IModalBayarProps {}

const ModalBayar = (props: IModalBayarProps) => {
  const {
    isOpenModalBayar,
    closeModalBayar,
  } = useTransaksi();

  return (
    <Dialog
      maxWidth="lg"
      fullWidth
      open={isOpenModalBayar}
      onClose={closeModalBayar}
      PaperProps={{
        sx: {
          minHeight: "90vh",
          maxHeight: "90vh",
        },
      }}
    >
      <Grid container>
        <Grid item lg={6}>
          <Kalkulator />
        </Grid>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            marginRight: "-1px",
          }}
        />
        <Grid item lg={6}>
          <InfoTagihan />
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default ModalBayar;
