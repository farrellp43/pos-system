import { Box, Grid, Divider } from "@mui/material";
import ListBarang from "../../components/ListBarang/ListBarang";
import ModalStok from "../../components/ModalStok/ModalStok";
import ModalDiskon from "../../components/ModalDiskon/ModalDiskon";
import ModalBayar from "../../components/ModalBayar/ModalBayar";
import ListPesan from "../../components/ListPesan/ListPesan";

interface ITransaksi {}

const Transaksi = (props: ITransaksi) => {
  return (
    <Box>
      <Grid container>
        <Grid item md={6}>
          {/* <Card variant="outlined">
          </Card> */}
          <ListBarang />
        </Grid>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            marginRight: "-1px",
          }}
        />
        <Grid item md={6}>
          {/* <Card variant="outlined">
          </Card> */}
          {/* <Kalkulator /> */}
          <ListPesan />
        </Grid>
      </Grid>
      <ModalStok />
      <ModalDiskon />
      <ModalBayar />
    </Box>
  );
};

export default Transaksi;
