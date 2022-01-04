import { Box, Card, Grid } from "@mui/material";
import ListBarang from "../../components/ListBarang/ListBarang";
import Kalkulator from "../../components/Kalkulator/Kalkulator";
import ModalStok from "../../components/ModalStok/ModalStok";

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
        <Grid item md={6}>
          {/* <Card variant="outlined">
          </Card> */}
            <Kalkulator />
        </Grid>
      </Grid>
      <ModalStok />
    </Box>
  );
};

export default Transaksi;
