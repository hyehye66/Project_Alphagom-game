import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Map from './Map'


const goAlert = () => 
    Alert.alert(
        '아직 구현되지 않았습니다',
        '기다리십시오');

const HomePage = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Button
        title="탐험하기"
        onPress={goAlert}
      />
    </View>

    <View>
      <Button
        title="순위보기"
        onPress={goAlert}
      />
    </View>

    <View>
      <Button
        title="이야기보기"
        onPress={goAlert}
      />
    </View>

    <View>
      <View style={styles.fixToText}>
      <Ionicons name="settings-sharp" 
        size={24} 
        color="black" 
        onPress={() => navigation.navigate(Map)}
        />
      </View>
    </View>
  </SafeAreaView>
);

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

export default HomePage;