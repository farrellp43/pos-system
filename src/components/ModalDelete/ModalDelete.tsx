import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, DialogContentText } from "@mui/material";

interface IModalDeleteProps {
  isDialogOpened: boolean;
  handleCloseDialog: any;
}

const ModalDelete = (props: IModalDeleteProps) => {
  const handleClose = () => {
    //setOpen(false);
    props.handleCloseDialog(false);
  };

  return (
    <Dialog
      maxWidth="md"
      fullWidth={true}
      open={props.isDialogOpened}
      onClose={handleClose}
    >
      <DialogTitle>Apa anda yakin?</DialogTitle>
      <DialogContent dividers>
        <DialogContentText>
          Apakah anda yakin ingin menghapus barang ini?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          Hapus
        </Button>
        <Button variant="contained" onClick={handleClose}>
          Tidak
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalDelete;
