import { Typography, Button, Box, TextField } from "@mui/material";
import React, { useState } from "react";
import NumberFormat from "react-number-format";
import { useTransaksi } from "../../context/transaksiContext";
import ButtonKalkulator from "../ButtonKalkulator/ButtonKalkulator";
import ButtonNumKalkulator from "../ButtonNumKalkulator/ButtonNumKalkulator";
import "./Kalkulator.css";

interface IKalkulatorProps {}

const Kalkulator = (props: IKalkulatorProps) => {
  const { hitungBayar, uangPas, diskon, totalHarga, grandTotal } = useTransaksi();
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
    setDisplay("0");
  };

  const onUangPasClick = () => {
    uangPas();
    if (diskon === 0) {
      setDisplay(String(totalHarga));
    } else {
      setDisplay(String(grandTotal))
    }
  };

  return (
    // <CardContent>
    <Box
      display="grid"
      gridTemplateRows="1fr 1fr 4fr"
      paddingX={2}
      sx={{
        height: "100vh",
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
              fontSize: "60px",
              fontWeight: "bold",
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
            style: { fontSize: "60px", fontWeight: "bold", textAlign: "right" },
          }}
        />
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="1fr 1fr 1fr 1fr"
        gap={2}
        paddingY={2}
      >
        {/* <ButtonKalkulator buttonVariant="contained" onClick={() => uangPas()}>
          Uang Pas
        </ButtonKalkulator> */}
        <Button
          variant="outlined"
          onClick={() => onUangPasClick()}
          sx={{
            backgroundColor: "#F6FBF8",
          }}
        >
          <Typography variant="h6" fontSize={16}>
            Uang Pas
          </Typography>
        </Button>
        <ButtonKalkulator
          buttonVariant="contained"
          onClick={() => onQuickActionClick(1000)}
        >
          1.000
        </ButtonKalkulator>
        <ButtonKalkulator
          buttonVariant="contained"
          onClick={() => onQuickActionClick(2000)}
        >
          2.000
        </ButtonKalkulator>
        <ButtonKalkulator
          buttonVariant="contained"
          onClick={() => onQuickActionClick(5000)}
        >
          5.000
        </ButtonKalkulator>
        <ButtonKalkulator
          buttonVariant="contained"
          onClick={() => onQuickActionClick(10000)}
        >
          10.000
        </ButtonKalkulator>
        <ButtonKalkulator
          buttonVariant="contained"
          onClick={() => onQuickActionClick(20000)}
        >
          20.000
        </ButtonKalkulator>
        <ButtonKalkulator
          buttonVariant="contained"
          onClick={() => onQuickActionClick(50000)}
        >
          50.000
        </ButtonKalkulator>
        <ButtonKalkulator
          buttonVariant="contained"
          onClick={() => onQuickActionClick(100000)}
        >
          100.000
        </ButtonKalkulator>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="1fr 1fr 1fr 1fr"
        marginBottom={2}
        gap={2}
      >
        <ButtonNumKalkulator
          buttonVariant="text"
          onClick={() => onDigitButtonClick(1)}
        >
          1
        </ButtonNumKalkulator>
        <ButtonNumKalkulator
          buttonVariant="text"
          onClick={() => onDigitButtonClick(2)}
        >
          2
        </ButtonNumKalkulator>
        <ButtonNumKalkulator
          buttonVariant="text"
          onClick={() => onDigitButtonClick(3)}
        >
          3
        </ButtonNumKalkulator>
        <ButtonKalkulator buttonVariant="contained" onClick={onDelButtonClick}>
          Del
        </ButtonKalkulator>
        <ButtonNumKalkulator
          buttonVariant="text"
          onClick={() => onDigitButtonClick(4)}
        >
          4
        </ButtonNumKalkulator>
        <ButtonNumKalkulator
          buttonVariant="text"
          onClick={() => onDigitButtonClick(5)}
        >
          5
        </ButtonNumKalkulator>
        <ButtonNumKalkulator
          buttonVariant="text"
          onClick={() => onDigitButtonClick(6)}
        >
          6
        </ButtonNumKalkulator>
        <ButtonKalkulator
          buttonVariant="contained"
          onClick={onClearButtonClick}
        >
          C
        </ButtonKalkulator>
        <ButtonNumKalkulator
          buttonVariant="text"
          onClick={() => onDigitButtonClick(7)}
        >
          7
        </ButtonNumKalkulator>
        <ButtonNumKalkulator
          buttonVariant="text"
          onClick={() => onDigitButtonClick(8)}
        >
          8
        </ButtonNumKalkulator>
        <ButtonNumKalkulator
          buttonVariant="text"
          onClick={() => onDigitButtonClick(9)}
        >
          9
        </ButtonNumKalkulator>
        <Button
          variant="contained"
          className="is-enter"
          onClick={onEnterButtonClick}
          sx={{
            backgroundColor: "primary",
          }}
        >
          <Typography variant="h6">Enter</Typography>
        </Button>
        <ButtonNumKalkulator buttonVariant="text" onClick={onZeroButtonClick}>
          0
        </ButtonNumKalkulator>
        <Button
          variant="text"
          className="is-000"
          onClick={onTripleZeroButtonClick}
          sx={{
            backgroundColor: "#F6FBF8",
          }}
        >
          <Typography variant="h6">000</Typography>
        </Button>
      </Box>
    </Box>
    // </CardContent>
  );
};

export default Kalkulator;
