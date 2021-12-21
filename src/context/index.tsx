import React, { ReactNode } from "react";
import { StokModalProvider } from "./stokModalContext";

interface IindexProps {
  children: ReactNode;
}

const AppProvider = ({ children }: IindexProps) => {
  return <StokModalProvider>{children}</StokModalProvider>;
};

export default AppProvider;
