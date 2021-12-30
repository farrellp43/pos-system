import {
  Box,
  Card,
  Grid,
} from "@mui/material";
import ListBarang from "../../components/ListBarang/ListBarang";
import Kalkulator from "../../components/Kalkulator/Kalkulator";
import ModalStok from "../../components/ModalStok/ModalStok";

interface ITransaksi {}

const Transaksi = (props: ITransaksi) => {
  return (
    <Box
      sx={{
        m: 2,
      }}
    >
      <Grid container spacing={2}>
        <Grid item md={5}>
          <Card
            variant="outlined"
          >
            <ListBarang />
          </Card>
        </Grid>
        <Grid item md={7}>
          <Card variant="outlined">
            <Kalkulator />
          </Card>
        </Grid>
      </Grid>
      <ModalStok />
    </Box>
  );
};

export default Transaksi;
