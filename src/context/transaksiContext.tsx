import React, {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

interface State {
  handleUpdate: (data: ICart) => void;
  handleRemove: (data: ICart) => void;
  hitungHarga: () => void;
  totalHarga: number;
}

interface ITransaksiContext {
  children: ReactNode;
}

interface ICart {
  id: number;
  namaBarang: string;
  harga: number;
  qty: number;
}

const TransaksiContext = createContext<State | undefined>(undefined);

const TransaksiProvider = ({ children }: ITransaksiContext) => {
  const [cart, setCart] = useState<ICart[]>([]);
  const [totalHarga, setTotalHarga] = useState(0);

  useEffect(() => {
    console.log(cart);
    hitungHarga();
  }, [cart]);

  const hitungHarga = () => {
    let total = 0;
    cart.forEach((c) => {
      total += c.harga * c.qty;
    });
    setTotalHarga(total);
  };

  const handleUpdate = (data: ICart) => {
    const newCart = [...cart];
    const isIncludes = cart.findIndex((c) => c.id === data.id);

    if (isIncludes < 0) {
      newCart.push(data);
      setCart(newCart);
    } else {
      const index = cart.findIndex((c) => {
        return c.id === data.id;
      });
      newCart[index] = data;
      setCart(newCart);
    }
  };

  const handleRemove = (data: ICart) => {
    const newCart = cart.filter((c) => c.id !== data.id);
    setCart(newCart);
  };

  const value = useMemo(
    () => ({
      handleUpdate,
      handleRemove,
      totalHarga,
      hitungHarga,
    }),
    [handleUpdate, handleRemove, totalHarga, hitungHarga]
  );

  return (
    <TransaksiContext.Provider value={value}>
      {children}
    </TransaksiContext.Provider>
  );
};

const useTransaksi = () => {
  const context = React.useContext(TransaksiContext);
  if (context === undefined) {
    throw new Error("useTransaksi must be used within a TransaksiProvider");
  }
  return context;
};

export { TransaksiContext, TransaksiProvider, useTransaksi };
