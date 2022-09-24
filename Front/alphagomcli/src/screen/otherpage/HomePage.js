import * as React from 'react';
import { StyleSheet, ImageBackground, View, SafeAreaView, Alert, Image, Text, Dimensions, TouchableOpacity } from 'react-native';

import Footer from '../../Footer';

// 로그아웃 / 종료버튼 만들어야 한다
// Drawer 로 네브바 만들기

// const width = useWindowDimensions().width;
// const height = useWindowDimensions().height;
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

function HomePage ({navigation}) {
  
  const goAlert = () => 
      Alert.alert(
          '아직 구현되지 않았습니다',
          '기다리십시오');

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.alphagom}>
      <Image
        // style={{ width:160, height: 350}}
        style={{
          resizeMode: "cover",
          width: width - 700,
          height: height - 100
        }}
        
        source={require('../../assets/image/알파곰_전신_인사.png')} />
      </View>

    <View style={styles.position}>
      <Image 
        style={{
          marginBottom: 20,
          width: width - 325,
          height: height - 310,
        }}
        source={require('../../assets/image/타이틀.png')}/>
      {/* <Text style={styles.main}>
        말해봐요 알파곰
      </Text> */}
      <View style={styles.menu}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity 
            style={styles.buttonShape}
            onPress={() => navigation.navigate('Map')}>
            <View 
              activeOpacity={0.8}
              style={styles.buttonView}
            >
              <Text style={styles.buttonText}>탐험하기</Text>
            </View>
          </TouchableOpacity>
          {/* <Text style={styles.buttonText}
              onPress={() => navigation.navigate('Map')}
            >탐험하기
          </Text> */}
          
          <TouchableOpacity
            style={styles.buttonShape}
            onPress={() => navigation.navigate('Ranking')}>
            <View 
              activeOpacity={0.8}
              style={styles.buttonView}
            >
              <Text style={styles.buttonText}>순위보기</Text>
            </View>
          </TouchableOpacity>
          {/* <Text style={styles.buttonText}
            onPress={() => navigation.navigate('Ranking')}
          >순위보기
          </Text> */}
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity 
            style={styles.buttonShape}
            onPress={goAlert}>
            <View 
              activeOpacity={0.8}
              style={styles.buttonView}
            >
              <Text style={styles.buttonText}>이야기 보따리</Text>
            </View>
          </TouchableOpacity>
          {/* <Text style={styles.buttonText}
            onPress={goAlert}
          >이야기 보따리
          </Text> */}

          <TouchableOpacity
            style={styles.buttonShape}
            onPress={() => navigation.navigate('MyPage')}>
            <View 
              activeOpacity={0.8}
              style={styles.buttonView}
            >
              <Text style={styles.buttonText}>나의 여정</Text>
            </View>
          </TouchableOpacity>
          {/* <Text style={styles.buttonText}
            onPress={() => navigation.navigate('MyPage')}
          >나의 여정
          </Text> */}
        </View>

      </View>
    </View>
    {/* <Footer /> */}
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'center',
    // marginHorizontal: width / 20,
    // marginVertical: height / 20,
  },
  alphagom : {
    flexDirection: 'row',
    alignItems: 'center',
    // marginLeft: width / 50,
    // backgroundColor: 'red',
  },
  buttonShape: {
    margin: 8,
  },
  buttonView: {
    width: width / 5,
    height: height / 9,
    backgroundColor: '#FFF170',
    alignItems: 'center', 
    justifyContent: 'center',
    borderRadius: 15
  },
  buttonText: {
    fontSize: 20,
    // backgroundColor: 'black',
    fontFamily: 'Batang_Bold',
    color: 'black',
  },
  main: {
    fontFamily: 'Title_Medium',
    fontSize: 85,
    color: 'black',
    marginBottom: 20,
  },
  menu : {
    alignItems: 'center',
    justifyContent: 'center',
  },
  position : {
    alignItems:'flex-start',
    flexDirection:'column',
    marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'green',
  },
  background: {
    width: width,
    height: '100%',
},
});

export default HomePage;