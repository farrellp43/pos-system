import ReactPDF, { PDFViewer } from "@react-pdf/renderer";
import React from "react";
import InvoiceBarang from "../../components/InvoiceBarang/InvoiceBarang";
import { dataInvoice } from "../../constants/mock";

interface ILaporan {
  // invoice: IInvoice;
}

const Laporan = (props: ILaporan) => {
  return (
    <React.Fragment>
      <PDFViewer width="1000" height="600">
        <InvoiceBarang invoice={dataInvoice} />
      </PDFViewer>
    </React.Fragment>
  );
};

export default Laporan;
