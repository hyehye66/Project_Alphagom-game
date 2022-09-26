import React from 'react';
import { StyleSheet, View, SafeAreaView, Button, ImageBackground, ScrollView, Text, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

function Map () {

    const navigation = useNavigation();

// 요소들 정렬하기
// 아이콘 전체를 눌렀을 때 게임 페이지 이동
// 폰트 생각해보기
//"탐험 지도" 같이 제목 적당히 넣기

    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <ImageBackground 
            style={ styles.background }
            source={require('../../assets/image/지도_배경_사진_필터_low.png')}>
        <SafeAreaView style={styles.container}>

        <View>
        <Image
        style={{ width:260, height: 200}}
        source={require('../../assets/image/마법의_성.png')} />
        <Text style={styles.button}
            onPress={() => navigation.navigate('MagicStartPage')}>
            마법의 성
        </Text>
      </View>
        
        <View>
        <Image
        style={{ width:500, height: 200}}
        source={require('../../assets/image/늪.png')} />
        <Text style={styles.button}
            onPress={() => navigation.navigate('SwampStartPage')}>
            늪
        </Text>
        </View>

        <View>
        <Image
        style={{ width:300, height: 200}}
        source={require('../../assets/image/어둠의_동굴.png')} />
        <Text style={styles.button}
            onPress={() => navigation.navigate('CaveStartPage')}>
            어둠의 동굴
        </Text>
        </View>

        <View>
            <Image
        style={{ width:600, height: 200}}
        source={require('../../assets/image/하늘.png')} />
        <Text style={styles.button}
            onPress={() => navigation.navigate('SkyStartPage')}>
            밤하늘
            </Text>
        </View>

        </SafeAreaView>
        </ImageBackground>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    background: {
        width: 2000,
        height: '100%',
    },
    button: {
        fontSize: 50,
        color: 'white',
        fontFamily: 'Title_Light',
    },
  });


export default Map;