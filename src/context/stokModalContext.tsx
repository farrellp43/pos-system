import React, {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";

interface State {
  isOpenModal: boolean;
  dataStok: {} | undefined;
  openModal: (data?: {}) => void;
  closeModal: () => void;
}

interface IStokModalProviderProps {
  children: ReactNode;
}

const StokModalContext = createContext<State | undefined>(undefined);

const StokModalProvider = ({ children }: IStokModalProviderProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [dataStok, setDataStok] = useState<{}>();

  const openModal = useCallback((data?: {}) => {
    if (data) {
      setDataStok((prev) => ({
        ...prev,
        ...data,
      }));
    }

    setIsOpenModal(true);
  }, []);

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
