import { CardContent, Typography, Button, Box, TextField } from "@mui/material";
import React from "react";
import ButtonKalkulator from "../ButtonKalkulator/ButtonKalkulator";
import "./Kalkulator.css";

interface IKalkulatorProps {}

const Kalkulator = (props: IKalkulatorProps) => {
  return (
    <CardContent>
      <Box
        display="grid"
        gridTemplateRows="1fr 1.5fr 4fr"
        sx={{
          height: "80vh",
          rowGap: 1,
        }}
      >
        <Box
          sx={{
            backgroundColor: "red",
          }}
        ></Box>
        <Box
          sx={{
            backgroundColor: "green",
          }}
        ></Box>

        <Box display="grid" gridTemplateColumns="1fr 1fr 1fr 1fr">
          <ButtonKalkulator>1</ButtonKalkulator>
          <ButtonKalkulator>2</ButtonKalkulator>
          <ButtonKalkulator>3</ButtonKalkulator>
          <ButtonKalkulator>Del</ButtonKalkulator>
          <ButtonKalkulator>4</ButtonKalkulator>
          <ButtonKalkulator>5</ButtonKalkulator>
          <ButtonKalkulator>6</ButtonKalkulator>
          <ButtonKalkulator>C</ButtonKalkulator>
          <ButtonKalkulator>7</ButtonKalkulator>
          <ButtonKalkulator>8</ButtonKalkulator>
          <ButtonKalkulator>9</ButtonKalkulator>
          <Button variant="outlined" className="is-enter">
            <Typography variant="h6">Enter</Typography>
          </Button>
          <ButtonKalkulator>0</ButtonKalkulator>
          <Button variant="outlined" className="is-000">
            <Typography variant="h6">000</Typography>
          </Button>
        </Box>
      </Box>
    </CardContent>
  );
};

export default Kalkulator;
