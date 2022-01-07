import { IStokBarang, IInvoice } from "./types";

export const originalRows: IStokBarang[] = [
  {
    id: 1,
    harga: 10000,
    namaBarang: "Mie Ayam Spesial Pak Geger",
    jumlahStok: 35,
    SKU: "JSnow@example.com",
  },
  {
    id: 2,
    harga: 10000,
    namaBarang: "Cersei",
    jumlahStok: 42,
    SKU: "CLannister@example.com",
  },
  {
    id: 3,
    harga: 10000,
    namaBarang: "Jaime",
    jumlahStok: 45,
    SKU: "JLannister@example.com",
  },
  {
    id: 4,
    harga: 10000,
    namaBarang: "Arya",
    jumlahStok: 16,
    SKU: "AStark@example.com",
  },
  {
    id: 5,
    harga: 10000,
    namaBarang: "Daenerys",
    jumlahStok: 999,
    SKU: "DTargaryen@example.com",
  },
  {
    id: 6,
    harga: 10000,
    namaBarang: "Fire",
    jumlahStok: 150,
    SKU: "Melisandre@example.com",
  },
  {
    id: 7,
    harga: 10000,
    namaBarang: "Ferrara",
    jumlahStok: 44,
    SKU: "FClifford@example.com",
  },
  {
    id: 8,
    harga: 10000,
    namaBarang: "Rossini",
    jumlahStok: 36,
    SKU: "RFrances@example.com",
  },
  {
    id: 9,
    harga: 10000,
    namaBarang: "Harvey",
    jumlahStok: 65,
    SKU: "HRoxie@example.com",
  },
];

export const dataInvoice: IInvoice = {
  id: "INV1",
  nomorInvoice: "0601-2022",
  saldo: 5000000,
  namaToko: "UKMLokal",
  alamatToko: "Setos Semarang",
  email: "toko@ukmlokal.com",
  noTelp: 6281555222333,
  tanggalTransaksi: "06 Januari 2022",
  barang: [
    {
      id: "1",
      harga: 10000,
      namaBarang: "Mie Ayam Spesial Pak Geger",
      qty: 2,
    },
    {
      id: "2",
      harga: 3000,
      namaBarang: "Es Teh",
      qty: 1,
    },
    {
      id: "3",
      harga: 3000,
      namaBarang: "Es Jeruk",
      qty: 1,
    },
  ],
};

export const logo =
  "https://nore.web.id/wp-content/uploads/2019/12/nore_1000px-of270z2ey3g5k8bkb9rzpw4wj1bobswssadnmt3p48.png";
