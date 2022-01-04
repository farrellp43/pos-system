import { Button, Typography } from "@mui/material";
import React, { ReactNode } from "react";

interface IButtonKalkulatorProps {
  children: ReactNode;
  buttonVariant: "text" | "outlined" | "contained" | undefined;
  onClick: () => void;
}

const ButtonKalkulator = ({ children, onClick, buttonVariant }: IButtonKalkulatorProps) => {
  return (
    <Button variant={buttonVariant} onClick={onClick}>
      <Typography variant="h6">{children}</Typography>
    </Button>
  );
};

export default ButtonKalkulator;
