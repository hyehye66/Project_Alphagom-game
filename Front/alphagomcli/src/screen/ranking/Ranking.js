import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

//import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';

import Footer from '../../Footer';
//import AllRank from './AllRank';
//import MagicRank from './MagicRank';
//import SwampRank from './SwampRank';
//import CaveRank from './CaveRank';
//import SkyRank from './SkyRank';


//function Ranking () {

//  const navigation = useNavigation();
//  const Tab = createMaterialTopTabNavigator();
//
//  return (
//    <SafeAreaView style={styles.container}>
//    <Tab.Navigator>
//    <Tab.Screen
//        name="총점수"
//        component={ AllRank }
//        options={{
//            tabBarShowLabel: false}} />
//    <Tab.Screen
//        name="마법의 성"
//        component={ MagicRank }
//        options={{
//            tabBarShowLabel: false}} />
//    <Tab.Screen
//        name="늪"
//        component={ SwampRank }
//        options={{
//            tabBarShowLabel: false}} />
//    <Tab.Screen
//      name="어둠의 동굴"
//      component={ CaveRank }
//      options={{
//          tabBarShowLabel: false}} />
//    <Tab.Screen
//        name="밤하늘"
//        component={ SkyRank }
//        options={{
//            tabBarShowLabel: false}} />
//    </Tab.Navigator>
//    <Footer/>
//  </SafeAreaView>
//  );
//};

//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    marginHorizontal: 16,
//  },
//});


function Ranking () {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.rank}>
      <View style={styles.eachrank}>
      <Text
        style={styles.ranktext}
        onPress={() => navigation.navigate('AllRank')}>
        총 점수
        </Text>
    </View>

    <View style={styles.eachrank}>
    <Text
        style={styles.ranktext}
        onPress={() => navigation.navigate('MagicRank')}>
        마법의 성
        </Text>
    </View>

    <View style={styles.eachrank}>
    <Text
        style={styles.ranktext}
        onPress={() => navigation.navigate('SwampRank')}>
        늪
        </Text>
    </View>

    <View style={styles.eachrank}>
      <Text
        style={styles.ranktext}
        onPress={() => navigation.navigate('CaveRank')}>
        어둠의 동굴
        </Text>
    </View>

    <View style={styles.eachrank}>
      <Text
        style={styles.ranktext}
        onPress={() => navigation.navigate('SkyRank')}>
        밤하늘
        </Text>
    </View>
    </View>
    <Footer/>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  rank: {
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'flex-start',
    alignContent:'space-around'
  },
  ranktext :{
    fontSize: 30,
    color: 'black',
    fontFamily: 'SSShinb7Regular',
  },
  eachrank : {
    margin: 25
  }
});

export default Ranking;
