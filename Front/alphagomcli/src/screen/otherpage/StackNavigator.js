/* StackNavigator.js */
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomePage from './HomePage';
import Map from './Map';
import MyPage from './MyPage';
import SettingPage from './SettingPage';
import MagicStartPage from '../magiccastle/MagicStartPage'
import SwampStartPage from '../swamp/SwampStartPage'
import CaveStartPage from '../darkcave/CaveStartPage'
import SkyStartPage from '../sky/SkyStartPage'
import Ranking from '../ranking/Ranking'
import AllRank from '../ranking/AllRank'
import MagicRank from '../ranking/MagicRank'
import SwampRank from '../ranking/SwampRank'
import CaveRank from '../ranking/CaveRank'
import SkyRank from '../ranking/SkyRank'
import MyPageRecord from '../otherpage/MyPageRecord'
import SwampMain from '../swamp/SwampMain'
import ChaseMain from '../swamp/chasegame/ChaseMain'
import LoginPage from './LoginPage';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='HomePageStack' screenOptions={{ headerShown: false}}>
      <Stack.Screen name='HomePageStack' component={HomePage} />
      <Stack.Screen name='Map' component={Map} />
      <Stack.Screen name='MyPage' component={MyPage} />
      <Stack.Screen name='SettingPage' component={SettingPage} />
      <Stack.Screen name='MagicStartPage' component={MagicStartPage} />
      <Stack.Screen name='SwampStartPage' component={SwampStartPage} />
      <Stack.Screen name='CaveStartPage' component={CaveStartPage} />
      <Stack.Screen name='SkyStartPage' component={SkyStartPage} />
      <Stack.Screen name='Ranking' component={Ranking} />
      <Stack.Screen name='AllRank' component={AllRank} />
      <Stack.Screen name='MagicRank' component={MagicRank} />
      <Stack.Screen name='SwampRank' component={SwampRank} />
      <Stack.Screen name='CaveRank' component={CaveRank} />
      <Stack.Screen name='SkyRank' component={SkyRank} />
      <Stack.Screen name='MyPageRecord' component={MyPageRecord} />
      <Stack.Screen name='SwampMain' component={SwampMain} />
      <Stack.Screen name='ChaseMain' component={ChaseMain} />
      <Stack.Screen name='LoginPage' component={LoginPage} />
  </Stack.Navigator>
  );
}

export { StackNavigator };