import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    marginTop: 24,
  },
  reportTitle: {
    color: "#61dafb",
    letterSpacing: 4,
    fontSize: 25,
    textAlign: "center",
    textTransform: "uppercase",
  },
});

interface IInvoiceTitleProps {
  title: string;
}

const InvoiceTitle = ({ title }: IInvoiceTitleProps) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.reportTitle}>{title}</Text>
    </View>
  );
};

export default InvoiceTitle;
