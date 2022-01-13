import React from "react";
import IconButton from "@mui/material/IconButton";
import Tokopedia from "../../assets/icons/tokopedia.png";

interface ILogoTokpedProps {}

const LogoTokped = (props: ILogoTokpedProps) => {
  return (
    <IconButton disableRipple>
      <img src={Tokopedia} alt="Tokopedia" height="22px" width="22px" />
    </IconButton>
  );
};

export default LogoTokped;
