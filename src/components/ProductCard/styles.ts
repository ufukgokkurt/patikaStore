import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const CARD_MARGIN = 8;
const CARD_WIDTH = (width / 2) - (CARD_MARGIN * 3);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#edeff1',
    borderRadius: 8,
    padding: 16,
    marginVertical: CARD_MARGIN,
    marginHorizontal: CARD_MARGIN,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    width: CARD_WIDTH, // Her kartın genişliği eşit ve taşmaz
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 8,
  },
  price: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  stok: {
    fontSize: 14,
    color: 'red',
    textAlign: 'right',
  },
});

export default styles;