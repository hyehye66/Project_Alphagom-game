import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Button, Alert } from 'react-native';

import Footer from '../../Footer';
import { useNavigation } from '@react-navigation/native';

function MyPage () {

  const navigation = useNavigation();
    
    const goRank = () => 
      Alert.alert(
          '아직 구현되지 않았습니다',
          '모달창으로 할 예정입니다');

    return (

    <SafeAreaView style={styles.container}>

    <View>
        <Text>
            내 별명
        </Text>
    </View>

    <View>
        <Text>
            학습한 시간 : {}
        </Text>
    </View>

    <View>
      <Button
        title="탐험 기록"
        onPress={() => navigation.navigate('MyPageRecord')}
      />
    </View>

    <View>
      <Button
        title="나의 점수"
        onPress={goRank}
      />
    </View>

    <Footer />
  </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
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
  });

export default MyPage;