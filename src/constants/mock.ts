import { IStokBarang, IInvoice } from "./types";

export const originalRows: IStokBarang[] = [
  {
    id: 1,
    harga: 15000,
    namaBarang: "Mie Ayam Spesial Pak Geger",
    infoBarang: {
      nama: "Mie Ayam Spesial Pak Geger",
      url: "https://upload.wikimedia.org/wikipedia/commons/8/82/Mi_ayam_jamur.JPG",
    },
    kategori: "Makanan",
    jumlahStok: 35,
    SKU: "JSnow@example.com",
    url: "https://upload.wikimedia.org/wikipedia/commons/8/82/Mi_ayam_jamur.JPG",
  },
  {
    id: 2,
    harga: 13500,
    namaBarang: "Nasi Goreng Babat",
    infoBarang: {
      nama: "Nasi Goreng Babat",
      url: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Nasi_goreng_indonesia.jpg",
    },
    kategori: "Makanan",
    jumlahStok: 42,
    SKU: "CLannister@example.com",
    url: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Nasi_goreng_indonesia.jpg",
  },
  {
    id: 3,
    harga: 10000,
    namaBarang: "Ayam Geprek",
    infoBarang: {
      nama: "Ayam Geprek",
      url: "https://upload.wikimedia.org/wikipedia/commons/2/24/Ayam_geprek.png",
    },
    kategori: "Makanan",
    jumlahStok: 45,
    SKU: "JLannister@example.com",
    url: "https://upload.wikimedia.org/wikipedia/commons/2/24/Ayam_geprek.png",
  },
  {
    id: 4,
    harga: 20000,
    namaBarang: "Bebek Rempah",
    infoBarang: {
      nama: "Bebek Rempah",
      url: "https://1.bp.blogspot.com/-cvGJ04f3q7o/VTzYUXspisI/AAAAAAAAFhM/ihXblcDKxSE/s1600/Bebek-Goreng-Kremes-dan-Nasi.jpg",
    },
    kategori: "Makanan",
    jumlahStok: 16,
    SKU: "AStark@example.com",
    url: "https://1.bp.blogspot.com/-cvGJ04f3q7o/VTzYUXspisI/AAAAAAAAFhM/ihXblcDKxSE/s1600/Bebek-Goreng-Kremes-dan-Nasi.jpg",
  },
  {
    id: 5,
    harga: 22500,
    namaBarang: "Sate Padang",
    infoBarang: {
      nama: "Sate Padang",
      url: "https://upload.wikimedia.org/wikipedia/commons/4/41/Sate_Padang2.JPG",
    },
    kategori: "Makanan",
    jumlahStok: 999,
    SKU: "DTargaryen@example.com",
    url: "https://upload.wikimedia.org/wikipedia/commons/4/41/Sate_Padang2.JPG",
  },
  {
    id: 6,
    harga: 5000,
    namaBarang: "Es Teh",
    infoBarang: {
      nama: "Es Teh",
      url: "https://akcdn.detik.net.id/community/media/visual/2020/05/14/0af32d8b-36b7-4555-8e79-4fd54c98f795.jpeg?w=700&q=90",
    },
    kategori: "Minuman",
    jumlahStok: 150,
    SKU: "Melisandre@example.com",
    url: "https://akcdn.detik.net.id/community/media/visual/2020/05/14/0af32d8b-36b7-4555-8e79-4fd54c98f795.jpeg?w=700&q=90",
  },
  {
    id: 7,
    harga: 5000,
    namaBarang: "Es Jeruk",
    infoBarang: {
      nama: "Es Jeruk",
      url: "https://cdn.yummy.co.id/content-images/images/20201013/WqfCTib25afAXzGCyok7dmAmTKGeGpkM-31363032353730383236d41d8cd98f00b204e9800998ecf8427e_800x800.jpg",
    },
    kategori: "Minuman",
    jumlahStok: 44,
    SKU: "FClifford@example.com",
    url: "https://cdn.yummy.co.id/content-images/images/20201013/WqfCTib25afAXzGCyok7dmAmTKGeGpkM-31363032353730383236d41d8cd98f00b204e9800998ecf8427e_800x800.jpg",
  },
  {
    id: 8,
    harga: 7000,
    namaBarang: "Susu Putih",
    infoBarang: {
      nama: "Susu Putih",
      url: "https://statics.indozone.id/content/2020/09/27/L9sabJz/es-susu-yakult-nikmat-diminum-bersama-buah-hati-tercinta88_700.jpg",
    },
    kategori: "Minuman",
    jumlahStok: 36,
    SKU: "RFrances@example.com",
    url: "https://statics.indozone.id/content/2020/09/27/L9sabJz/es-susu-yakult-nikmat-diminum-bersama-buah-hati-tercinta88_700.jpg",
  },
  {
    id: 9,
    harga: 7000,
    namaBarang: "Jahe Panas",
    infoBarang: {
      nama: "Jahe Panas",
      url: "https://akcdn.detik.net.id/community/media/visual/2019/09/19/abe4b52d-f2b4-4d32-ab42-f996ae04d93c.jpeg?w=700&q=90",
    },
    kategori: "Minuman",
    jumlahStok: 65,
    SKU: "HRoxie@example.com",
    url: "https://akcdn.detik.net.id/community/media/visual/2019/09/19/abe4b52d-f2b4-4d32-ab42-f996ae04d93c.jpeg?w=700&q=90",
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
