import React, { Fragment } from "react";
import TabelData from "../../components/TabelData/TabelData";
import ModalStok from "../../components/ModalStok/ModalStok";

interface IStokBarangProps {}

const StokBarang = (props: IStokBarangProps) => {
  return (
    <Fragment>
      <TabelData />
      <ModalStok />
    </Fragment>
  );
};

export default StokBarang;
