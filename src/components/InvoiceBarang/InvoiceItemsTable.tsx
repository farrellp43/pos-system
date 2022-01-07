import React from "react";
import { View, StyleSheet } from "@react-pdf/renderer";
import InvoiceTableHeader from "./InvoiceTableHeader";
import InvoiceTableRow from "./InvoiceTableRow";
import InvoiceTableBlankSpace from "./InvoiceTableBlankSpace";
import InvoiceTableFooter from "./InvoiceTableFooter";
import { IInvoice } from "../../constants/types";

const tableRowsCount = 11;

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 24,
    borderWidth: 1,
    borderColor: "#bff0fd",
  },
});

interface IInvoiceItemsTableProps {
  invoice: IInvoice;
}

const InvoiceItemsTable = ({ invoice }: IInvoiceItemsTableProps) => {
  return (
    <View style={styles.tableContainer}>
      <InvoiceTableHeader />
      <InvoiceTableRow items={invoice.barang} />
      <InvoiceTableBlankSpace
        rowsCount={tableRowsCount - invoice.barang.length}
      />
      <InvoiceTableFooter items={invoice.barang} />
    </View>
  );
};

export default InvoiceItemsTable;
