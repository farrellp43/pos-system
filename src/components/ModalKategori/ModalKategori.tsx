import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useKategoriModal } from "../../context/kategoriModalContext";

interface IModalKategoriProps {}

interface IValuesKategori {
  kategori: string;
}

const schema = yup
  .object({
    kategori: yup.string().required("Kolom wajib diisi"),
  })
  .required();

const ModalKategori = (props: IModalKategoriProps) => {
  const { isOpenModalKategori, closeModalKategori } = useKategoriModal();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IValuesKategori>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IValuesKategori) => {
    console.log(data);
  };

  return (
    <Dialog
      maxWidth="md"
      fullWidth={true}
      open={isOpenModalKategori}
      onClose={closeModalKategori}
    >
      <DialogTitle sx={{ fontWeight: "bold" }}>Tambah Kategori</DialogTitle>
      <DialogContent dividers>
        <Controller
          name="kategori"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              margin="dense"
              id="kategori"
              label="Kategori Baru"
              fullWidth
              variant="outlined"
              error={Boolean(errors.kategori)}
              helperText={errors.kategori ? errors.kategori.message : " "}
              {...field}
            />
          )}
          rules={{ required: "Nama barang required" }}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={closeModalKategori}>
          <Typography variant="body2">Kembali</Typography>
        </Button>
        <Button
          variant="contained"
          onClick={handleSubmit(onSubmit)}
          type="submit"
        >
          <Typography variant="body2">Konfirmasi</Typography>
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalKategori;
