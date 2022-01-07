import { Button, Typography } from "@mui/material";
import React, { ReactNode } from "react";

interface IButtonKalkulatorProps {
  children: ReactNode;
  buttonVariant: "text" | "outlined" | "contained" | undefined;
  onClick: () => void;
}

const ButtonNumKalkulator = ({
  children,
  onClick,
  buttonVariant,
}: IButtonKalkulatorProps) => {
  return (
    <Button
      variant={buttonVariant}
      onClick={onClick}
      sx={{
        backgroundColor: "#F6FBF8",
      }}
    >
      <Typography variant="h6">{children}</Typography>
    </Button>
  );
};

export default ButtonNumKalkulator;
