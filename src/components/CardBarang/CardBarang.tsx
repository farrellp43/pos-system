import { Card, Button, Box, Typography } from "@mui/material";
import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import toRibuan from "../../utils/toRibuan";
import { useTransaksi } from "../../context/transaksiContext";

interface ICardBarangProps {
  id: number;
  namaBarang: string;
  harga: number;
}

// interface ICart {
//   id: number;
//   namaBarang: string;
//   harga: number;
//   qty: number;
// }

const CardBarang = ({ id, namaBarang, harga }: ICardBarangProps) => {
  const { addToCart, cart } = useTransaksi();

  // useEffect(() => {
  //   console.log(cart);
  // }, [cart]);

  return (
    <Card
      variant="outlined"
      sx={{
        marginBottom: 1,
        padding: 2,
      }}
    >
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Typography variant="h6" component="div">
            {namaBarang}
          </Typography>
          <Typography variant="subtitle1">{toRibuan(harga)}</Typography>
        </Box>
        <Box display="flex" alignItems="center">
          {/* <Button onClick={decNum} variant="outlined">
                <RemoveIcon color="primary" sx={{ fontSize: 30 }} />
              </Button> */}
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
          {/* <TextField
                value={count}
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
              /> */}
          <Button
            disabled={cart.findIndex((c) => c.id === id) >= 0}
            variant="contained"
            onClick={() =>
              addToCart({
                id,
                namaBarang,
                harga,
                qty: 1,
              })
            }
            startIcon={<AddShoppingCartIcon />}
          >
            Pesan
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default CardBarang;
