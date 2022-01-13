import React from "react";
import TabelData from "../../components/TabelData/TabelData";
import TabelBarang from "../../components/TabelBarang/TabelBarang";
import ModalStok from "../../components/ModalStok/ModalStok";
import Box from "@mui/material/Box";

interface IStokBarangProps {}

const StokBarang = (props: IStokBarangProps) => {
  return (
    <Box margin={2}>
      {/* <TabelData /> */}
      <TabelBarang />
      <ModalStok />
    </Box>
  );
};

export default StokBarang;
