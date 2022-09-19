import { View } from 'react-native';
import 'react-native-gesture-handler';
import React from "react";

import HomePage from './screen/otherpage/HomePage';
import Map from './screen/otherpage/Map';
import MyPage from './screen/otherpage/MyPage';
import Settings from './screen/otherpage/Settings';
import MagicStartPage from './screen/magiccastle/MagicStartPage'
import SwampStartPage from './screen/swamp/SwampStartPage'
import CaveStartPage from './screen/darkcave/CaveStartPage'
import SkyStartPage from './screen/sky/SkyStartPage'
import Ranking from './screen/ranking/Ranking';
import AllRank from './screen/ranking/AllRank'
import MagicRank from './screen/ranking/MagicRank'
import SwampRank from './screen/ranking/SwampRank'
import CaveRank from './screen/ranking/CaveRank'
import SkyRank from './screen/ranking/SkyRank'
import MyPageRecord from './screen/otherpage/MyPageRecord'

import { NavigationContainer } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/stack';

const Stack = createNativeStackNavigator();

function App () {
    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='HomePage' screenOptions={{ headerShown: false}}>
            <Stack.Screen name='HomePage' component={HomePage} />
            <Stack.Screen name='Map' component={Map} />
            <Stack.Screen name='MyPage' component={MyPage} />
            <Stack.Screen name='Settings' component={Settings} />
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
        </Stack.Navigator>
    </NavigationContainer>
    );
};

export default App;