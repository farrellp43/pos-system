import { CardContent, Typography, Button, Box, TextField } from "@mui/material";
import React, { useState } from "react";
import ButtonKalkulator from "../ButtonKalkulator/ButtonKalkulator";
import "./Kalkulator.css";

interface IKalkulatorProps {}

const Kalkulator = (props: IKalkulatorProps) => {
  const [display, setDisplay] = useState<string>("0");

  const onDigitButtonClick = (digit: number) => {
    let newDisplay = display;

    if ((display === "0" && digit === 0) || display.length > 12) {
      return;
    }

    if (display !== "0") {
      newDisplay = newDisplay + digit.toString();
    } else {
      newDisplay = digit.toString();
    }

    setDisplay(newDisplay);
  };

  const onZeroButtonClick = () => {
    let value = Number(display);
    let newDisplay = value * 10;
    setDisplay(String(newDisplay));
  };

  const onTripleZeroButtonClick = () => {
    let value = Number(display);
    let newDisplay = value * 1000;
    setDisplay(String(newDisplay));
  }

  const onClearButtonClick = () => {
    setDisplay("0");
  };

  const onDelButtonClick = () => {
    let value = Number(display);
    let newDisplay = Math.floor(value / 10);
    setDisplay(String(newDisplay));
  };

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
        <Box p={2}>
          <TextField
            value={display}
            fullWidth
            inputProps={{
              style: { textAlign: "right" },
            }}
          ></TextField>
        </Box>
        <Box
          sx={{
            backgroundColor: "green",
          }}
        ></Box>

        <Box display="grid" gridTemplateColumns="1fr 1fr 1fr 1fr">
          <ButtonKalkulator onClick={() => onDigitButtonClick(1)}>
            1
          </ButtonKalkulator>
          <ButtonKalkulator onClick={() => onDigitButtonClick(2)}>
            2
          </ButtonKalkulator>
          <ButtonKalkulator onClick={() => onDigitButtonClick(3)}>
            3
          </ButtonKalkulator>
          <ButtonKalkulator onClick={onDelButtonClick}>Del</ButtonKalkulator>
          <ButtonKalkulator onClick={() => onDigitButtonClick(4)}>
            4
          </ButtonKalkulator>
          <ButtonKalkulator onClick={() => onDigitButtonClick(5)}>
            5
          </ButtonKalkulator>
          <ButtonKalkulator onClick={() => onDigitButtonClick(6)}>
            6
          </ButtonKalkulator>
          <ButtonKalkulator onClick={onClearButtonClick}>C</ButtonKalkulator>
          <ButtonKalkulator onClick={() => onDigitButtonClick(7)}>
            7
          </ButtonKalkulator>
          <ButtonKalkulator onClick={() => onDigitButtonClick(8)}>
            8
          </ButtonKalkulator>
          <ButtonKalkulator onClick={() => onDigitButtonClick(9)}>
            9
          </ButtonKalkulator>
          <Button variant="outlined" className="is-enter">
            <Typography variant="h6">Enter</Typography>
          </Button>
          <ButtonKalkulator onClick={onZeroButtonClick}>0</ButtonKalkulator>
          <Button variant="outlined" className="is-000" onClick={onTripleZeroButtonClick}>
            <Typography variant="h6">000</Typography>
          </Button>
        </Box>
      </Box>
    </CardContent>
  );
};

export default Kalkulator;
