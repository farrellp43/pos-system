import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { IInvoice } from "../../constants/types";

const borderColor = "#90e5fc";
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomColor: "#bff0fd",
    borderBottomWidth: 1,
    alignItems: "center",
    height: 24,
    fontStyle: "bold",
  },
  description: {
    width: "60%",
    textAlign: "left",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 8,
  },
  qty: {
    width: "10%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: "right",
    paddingRight: 8,
  },
  rate: {
    width: "15%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: "right",
    paddingRight: 8,
  },
  amount: {
    width: "15%",
    textAlign: "right",
    paddingRight: 8,
  },
});

interface IInvoiceTableRowProps {
    items: IInvoice["barang"]
}

const InvoiceTableRow = ({ items }: IInvoiceTableRowProps) => {
  //   const items = dataInvoice.barang;

  const rows = items.map((item) => (
    <View style={styles.row} key={item.id}>
      <Text style={styles.description}>{item.namaBarang}</Text>
      <Text style={styles.qty}>{item.qty}</Text>
      <Text style={styles.rate}>{item.harga}</Text>
      <Text style={styles.amount}>{(item.qty * item.harga).toFixed(2)}</Text>
    </View>
  ));
  return <React.Fragment>{rows}</React.Fragment>;
};

export default InvoiceTableRow;
