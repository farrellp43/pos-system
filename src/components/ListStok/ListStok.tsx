import { IconButton, TextField } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

interface IListStokProps {}

interface IStokBarang {
  id: number;
  namaBarang: string;
  harga: number;
  jumlahStok: number;
  SKU: string;
}

const listBarang: IStokBarang[] = [
  {
    id: 1,
    harga: 10000,
    namaBarang: "Jon",
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

const ListStok = (props: IListStokProps) => {
  const [nama, setNama] = useState("");
  const [barang, setBarang] = useState(listBarang);

  const filter = (e: any) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = listBarang.filter((barang) => {
        return barang.namaBarang
          .toLowerCase()
          .startsWith(keyword.toLowerCase());
      });
      setBarang(results);
    } else {
      setBarang(listBarang);
    }

    setNama(keyword);
  };

  return (
    <div style={{ width: 400 }}>
      <TextField
        type="search"
        variant="outlined"
        value={nama}
        onChange={filter}
        placeholder="Search…"
        InputProps={{
          endAdornment: <SearchIcon fontSize="small" />,
        }}
      />
      <div>
        {barang && barang.length > 0 ? (
          barang.map((b) => (
            <li key={b.id}>
              <span>{b.id}</span>
              <span>{b.namaBarang}</span>
              <span>{b.harga}</span>
            </li>
          ))
        ) : (
          <h1>Barang tidak ditemukan!</h1>
        )}
      </div>
    </div>
  );
};

export default ListStok;
