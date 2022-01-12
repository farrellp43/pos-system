import {
  Card,
  Button,
  Box,
  Stack,
  Typography,
  TextField,
  Avatar,
  Grid,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import toRibuan from "../../utils/toRibuan";
import { useTransaksi } from "../../context/transaksiContext";

interface ICardPesanProps {
  id: number;
  namaBarang: string;
  harga: number;
  url: string;
  qty: number;
}

interface ICart {
  id: number;
  namaBarang: string;
  harga: number;
  url: string;
  qty: number;
}

const CardPesan = ({ id, namaBarang, harga, url, qty }: ICardPesanProps) => {
  const { handleUpdate, handleRemove, totalHarga } = useTransaksi();
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log(count);
  }, [totalHarga, count]);

  const addToCart = (data: ICart) => {
    if (data.qty > 0) {
      handleUpdate({ ...data });
    } else if (data.qty === 0) {
      handleRemove({ ...data });
    }
  };

  const incNum = () => {
    setCount(count + 1);
    addToCart({ id, namaBarang, harga, url, qty: count + 1 });
  };

  const decNum = () => {
    if (count > 0) {
      setCount(count - 1);
      addToCart({ id, namaBarang, harga, url, qty: count - 1 });
    } else {
      setCount(0);
      addToCart({ id, namaBarang, harga, url, qty: 0 });
    }
  };

  return (
    <Card
      variant="outlined"
      sx={{
        marginBottom: 1,
        padding: 2,
      }}
    >
      <Box>
        <Stack direction="row" width="100%" spacing={2}>
          <Box width="70%">
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar
                sx={{ bgcolor: "#6AB893", width: 65, height: 70 }}
                variant="rounded"
                alt={namaBarang}
                src={url}
              />
              <Box width="100%">
                <Typography variant="h6" fontWeight="bold">
                  {namaBarang}
                </Typography>
                {/* <Box display="flex" justifyContent="space-between"> */}
                <Grid container spacing={2}>
                  <Grid item md={4}>
                    <Typography
                      variant="subtitle2"
                      color="#76747C"
                      fontWeight="bold"
                    >
                      {toRibuan(harga)}
                    </Typography>
                  </Grid>
                  <Grid item md={4}>
                    <Typography
                      variant="subtitle2"
                      color="#76747C"
                      fontWeight="bold"
                    >
                      x{count}
                    </Typography>
                  </Grid>
                  <Grid item md={4}></Grid>
                </Grid>
                {/* </Box> */}
                <Typography
                  variant="subtitle1"
                  color="primary"
                  fontWeight="bold"
                >
                  {toRibuan(harga * count)}
                </Typography>
              </Box>
            </Stack>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="30%"
          >
            <Stack direction="row" width="100%" spacing={2} alignItems="center">
              <Button
                onClick={decNum}
                variant="outlined"
                sx={{ minWidth: 30, minHeight: 30 }}
              >
                <RemoveIcon color="primary" />
              </Button>
              {/* <NumberFormat
                value={count}
                customInput={TextField}
                thousandSeparator="."
                decimalSeparator=","
                size="small"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setCount(Number(event.target.value.replace(".", "")));
                  console.log(Number(event.target.value.replace(".", "")));
                  console.log(event.target.value.replace(".", ""));
                }}
                inputProps={{
                  style: { textAlign: "center", backgroundColor: "white" },
                }}
              /> */}
              <TextField
                value={qty}
                type="number"
                size="small"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setCount(Number(event.target.value));
                  addToCart({
                    id,
                    namaBarang,
                    harga,
                    url,
                    qty: Number(event.target.value),
                  });
                }}
                inputProps={{
                  style: {
                    textAlign: "center",
                    backgroundColor: "white",
                    fontWeight: "bold",
                  },
                }}
              />
              <Button
                onClick={incNum}
                variant="contained"
                sx={{ minWidth: 30, minHeight: 30 }}
              >
                <AddIcon color="inherit" />
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Card>
  );
};

export default CardPesan;
