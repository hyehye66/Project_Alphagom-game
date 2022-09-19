import React from 'react';
import { StyleSheet, ImageBackground, Button, View, SafeAreaView, Alert, Image, Text } from 'react-native';

import Footer from '../../Footer';

// 로그아웃 / 종료버튼 만들어야 한다
// Drawer 로 네브바 만들기
// 

function HomePage ({navigation}) {
  
  const goAlert = () => 
      Alert.alert(
          '아직 구현되지 않았습니다',
          '기다리십시오');

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.alphagom}>
      <Image
        style={{ width:160, height: 350}}
        source={require('../../assets/image/알파곰_전신_인사.png')} />
      </View>

    <View style={styles.position}>
    <Text style={styles.main}>
      말해봐요 알파곰
    </Text>
    <View style={styles.menu}>

    <Text style={styles.button}
        onPress={() => navigation.navigate('Map')}
      >탐험하기
    </Text>

      <Text style={styles.button}
        onPress={() => navigation.navigate('Ranking')}
      >순위보기
      </Text>
      

      <Text style={styles.button}
        onPress={goAlert}
      >이야기 보따리
        </Text>

      <Text style={styles.button}
        onPress={() => navigation.navigate('MyPage')}
      >나의 여정
      </Text>

    </View>
    </View>
    <Footer />
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 5
  },
  alphagom : {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:10,
  },
  button: {
    fontSize: 25,
    color: 'black',
    fontFamily: 'Batang_Bold',
    margin:15,
  },
  main: {
    fontFamily: 'Title_Medium',
    fontSize: 85,
    color: 'black',
    margin: 30,
  },
  menu : {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  position : {
    alignItems:'flex-start',
    flexDirection:'column',
    alignItems: 'center', 
  },
  background: {
    width: 1000,
    height: '100%',
},
});

export default HomePage;