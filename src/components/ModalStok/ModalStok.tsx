import React, { useEffect, useMemo, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useStokModal } from "../../context/stokModalContext";

interface IValuesStok {
  id: number;
  namaBarang: string;
  harga: number;
  jumlahStok: number;
  kategori: string;
  SKU: string;
}

const schema = yup
  .object({
    namaBarang: yup.string().required("Kolom wajib diisi"),
    harga: yup.number().integer().required("Kolom wajib diisi"),
    jumlahStok: yup.number().integer().required("Kolom wajib diisi"),
    kategori: yup.string().required("Kolom wajib diisi"),
    SKU: yup.string().required("Kolom wajib diisi"),
  })
  .required();

const ModalStok = () => {
  const { isOpenModal, closeModal, dataStok } = useStokModal();
  const [toggled, setToggled] = useState(false);
  const [checked, setChecked] = useState(true);

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToggled(event.target.checked);
  };

  const initialValues = useMemo(
    () => ({
      id: 0,
      namaBarang: "",
      harga: 0,
      jumlahStok: 0,
      kategori: "",
      SKU: "",
    }),
    []
  );

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
  }, [isOpenModal, dataStok, reset, initialValues]);

  return (
    <Dialog
      maxWidth="md"
      fullWidth={true}
      open={isOpenModal}
      onClose={closeModal}
    >
      <DialogTitle sx={{ fontWeight: "bold" }}>
        {dataStok ? "Ubah Barang" : "Tambah Barang"}
      </DialogTitle>
      <DialogContent dividers>
        <Controller
          name="namaBarang"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              // margin="normal"
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
        <Box display="flex" justifyContent="space-between" width="60%" mb={2}>
          <Box>
            <Typography variant="body1">Kategori</Typography>
            <Typography variant="body2" color="#545E6A">
              Cek jika ingin menambah kategori baru.
            </Typography>
          </Box>
          <Box>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={checked} onChange={handleCheck} />}
                label="Tambah kategori baru"
              />
            </FormGroup>
          </Box>
        </Box>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <FormControl
              // margin="normal"
              fullWidth
              disabled={checked ? true : false}
            >
              <InputLabel error={Boolean(errors.kategori)}>Pilih kategori</InputLabel>
              <Controller
                control={control}
                name="kategori"
                render={({ field: { onChange, value } }) => (
                  <Select
                    label="Pilih kategori"
                    onChange={onChange}
                    value={value}
                    error={Boolean(errors.kategori)}
                  >
                    <MenuItem value="Makanan">Makanan</MenuItem>
                    <MenuItem value="Minuman">Minuman</MenuItem>
                  </Select>
                )}
              />
              <FormHelperText error={Boolean(errors.kategori)}>
                {errors.kategori ? errors.kategori.message : " "}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item md={6}>
            {checked ? (
              // <FormControl fullWidth>
                <Controller
                  name="kategori"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      // margin="normal"
                      id="kategori"
                      label="Kategori"
                      fullWidth
                      variant="outlined"
                      error={Boolean(errors.kategori)}
                      helperText={
                        errors.kategori ? errors.kategori.message : " "
                      }
                      {...field}
                    />
                  )}
                  rules={{ required: "Kategori required" }}
                />
              // </FormControl>
            ) : (
              ""
            )}
          </Grid>
        </Grid>
        <Controller
          name="harga"
          control={control}
          render={({ field }) => (
            <TextField
              // margin="normal"
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
          name="SKU"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              // margin="normal"
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
        <Box display="flex" justifyContent="space-between" width="60%" mb={2}>
          <Box>
            <Typography variant="body1">Stok</Typography>
            <Typography variant="body2" color="#545E6A">
              Nonaktifkan jika tidak membutuhkan stok.
            </Typography>
          </Box>
          <Box>
            <FormGroup>
              <FormControlLabel
                control={<Switch checked={toggled} onChange={handleChange} />}
                label={toggled ? "Aktif" : "Tidak Aktif"}
              />
            </FormGroup>
          </Box>
        </Box>
        {toggled ? (
          <Controller
            name="jumlahStok"
            control={control}
            render={({ field }) => (
              <TextField
                // margin="normal"
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
            rules={{ required: "Jumlah required" }}
          />
        ) : (
          ""
        )}
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={closeModal}>
          Kembali
        </Button>
        <Button
          variant="contained"
          onClick={handleSubmit(onSubmit)}
          type="submit"
        >
          Konfirmasi
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalStok;
