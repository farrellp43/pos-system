import React, { ReactNode } from "react";
import { KategoriModalProvider } from "./kategoriModalContext";
import { StokModalProvider } from "./stokModalContext";
import { TransaksiProvider } from "./transaksiContext";

interface IindexProps {
  children: ReactNode;
}

const AppProvider = ({ children }: IindexProps) => {
  return (
    <StokModalProvider>
      <KategoriModalProvider>
        <TransaksiProvider>{children}</TransaksiProvider>
      </KategoriModalProvider>
    </StokModalProvider>
  );
};

export default AppProvider;
