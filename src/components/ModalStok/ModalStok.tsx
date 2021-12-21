import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, TextField } from "@mui/material";
import { useStokModal } from "../../context/stokModalContext";

interface IModalStok {}

const ModalStok = (props: IModalStok) => {
  const {isOpenModal, closeModal } = useStokModal();

  return (
    <Dialog
      maxWidth="md"
      fullWidth={true}
      open={isOpenModal}
      onClose={closeModal}
    >
      <DialogTitle>Add</DialogTitle>
      <DialogContent dividers>
        <TextField
          autoFocus
          margin="dense"
          id="namaBarang"
          label="Nama Barang"
          type="namaBarang"
          fullWidth
          variant="outlined"
        />
        <TextField
          margin="dense"
          id="harga"
          label="Harga"
          type="number"
          fullWidth
          variant="outlined"
        />
        <TextField
          margin="dense"
          id="jumlahStok"
          label="Jumlah Stok"
          type="number"
          fullWidth
          variant="outlined"
        />
        <TextField
          margin="dense"
          id="SKU"
          label="SKU"
          type="SKU"
          fullWidth
          variant="outlined"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModal}>Cancel</Button>
        <Button onClick={closeModal}>Confirm</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalStok;
