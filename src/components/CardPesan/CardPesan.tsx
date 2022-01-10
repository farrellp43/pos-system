import {
  Card,
  Button,
  Box,
  Stack,
  Typography,
  TextField,
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
  qty: number;
}

interface ICart {
  id: number;
  namaBarang: string;
  harga: number;
  qty: number;
}

const CardPesan = ({ id, namaBarang, harga, qty }: ICardPesanProps) => {
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
    addToCart({ id, namaBarang, harga, qty: count + 1 });
  };

  const decNum = () => {
    if (count > 0) {
      setCount(count - 1);
      addToCart({ id, namaBarang, harga, qty: count - 1 });
    } else {
      setCount(0);
      addToCart({ id, namaBarang, harga, qty: 0 });
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
          <Box width="50%">
            <Typography variant="h6" component="div">
              {namaBarang}
            </Typography>
            <Typography variant="subtitle1">{toRibuan(harga)}</Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="50%"
          >
            <Stack direction="row" width="100%" spacing={2} alignItems="center">
              <Button onClick={decNum} variant="outlined">
                <RemoveIcon color="primary" sx={{ fontSize: 30 }} />
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
                    qty: Number(event.target.value),
                  });
                }}
                inputProps={{
                  style: { textAlign: "center", backgroundColor: "white" },
                }}
              />
              <Button
                onClick={incNum}
                variant="contained"
                sx={{
                  color: count > 0 ? "white" : "primary",
                }}
              >
                <AddIcon color="inherit" sx={{ fontSize: 30 }} />
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Card>
  );
};

export default CardPesan;
