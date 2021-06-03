/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
  },
  image: {
    height: Dimensions.get('window').height / 4, // Ekran yüksekliğinin 4 te birini kapla
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  description: {
    marginTop: 5,
  },
  innerContainer: {
    padding: 5,
  },
  author: {
    fontStyle: 'italic',
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
