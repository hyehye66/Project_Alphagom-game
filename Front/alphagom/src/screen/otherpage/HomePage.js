import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Alert, Image } from 'react-native';

import Footer from '../../Footer';


function HomePage ({navigation}) {
  
  const goAlert = () => 
      Alert.alert(
          '아직 구현되지 않았습니다',
          '기다리십시오');

  return (
    
    <SafeAreaView style={styles.container}>
      <Image
        style={{ width:160, height: 350}}
        source={require('../../assets/image/알파곰_전신.png')} />

    <View>
      <Button style={styles.button}
        title="탐험하기"
        onPress={() => navigation.navigate('Map')}
      />
    </View>

    <View>
      <Button style={styles.button}
        title="순위보기"
        onPress={() => navigation.navigate('Ranking')}
      />
    </View>

    <View>
      <Button style={styles.button}
        title="이야기 보기"
        onPress={goAlert}
      />
    </View>

    <View>
      <Button style={styles.button}
        title="나의 여정"
        onPress={() => navigation.navigate('MyPage')}
      />
    </View>

    <Footer />
  </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 1,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  button: {
    width:100,
    height:200,
  }
});

export default HomePage;