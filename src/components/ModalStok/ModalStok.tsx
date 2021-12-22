import React, { useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useForm, Controller } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useStokModal } from "../../context/stokModalContext";

interface IValuesStok {
  id: number;
  namaBarang: string;
  harga: number;
  jumlahStok: number;
  SKU: string;
}

const schema = yup
  .object({
    namaBarang: yup.string().required("Kolom wajib diisi"),
    harga: yup.number().integer().required("Kolom wajib diisi"),
    jumlahStok: yup.number().integer().required("Kolom wajib diisi"),
    SKU: yup.string().required("Kolom wajib diisi"),
  })
  .required();

const ModalStok = () => {
  const { isOpenModal, closeModal, dataStok } = useStokModal();

  const initialValues = {
    id: 0,
    namaBarang: "",
    harga: 0,
    jumlahStok: 0,
    SKU: "",
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<IValuesStok>({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
  });

  const onSubmit = (data: IValuesStok) => {
    console.log(data);
  };

  useEffect(() => {
    if (isOpenModal) {
      if (dataStok) {
        reset(dataStok);
      } else {
        reset(initialValues);
      }
    }
  }, [isOpenModal, dataStok]);

  return (
    <Dialog
      maxWidth="md"
      fullWidth={true}
      open={isOpenModal}
      onClose={closeModal}
    >
      <DialogTitle>{dataStok ? "Edit" : "Add"}</DialogTitle>
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
