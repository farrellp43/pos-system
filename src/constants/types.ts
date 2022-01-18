export interface IStokBarang {
  id: number;
  namaBarang: string;
  infoBarang: {
    nama: string;
    url: string;
  };
  kategori: string;
  harga: number;
  jumlahStok: number;
  SKU: string;
  url: string;
}

export interface IInvoice {
  id: string;
  nomorInvoice: string;
  saldo: number;
  namaToko: string;
  alamatToko: string;
  email: string;
  noTelp: number;
  tanggalTransaksi: string;
  barang: {
    id: string;
    namaBarang: string;
    qty: number;
    harga: number;
  }[];
}

export interface LoginBody {
  email: string;
  password: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  checkToken: (token: string | null) => void;
  login: (values: LoginBody) => void;
  logout: () => void;
}

export interface CheckToken {
  code: number;
  message: string;
  data: string;
}

export interface LogoutResponse {
  code: number;
  message: string;
}

export interface LoginResponse {
  code: number;
  message: string;
  data: string;
}

export interface ErrorsFieldResponse {
  field: string;
  message: string;
}

export interface ErrorResponse {
  code: number;
  message: string;
  data?:
    | {
        erorrs?: ErrorsFieldResponse[];
      }
    | string;
}
