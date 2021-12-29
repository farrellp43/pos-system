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

interface ICardBarangProps {
  namaBarang: string;
  harga: number;
}

const CardBarang = ({ namaBarang, harga }: ICardBarangProps) => {
  const [count, setCount] = useState(0);

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
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Typography variant="h5" component="div">
              {namaBarang}
            </Typography>
            <Typography variant="subtitle1">{harga}</Typography>
          </Box>
          <Box
            sx={{
              width: "150px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton onClick={decNum}>
              <RemoveCircleIcon />
            </IconButton>
            <TextField
              value={count}
              size="small"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setCount(Number(event.target.value))
              }
              inputProps={{
                style: { textAlign: "center" },
              }}
            ></TextField>
            <IconButton onClick={incNum}>
              <AddCircleIcon />
            </IconButton>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardBarang;
