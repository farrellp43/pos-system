import { Button, Typography, Paper, Box } from "@mui/material";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useStokModal } from "../../context/stokModalContext";
import ActionList from "../ActionList/ActionList";

interface IDropdownTableProps {
  parameter: any;
}

const DropdownTable = ({ parameter }: IDropdownTableProps) => {
  const { openModal } = useStokModal();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClick = (params: any) => {
    openModal(params);
    setIsOpen(false);
  };
  return (
      <Box width="100%" marginX={2}>
        <Button
          fullWidth
          size="small"
          variant="outlined"
          onClick={handleOpen}
          endIcon={<KeyboardArrowDownIcon />}
          sx={{
            position: "relative",
            fontWeight: "bold",
            color: "#000",
            textTransform: "none",
            justifyContent: "space-between",
            border: "1px #A3A3A3 solid",
          }}
        >
          <Typography fontWeight="bold">Atur</Typography>
        </Button>
        {isOpen ? (
          <Paper variant="outlined" sx={{ position: "absolute", zIndex: 1000 }}>
            <ActionList
              onClick={() => handleClick(parameter)}
              icon={<EditIcon />}
              color="#45A779"
              aksi="Edit"
            />
            <ActionList
              onClick={() => {}}
              icon={<DeleteIcon />}
              color="#E11D48"
              aksi="Delete"
            />
          </Paper>
        ) : (
          ""
        )}
      </Box>
  );
};

export default DropdownTable;
