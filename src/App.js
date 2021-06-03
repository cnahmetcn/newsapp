import React from 'react';

import {
  SafeAreaView,
  FlatList,
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import news_data from './news_data.json';
import news_banner_data from './news_banner_data.json';
import NewsCard from './components/NewsCard';

function App() {
  const renderNews = ({item}) => <NewsCard news={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.header}>News App</Text>
        {/* Eğer Resim görseli sürekli yukarıda görünecek ise
        burda yazılmalıdır. Ekran kaydırıldığında gitmesini
        istersek Flatlist içine yazılmalıdır.
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {news_banner_data.map(banner_news => (
            <Image
              style={styles.banner_image}
              source={{uri: banner_news.imageUrl}}
            />
          ))}
        </ScrollView> */}
        <FlatList
          ListHeaderComponent={() => (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {news_banner_data.map(banner_news => (
                <Image
                  style={styles.banner_image}
                  source={{uri: banner_news.imageUrl}}
                />
              ))}
            </ScrollView>
          )}
          keyExtractor={item => item.id.toString()}
          data={news_data}
          renderItem={renderNews}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
  },
  header: {
    fontSize: 30,
  },
});

export default App;

/*
100 tane verimiz olsun.
Flatlist bu 100 veriden bize yalnızda ekranda görünecek kısmını
ekrana basar, diğer verileri kaldırıp hafızaya atar.
Verilerimizin içinde id isimli bir alan var ise Flatlist bunu
otomatik olarak anlar ve bu id ye göre verileri basar. Ancak
id yok ise veya id miz başka türlü isimlendirilmişse (uid, u_id)
gibi bunu Flatlist e bildirmemiz gerekmektedir. Bunun için
keyExtractor metodu kullanılır. Burada Flatliste gönderilen
verilerin id sinin ismini vererek Flatlist in verileri ekrana
basmasını sağlayabiliriz.
*/
