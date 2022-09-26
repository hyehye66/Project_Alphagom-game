import React from 'react';
import { StyleSheet, ImageBackground, Button, View, SafeAreaView, Alert, Image, Text } from 'react-native';

// 로그아웃 / 종료버튼 만들어야 한다
// Drawer 로 네브바 만들기
// 

function LoginPage ({navigation}) {

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.alphagom}>
      <Image
        style={{ width:160, height: 350}}
        source={require('../../assets/image/알파곰_전신_인사.png')} />
      </View>

    <View style={styles.position}>
    <Text style={styles.main}
    onPress={() => navigation.navigate('HomePage')}>
      말해봐요 알파곰으로 가보자고!
    </Text>
    <View style={styles.menu}>
    {/* onPress 화살표 뒤에 콜백함수 넣으면 됨! */}
    {/* <Text style={styles.button}
        onPress={() => }
      >구글로 로그인
    </Text>

      <Text style={styles.button}
        onPress={() => }
      >카카오로 로그인
      </Text>
      

      <Text style={styles.button}
        onPress={() => }
      >네이버로 로그인
        </Text> */}

    </View>
    </View>
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
    fontSize: 60,
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

export default LoginPage;