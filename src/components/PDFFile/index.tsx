import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { useEffect, useState } from 'react';
import { priceFormatter } from 'utils/priceFormatter';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: '40px',
    fontSize: '12px',
  },
  title: {
    fontSize: '14px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  product: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  result: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderTop: '1px solid black',
  }
});

type ProductItem = {
  name: string;
  price: number;
}

type PDFFileProps = {
  items: ProductItem[];
}

export function PDFFile({ items }: PDFFileProps) {
  const [totalValue, setTotalValue] = useState(0);
  

  useEffect(() => {
    if (items) {
      let values: number[] = [];
      items.forEach(item => {
        values.push(item.price);
      })

      if (values.length) {
        const sumOfValues = values.reduce((total, item) => {
          return total + item;
        }) 
  
        setTotalValue(sumOfValues);
      }
    }
  }, [items]);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={styles.title}>Lista de compras:</Text>
        </View>
        {items.map(item => {
          return (
            <View key={`product-${item.name}`} style={styles.product}>
              <Text>{item.name}</Text>
              <Text>{priceFormatter(item.price)}</Text>
            </View>  
          );
        })}
        <View style={styles.result}>
          <Text>Total: {priceFormatter(totalValue)}</Text>
        </View>
      </Page>
    </Document>
  );
}