import React, {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";

interface State {
  isOpenModalKategori: boolean;
  openModalKategori: () => void;
  closeModalKategori: () => void;
}

interface IKategoriModalContext {
  children: ReactNode;
}

const KategoriModalContext = createContext<State | undefined>(undefined);

const KategoriModalProvider = ({ children }: IKategoriModalContext) => {
  const [isOpenModalKategori, setIsOpenModalKategori] = useState(false);

  const openModalKategori = useCallback(() => {
    setIsOpenModalKategori(true);
  }, []);

  const closeModalKategori = useCallback(() => {
    setIsOpenModalKategori(false);
  }, []);

  const value = useMemo(
    () => ({ isOpenModalKategori, openModalKategori, closeModalKategori }),
    [closeModalKategori, isOpenModalKategori, openModalKategori]
  );

  return (
    <KategoriModalContext.Provider value={value}>
      {children}
    </KategoriModalContext.Provider>
  );
};

const useKategoriModal = () => {
  const context = React.useContext(KategoriModalContext);
  if (context === undefined) {
    throw new Error(
      "useKategoriModal must be used within a KategoriModalProvider"
    );
  }
  return context;
};

export { KategoriModalContext, KategoriModalProvider, useKategoriModal };
