import { Box, Button, Typography } from "@mui/material";
import React from "react";

interface IActionListProps {
  onClick: () => void;
  icon: React.ReactNode;
  color: string;
  aksi: string;
}

const ActionList = ({ onClick, icon, color, aksi }: IActionListProps) => {
  return (
    <Box width="90%">
      <Button
        onClick={onClick}
        fullWidth
        startIcon={icon}
        sx={{
          textTransform: "none",
          justifyContent: "flex-start",
          marginLeft: 1,
          color: color,
        }}
      >
        <Typography
          variant="subtitle1"
          color={color}
          fontWeight="bold"
          sx={{
            marginLeft: 2,
          }}
        >
          {aksi}
        </Typography>
      </Button>
    </Box>
  );
};

export default ActionList;
