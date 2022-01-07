import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { IInvoice } from "../../constants/types";

const styles = StyleSheet.create({
  invoiceNoContainer: {
    flexDirection: "row",
    marginTop: 36,
    justifyContent: "flex-end",
  },
  invoiceDateContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  invoiceDate: {
    fontSize: 12,
    fontStyle: "bold",
  },
  label: {
    width: 60,
  },
});

interface IInvoiceNoProps {
  invoice: IInvoice;
}

const InvoiceNo = ({ invoice }: IInvoiceNoProps) => {
  return (
    <React.Fragment>
      <View style={styles.invoiceNoContainer}>
        <Text style={styles.label}>Invoice No:</Text>
        <Text style={styles.invoiceDate}>{invoice.nomorInvoice}</Text>
      </View>
      <View style={styles.invoiceDateContainer}>
        <Text style={styles.label}>Date: </Text>
        <Text>{invoice.tanggalTransaksi}</Text>
      </View>
    </React.Fragment>
  );
};

export default InvoiceNo;
