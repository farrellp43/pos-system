import { Button, Typography } from "@mui/material";
import React, { ReactNode } from "react";

interface IButtonKalkulatorProps {
  children: ReactNode;
  onClick: () => void;
}

const ButtonKalkulator = ({ children, onClick }: IButtonKalkulatorProps) => {
  return (
    <Button variant="outlined" onClick={onClick}>
      <Typography variant="h6">{children}</Typography>
    </Button>
  );
};

export default ButtonKalkulator;
