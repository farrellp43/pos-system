import React, { Fragment } from "react";
import TabelData from "../../components/TabelData/TabelData";
import ModalStok from "../../components/ModalStok/ModalStok";
import Box from "@mui/material/Box";

interface IStokBarangProps {}

const StokBarang = (props: IStokBarangProps) => {
  return (
    <Box
      sx={{
        m: 3,
      }}
    >
      <TabelData />
      <ModalStok />
    </Box>
  );
};

export default StokBarang;
