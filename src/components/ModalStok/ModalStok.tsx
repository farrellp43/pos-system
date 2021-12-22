import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useForm, Controller } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useStokModal } from "../../context/stokModalContext";

interface IModalStok {
  id?: number;
  namaBarang?: string;
  harga?: number;
  jumlahStok?: number;
  SKU?: string;
}

const ModalStok = (props: IModalStok) => {
  const { isOpenModal, closeModal } = useStokModal();

  const schema = yup
    .object({
      namaBarang: yup.string().required("Field Nama Barang tidak boleh kosong"),
      harga: yup.number().integer().required("Field Harga tidak boleh kosong"),
      jumlahStok: yup.number().integer().required("Field Jumlah Stok tidak boleh kosong"),
      SKU: yup.string().required("Field SKU tidak boleh kosong"),
    })
    .required();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IModalStok>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IModalStok) => {
    console.log(data);
  };

  return (
    <Dialog
      maxWidth="md"
      fullWidth={true}
      open={isOpenModal}
      onClose={closeModal}
    >
      <DialogTitle>Add</DialogTitle>
      <DialogContent dividers>
        <Controller
          name="namaBarang"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              margin="dense"
              id="namaBarang"
              label="Nama Barang"
              fullWidth
              variant="outlined"
              error={Boolean(errors.namaBarang)}
              helperText={errors.namaBarang ? errors.namaBarang.message : " "}
              {...field}
            />
          )}
          rules={{ required: "Nama barang required" }}
        />
        <Controller
          name="harga"
          control={control}
          render={({ field }) => (
            <TextField
              margin="dense"
              id="harga"
              label="Harga"
              type="number"
              fullWidth
              variant="outlined"
              error={Boolean(errors.harga)}
              helperText={errors.harga ? errors.harga.message : " "}
              {...field}
            />
          )}
          rules={{ required: "Harga required" }}
        />
        <Controller
          name="jumlahStok"
          control={control}
          render={({ field }) => (
            <TextField
              margin="dense"
              id="jumlahStok"
              label="Jumlah Stok"
              type="number"
              fullWidth
              variant="outlined"
              error={Boolean(errors.jumlahStok)}
              helperText={errors.jumlahStok ? errors.jumlahStok.message : " "}
              {...field}
            />
          )}
          rules={{ required: "Nama barang required" }}
        />
        <Controller
          name="SKU"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              margin="dense"
              id="SKU"
              label="SKU"
              type="SKU"
              fullWidth
              variant="outlined"
              error={Boolean(errors.SKU)}
              helperText={errors.SKU ? errors.SKU.message : " "}
              {...field}
            />
          )}
          rules={{ required: "SKU required" }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModal}>Cancel</Button>
        <Button onClick={handleSubmit(onSubmit)} type="submit">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalStok;
