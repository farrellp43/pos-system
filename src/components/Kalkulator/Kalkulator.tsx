import { CardContent, Typography, Button, Box, TextField } from "@mui/material";
import React, { useState } from "react";
import NumberFormat from "react-number-format";
import { useTransaksi } from "../../context/transaksiContext";
import ButtonKalkulator from "../ButtonKalkulator/ButtonKalkulator";
import "./Kalkulator.css";

interface IKalkulatorProps {}

const Kalkulator = (props: IKalkulatorProps) => {
  const { hitungBayar, uangPas} = useTransaksi();
  const [display, setDisplay] = useState<string>("0");

  const onQuickActionClick = (digit: number) => {
    let newDisplay = Number(display) + digit;
    setDisplay(String(newDisplay));
  };

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
  };

  const onClearButtonClick = () => {
    setDisplay("0");
  };

  const onDelButtonClick = () => {
    let value = Number(display);
    if (value === 0) {
      setDisplay("0");
    } else {
      let newDisplay = Math.floor(value / 10);
      setDisplay(String(newDisplay));
    }
  };

  const onEnterButtonClick = () => {
    hitungBayar(Number(display));
  };

  return (
    // <CardContent>
      <Box
        display="grid"
        gridTemplateRows="1fr 1fr 4fr"
        paddingX={2}
        sx={{
          height: "90vh",
          rowGap: 1,
        }}
      >
        <Box display="flex" marginTop={2}>
          <TextField
            type="text"
            defaultValue="Rp"
            inputProps={{
              readOnly: true,
              style: {
                fontSize: "50px",
                textAlign: "center",
                width: "150px",
              },
            }}
          />
          <NumberFormat
            value={display}
            customInput={TextField}
            thousandSeparator="."
            decimalSeparator=","
            fullWidth
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              if (event.target.value === "") {
                setDisplay("0");
                return;
              }
              setDisplay(event.target.value);
            }}
            inputProps={{
              style: { fontSize: "50px", textAlign: "right" },
            }}
          />
        </Box>
        <Box
          display="grid"
          gridTemplateColumns="auto auto auto auto"
          gap={2}
          paddingY={2}
        >
          <ButtonKalkulator onClick={() => uangPas()}>
            Uang Pas
          </ButtonKalkulator>
          <ButtonKalkulator onClick={() => onQuickActionClick(1000)}>
            1.000
          </ButtonKalkulator>
          <ButtonKalkulator onClick={() => onQuickActionClick(2000)}>
            2.000
          </ButtonKalkulator>
          <ButtonKalkulator onClick={() => onQuickActionClick(5000)}>
            5.000
          </ButtonKalkulator>
          <ButtonKalkulator onClick={() => onQuickActionClick(10000)}>
            10.000
          </ButtonKalkulator>
          <ButtonKalkulator onClick={() => onQuickActionClick(20000)}>
            20.000
          </ButtonKalkulator>
          <ButtonKalkulator onClick={() => onQuickActionClick(50000)}>
            50.000
          </ButtonKalkulator>
          <ButtonKalkulator onClick={() => onQuickActionClick(100000)}>
            100.000
          </ButtonKalkulator>
        </Box>

        <Box display="grid" gridTemplateColumns="1fr 1fr 1fr 1fr" marginBottom={2}>
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
          <Button
            variant="outlined"
            className="is-enter"
            onClick={onEnterButtonClick}
          >
            <Typography variant="h6">Enter</Typography>
          </Button>
          <ButtonKalkulator onClick={onZeroButtonClick}>0</ButtonKalkulator>
          <Button
            variant="outlined"
            className="is-000"
            onClick={onTripleZeroButtonClick}
          >
            <Typography variant="h6">000</Typography>
          </Button>
        </Box>
      </Box>
    // </CardContent>
  );
};

export default Kalkulator;
