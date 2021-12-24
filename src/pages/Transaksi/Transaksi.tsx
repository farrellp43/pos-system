import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ListBarang from "../../components/ListBarang/ListBarang";
import QuickActionUang from "../../components/QuickActionUang/QuickActionUang";

interface ITransaksi {}

const Transaksi = (props: ITransaksi) => {
  return (
    <Box
      sx={{
        m: 2,
      }}
    >
      <Grid container spacing={2}>
        <Grid item md={4}>
          <Card
            variant="outlined"
          >
            <ListBarang />
          </Card>
        </Grid>
        <Grid item md={8}>
          <Card variant="outlined">
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Word of the Day
              </Typography>
              <Typography variant="h5" component="div">
                benevolent
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Transaksi;
