import {
  Card,
  CardContent,
  Box,
  Typography,
  IconButton,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import NumberFormat from "react-number-format";
import toRibuan from "../../utils/toRibuan";

interface ICardBarangProps {
  namaBarang: string;
  harga: number;
}

const CardBarang = ({ namaBarang, harga }: ICardBarangProps) => {
  const [count, setCount] = useState(0);
  const [jumlahHarga, setJumlahHarga] = useState();

  const incNum = () => {
    setCount(count + 1);
  };
  const decNum = () => {
    if (count > 0) setCount(count - 1);
    else {
      setCount(0);
    }
  };

  return (
    <Card
      variant="outlined"
      sx={{
        marginBottom: "2px",
      }}
    >
      <CardContent
        sx={{
          backgroundColor: count > 0 ? "#1976D2" : "white",
        }}
      >
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Typography
              variant="h5"
              component="div"
              color={count > 0 ? "white" : "black"}
            >
              {namaBarang}
            </Typography>
            <Typography
              variant="subtitle1"
              color={count > 0 ? "white" : "#545E6A"}
            >
              {toRibuan(harga)}
            </Typography>
          </Box>
          <Box
            sx={{
              width: "200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton
              onClick={decNum}
              sx={{
                color: count > 0 ? "white" : "#1976D2",
              }}
            >
              <RemoveCircleIcon sx={{ fontSize: 50 }} />
            </IconButton>
            <NumberFormat
              value={count}
              customInput={TextField}
              thousandSeparator="."
              decimalSeparator=","
              size="small"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setCount(Number(event.target.value))
              }
              inputProps={{
                maxlength: 3,
                style: { textAlign: "center", backgroundColor: "white" },
              }}
            />
            <IconButton
              onClick={incNum}
              sx={{
                color: count > 0 ? "white" : "#1976D2",
              }}
            >
              <AddCircleIcon sx={{ fontSize: 50 }} />
            </IconButton>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardBarang;
