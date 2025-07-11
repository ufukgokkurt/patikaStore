import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './styles';

type ProductProps = {
  product: {
    id: number;
    title: string;
    imgURL: string;
    price: string;
    inStock: boolean;
  };
};
export default function ProductCard({ product }: ProductProps) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.imgURL }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
       <Text style={styles.price}>{product.price}</Text>
        {!product.inStock && (
        <Text style={styles.stok}>STOKTA YOK</Text>
      )}
    </View>
  );
}
