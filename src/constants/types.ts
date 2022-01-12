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
