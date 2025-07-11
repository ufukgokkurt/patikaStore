/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { FlatList, SafeAreaView, StyleSheet, Text, TextInput } from 'react-native';

import product_data from './src/product_data.json';
import ProductCard from './src/components/ProductCard';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>PATIKASTORE</Text>
      <TextInput placeholder='Ara...' style={styles.searchInput}/>
      <FlatList
        data={product_data}
        renderItem={({ item }) => <ProductCard product={item} />}
        numColumns={2} // 2 sütunlu görünüm
        keyExtractor={(item, index) => item.id?.toString() || index.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   },
  title: {
    fontSize: 44,
    color: '#800080',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  searchInput: {
    height: 40,
    backgroundColor: '#edeff1',
     borderRadius: 8,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginBottom: 20}
});

export default App;
