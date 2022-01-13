import React from "react";
import TabelBarang from "../../components/TabelBarang/TabelBarang";
import ModalStok from "../../components/ModalStok/ModalStok";
import Box from "@mui/material/Box";

interface IStokBarangProps {}

const StokBarang = (props: IStokBarangProps) => {
  return (
    <Box marginX={3}>
      <TabelBarang />
      <ModalStok />
    </Box>
  );
};

export default StokBarang;
