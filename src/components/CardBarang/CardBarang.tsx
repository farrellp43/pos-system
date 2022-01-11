import { Avatar, Card, Button, Box, Typography, Stack } from "@mui/material";
import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import toRibuan from "../../utils/toRibuan";
import { useTransaksi } from "../../context/transaksiContext";

interface ICardBarangProps {
  id: number;
  namaBarang: string;
  harga: number;
  url: string;
}

// interface ICart {
//   id: number;
//   namaBarang: string;
//   harga: number;
//   qty: number;
// }

const CardBarang = ({ id, namaBarang, harga, url }: ICardBarangProps) => {
  const { addToCart, cart } = useTransaksi();

  // useEffect(() => {
  //   console.log(url);
  // }, [cart, url]);

  return (
    <Card
      variant="outlined"
      sx={{
        marginBottom: 1,
        padding: 2,
      }}
    >
      <Box display="flex" justifyContent="space-between">
        {/* <Box display="flex" alignItems="center"> */}
        <Stack direction="row" spacing={1} alignItems="center">
          <Avatar
            sx={{ bgcolor: "#6AB893", width: 65, height: 70 }}
            variant="rounded"
            alt={namaBarang}
            src={url}
          />
          <Box>
            <Typography variant="h6" fontWeight="bold">
              {namaBarang}
            </Typography>
            <Typography variant="subtitle1">{toRibuan(harga)}</Typography>
          </Box>
        </Stack>
        {/* </Box> */}
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
                url,
                qty: 1,
              })
            }
            startIcon={<AddShoppingCartIcon />}
          >
            <Typography fontWeight="bold">Pesan</Typography>
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default CardBarang;
