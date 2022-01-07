import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { IInvoice } from "../../constants/types";

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 36,
  },
  billTo: {
    marginTop: 20,
    paddingBottom: 3,
    fontFamily: "Helvetica-Oblique",
  },
});

interface IBillToProps {
  invoice: IInvoice;
}

const BillTo = ({ invoice }: IBillToProps) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.billTo}>Bill To:</Text>
      <Text>{invoice.namaToko}</Text>
      <Text>{invoice.alamatToko}</Text>
      <Text>{invoice.noTelp}</Text>
      <Text>{invoice.email}</Text>
    </View>
  );
};

export default BillTo;
