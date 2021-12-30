import React, {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";

interface State {
  isOpenModal: boolean;
  dataStok:
    | {
        id: number;
        namaBarang: string;
        jumlahStok: number;
        harga: number;
        SKU: string;
      }
    | undefined;
  openModal: (data?: {
    id: number;
    namaBarang: string;
    jumlahStok: number;
    harga: number;
    SKU: string;
  }) => void;
  closeModal: () => void;
}

interface IStokModalContext {
  children: ReactNode;
}

const StokModalContext = createContext<State | undefined>(undefined);

const StokModalProvider = ({ children }: IStokModalContext) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [dataStok, setDataStok] = useState<{
    id: number;
    namaBarang: string;
    jumlahStok: number;
    harga: number;
    SKU: string;
  }>();

  const openModal = useCallback(
    (data?: {
      id: number;
      namaBarang: string;
      jumlahStok: number;
      harga: number;
      SKU: string;
    }) => {
      if (data) {
        setDataStok((prev) => ({
          ...prev,
          ...data,
        }));
      }

      setIsOpenModal(true);
    },
    []
  );

  const closeModal = useCallback(() => {
    setIsOpenModal(false);
    setDataStok(undefined);
  }, []);

  const value = useMemo(
    () => ({
      isOpenModal,
      dataStok,
      openModal,
      closeModal,
    }),
    [isOpenModal, dataStok, openModal, closeModal]
  );

  return (
    <StokModalContext.Provider value={value}>
      {children}
    </StokModalContext.Provider>
  );
};

const useStokModal = () => {
  const context = React.useContext(StokModalContext);
  if (context === undefined) {
    throw new Error("useStokModal must be used within a StokModalProvider");
  }
  return context;
};

export { StokModalContext, StokModalProvider, useStokModal };
