import { Button, Typography } from "@mui/material";
import React, { ReactNode } from "react";
// import "./ButtonKalkulator.tsx";

interface IButtonKalkulatorProps {
  children: ReactNode;
  buttonVariant: "text" | "outlined" | "contained" | undefined;
  onClick: () => void;
}

const ButtonKalkulator = ({
  children,
  onClick,
  buttonVariant,
}: IButtonKalkulatorProps) => {
  return (
    <Button
      className="calcButton"
      variant={buttonVariant}
      onClick={onClick}
      sx={{
        backgroundColor: "primary",
      }}
    >
      <Typography className="textButton" variant="h6">
        {children}
      </Typography>
    </Button>
  );
};

export default ButtonKalkulator;
