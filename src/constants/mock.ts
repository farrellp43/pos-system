import { IStokBarang, IInvoice } from "./types";

export const originalRows: IStokBarang[] = [
  {
    id: 1,
    harga: 10000,
    namaBarang: "Mie Ayam Spesial Pak Geger",
    infoBarang: {
      nama: "Mie Ayam Spesial Pak Geger",
      url: "https://upload.wikimedia.org/wikipedia/commons/2/24/Ayam_geprek.png"
    },
    kategori: "Makanan",
    jumlahStok: 35,
    SKU: "JSnow@example.com",
    url: "https://upload.wikimedia.org/wikipedia/commons/2/24/Ayam_geprek.png",
  },
  {
    id: 2,
    harga: 10000,
    namaBarang: "Nasi Goreng Babat",
    infoBarang: {
      nama: "Nasi Goreng Babat",
      url: "https://upload.wikimedia.org/wikipedia/commons/2/24/Ayam_geprek.png"
    },
    kategori: "Makanan",
    jumlahStok: 42,
    SKU: "CLannister@example.com",
    url: "https://upload.wikimedia.org/wikipedia/commons/2/24/Ayam_geprek.png",
  },
  {
    id: 3,
    harga: 10000,
    namaBarang: "Ayam Geprek",
    infoBarang: {
      nama: "Ayam Geprek",
      url: "https://upload.wikimedia.org/wikipedia/commons/2/24/Ayam_geprek.png"
    },
    kategori: "Makanan",
    jumlahStok: 45,
    SKU: "JLannister@example.com",
    url: "https://upload.wikimedia.org/wikipedia/commons/2/24/Ayam_geprek.png",
  },
  {
    id: 4,
    harga: 10000,
    namaBarang: "Bebek Rempah",
    infoBarang: {
      nama: "Bebek Rempah",
      url: "https://upload.wikimedia.org/wikipedia/commons/2/24/Ayam_geprek.png"
    },
    kategori: "Makanan",
    jumlahStok: 16,
    SKU: "AStark@example.com",
    url: "https://upload.wikimedia.org/wikipedia/commons/2/24/Ayam_geprek.png",
  },
  {
    id: 5,
    harga: 10000,
    namaBarang: "Sate Padang",
    infoBarang: {
      nama: "Sate Padang",
      url: "https://upload.wikimedia.org/wikipedia/commons/2/24/Ayam_geprek.png"
    },
    kategori: "Makanan",
    jumlahStok: 999,
    SKU: "DTargaryen@example.com",
    url: "https://upload.wikimedia.org/wikipedia/commons/2/24/Ayam_geprek.png",
  },
  {
    id: 6,
    harga: 10000,
    namaBarang: "Es Teh",
    infoBarang: {
      nama: "Es Teh",
      url: "https://upload.wikimedia.org/wikipedia/commons/2/24/Ayam_geprek.png"
    },
    kategori: "Minuman",
    jumlahStok: 150,
    SKU: "Melisandre@example.com",
    url: "https://upload.wikimedia.org/wikipedia/commons/2/24/Ayam_geprek.png",
  },
  {
    id: 7,
    harga: 10000,
    namaBarang: "Es Jeruk",
    infoBarang: {
      nama: "Es Jeruk",
      url: "https://upload.wikimedia.org/wikipedia/commons/2/24/Ayam_geprek.png"
    },
    kategori: "Minuman",
    jumlahStok: 44,
    SKU: "FClifford@example.com",
    url: "https://upload.wikimedia.org/wikipedia/commons/2/24/Ayam_geprek.png",
  },
  {
    id: 8,
    harga: 10000,
    namaBarang: "Susu Putih",
    infoBarang: {
      nama: "Susu Putih",
      url: "https://upload.wikimedia.org/wikipedia/commons/2/24/Ayam_geprek.png"
    },
    kategori: "Minuman",
    jumlahStok: 36,
    SKU: "RFrances@example.com",
    url: "https://upload.wikimedia.org/wikipedia/commons/2/24/Ayam_geprek.png",
  },
  {
    id: 9,
    harga: 10000,
    namaBarang: "Jahe Panas",
    infoBarang: {
      nama: "Jahe Panas",
      url: "https://upload.wikimedia.org/wikipedia/commons/2/24/Ayam_geprek.png"
    },
    kategori: "Minuman",
    jumlahStok: 65,
    SKU: "HRoxie@example.com",
    url: "https://upload.wikimedia.org/wikipedia/commons/2/24/Ayam_geprek.png",
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
