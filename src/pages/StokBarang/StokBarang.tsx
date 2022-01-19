import React from "react";
import TabelBarang from "../../components/TabelBarang/TabelBarang";
import ModalStok from "../../components/ModalStok/ModalStok";
import Box from "@mui/material/Box";
import ModalKategori from "../../components/ModalKategori/ModalKategori";

interface IStokBarangProps {}

const StokBarang = (props: IStokBarangProps) => {
  return (
    <Box marginX={3}>
      <TabelBarang />
      <ModalStok />
      <ModalKategori />
    </Box>
  );
};

export default StokBarang;
