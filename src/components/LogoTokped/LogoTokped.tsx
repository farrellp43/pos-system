import React from "react";
import Tokopedia from "../../assets/icons/tokopedia.png";

interface ILogoTokpedProps {}

const LogoTokped = (props: ILogoTokpedProps) => {
  return <img src={Tokopedia} alt="Tokopedia" height="22px" width="22px" />;
};

export default LogoTokped;
