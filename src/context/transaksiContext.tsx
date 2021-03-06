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
  hitungBayar: (digit: number) => void;
  bayar: number;
  hitungKembalian: () => void;
  kembalian: number;
  uangPas: () => void;
  handleReset: () => void;
  openModalTransaksi: () => void;
  closeModalTransaksi: () => void;
  isOpenModalTransaksi: boolean;
  openModalBayar: () => void;
  closeModalBayar: () => void;
  isOpenModalBayar: boolean;
  hitungGrandTotal: () => void;
  aturDiskon: (digit: number, toggleDiskon: "nominal" | "persentase") => void;
  diskon: number;
  grandTotal: number;
  addToCart: (data: ICart) => void;
  cart: ICart[];
}

interface ITransaksiContext {
  children: ReactNode;
}

interface ICart {
  id: number;
  namaBarang: string;
  harga: number;
  url: string;
  qty: number;
}

const TransaksiContext = createContext<State | undefined>(undefined);

const TransaksiProvider = ({ children }: ITransaksiContext) => {
  const [cart, setCart] = useState<ICart[]>([]);
  const [isOpenModalTransaksi, setisOpenModalTransaksi] = useState(false);
  const [isOpenModalBayar, setisOpenModalBayar] = useState(false);
  const [totalHarga, setTotalHarga] = useState(0);
  const [bayar, setBayar] = useState(0);
  const [kembalian, setKembalian] = useState(0);
  const [diskon, setDiskon] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

  const addToCart = (data: ICart) => {
    setCart((prev) => [...prev, data]);
  };

  const openModalTransaksi = () => {
    setisOpenModalTransaksi(true);
  };

  const closeModalTransaksi = () => {
    setisOpenModalTransaksi(false);
  };

  const openModalBayar = () => {
    setisOpenModalBayar(true);
  };

  const closeModalBayar = () => {
    setisOpenModalBayar(false);
  };

  const hitungHarga = useCallback(() => {
    let total = 0;
    cart.forEach((c) => {
      total += c.harga * c.qty;
    });
    setTotalHarga(total);
  }, [cart]);

  const hitungBayar = useCallback((digit: number) => {
    setBayar(digit);
  }, []);

  const hitungKembalian = useCallback(() => {
    // console.log(kembalian);
    if (bayar === 0) {
      setKembalian(0);
    } else {
      if (diskon === 0) {
        const change = bayar - totalHarga;
        setKembalian(change);
      } else {
        const change = bayar - grandTotal;
        setKembalian(change);
      }
    }
    // if (totalHarga > 0) {
    // }
  }, [bayar, diskon, grandTotal, totalHarga]);

  const aturDiskon = useCallback(
    (digit: number, toggleDiskon: "nominal" | "persentase") => {
      if (toggleDiskon === "nominal") {
        setDiskon(digit);
      } else if (toggleDiskon === "persentase") {
        const potongan = digit / 100;
        const totalDiskon = totalHarga - totalHarga * potongan;
        setDiskon(totalHarga - totalDiskon);
      }
      console.log(digit);
      console.log(toggleDiskon);
    },
    [totalHarga]
  );

  const hitungGrandTotal = useCallback(() => {
    // if (diskon === 0) {
    //   setGrandTotal(0);
    // } else {
    // const potongan = diskon / 100;
    // const grand = totalHarga - totalHarga * potongan;
    setGrandTotal(totalHarga - diskon);
    // }
  }, [diskon, totalHarga]);

  const handleReset = useCallback(() => {
    setCart([]);
    setTotalHarga(0);
    setBayar(0);
    setKembalian(0);
    setDiskon(0);
  }, []);

  const uangPas = useCallback(() => {
    if (diskon === 0) {
      setBayar(totalHarga);
    } else {
      setBayar(grandTotal);
    }
  }, [diskon, grandTotal, totalHarga]);

  const handleUpdate = useCallback(
    (data: ICart) => {
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
    },
    [cart]
  );

  const handleRemove = useCallback(
    (data: ICart) => {
      const newCart = cart.filter((c) => c.id !== data.id);
      setCart(newCart);
    },
    [cart]
  );

  useEffect(() => {
    hitungHarga();
    hitungKembalian();
    hitungGrandTotal();
  }, [
    cart,
    bayar,
    totalHarga,
    diskon,
    hitungHarga,
    hitungKembalian,
    hitungGrandTotal,
  ]);

  const value = useMemo(
    () => ({
      handleUpdate,
      handleRemove,
      totalHarga,
      hitungHarga,
      hitungBayar,
      bayar,
      hitungKembalian,
      kembalian,
      uangPas,
      handleReset,
      isOpenModalTransaksi,
      openModalTransaksi,
      closeModalTransaksi,
      isOpenModalBayar,
      openModalBayar,
      closeModalBayar,
      aturDiskon,
      diskon,
      grandTotal,
      hitungGrandTotal,
      addToCart,
      cart,
    }),
    [
      handleUpdate,
      handleRemove,
      totalHarga,
      hitungHarga,
      hitungBayar,
      bayar,
      hitungKembalian,
      kembalian,
      uangPas,
      handleReset,
      isOpenModalTransaksi,
      isOpenModalBayar,
      aturDiskon,
      diskon,
      grandTotal,
      hitungGrandTotal,
      cart,
    ]
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
