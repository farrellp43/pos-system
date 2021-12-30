import React, { ReactNode } from "react";
import { StokModalProvider } from "./stokModalContext";
import { TransaksiProvider } from "./transaksiContext";

interface IindexProps {
  children: ReactNode;
}

const AppProvider = ({ children }: IindexProps) => {
  return (
    <StokModalProvider>
      <TransaksiProvider>{children}</TransaksiProvider>
    </StokModalProvider>
  );
};

export default AppProvider;
