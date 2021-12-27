import { Button, Typography } from "@mui/material";
import React, { ReactNode } from "react";

interface IButtonKalkulatorProps {
  children: ReactNode;
}

const ButtonKalkulator = ({ children }: IButtonKalkulatorProps) => {
  return (
    <Button variant="outlined">
      <Typography variant="h6">{children}</Typography>
    </Button>
  );
};

export default ButtonKalkulator;
