import * as React from 'react';
import { createStackNavigator } from "react-navigation-stack";

import LoginScreen from '../screen/auth/LoginScreen';
import DarkCaveLineScreen from '../screen/darkcave/DarkCaveLineScreen';
import DarkCaveStartScreen from '../screen/darkcave/DarkCaveStartScreen';
import TongueTwisterGameScreen from '../screen/darkcave/TongueTwisterGameScreen';
import EndingScreen from '../screen/ending/EndingScreen';
import HomeScreen from '../screen/home/HomeScreen';
import MagicCastleLineScreen from '../screen/magiccastle/MagicCastleLineScreen';
import MagicCastleStartScreen from '../screen/magiccastle/MagicCastleStartScreen';
import MyPageEditScreen from '../screen/mypage/MyPageEditScreen';
import MyPageScreen from '../screen/mypage/MyPageScreen';
import RankScreen from '../screen/rank/RankScreen';
import SettingScreen from '../screen/setting/SettingScreen';
import SkyLineScreen from '../screen/sky/SkyLineScreen';
import SkyStartScreen from '../screen/sky/SkyStartScreen';
import BirdProverbGameScreen from '../screen/sky/BirdProverbGameScreen';
import SwampLineScreen from '../screen/swamp/SwampLineScreen';
import SwampStartScreen from '../screen/swamp/SwampStartScreen';
import ChaseGameScreen from '../screen/swamp/ChaseGameScreen';
import KingCureGameScreen from '../screen/swamp/KingCureGameScreen';
import MapScreen from '../screen/map/MapScreen';

const Stack = createStackNavigator();

function StackNavigator () {
    return (
        <Stack.Navigator initialRouteName='LoginScreen' screenOptions={{ headerShown: false}}>
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
            <Stack.Screen name='DarkCaveLineScreen' component={DarkCaveLineScreen} />
            <Stack.Screen name='DarkCaveStartScreen' component={DarkCaveStartScreen} />
            <Stack.Screen name='TongueTwisterGameScreen' component={TongueTwisterGameScreen} />
            <Stack.Screen name='EndingScreen' component={EndingScreen} />
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='MagicCastleLineScreen' component={MagicCastleLineScreen} />
            <Stack.Screen name='MagicCastleStartScreen' component={MagicCastleStartScreen} />
            <Stack.Screen name='MyPageEditScreen' component={MyPageEditScreen} />
            <Stack.Screen name='MyPageScreen' component={MyPageScreen} />
            <Stack.Screen name='RankScreen' component={RankScreen} />
            <Stack.Screen name='SettingScreen' component={SettingScreen} />
            <Stack.Screen name='SkyLineScreen' component={SkyLineScreen} />
            <Stack.Screen name='SkyStartScreen' component={SkyStartScreen} />
            <Stack.Screen name='BirdProverbGameScreen' component={BirdProverbGameScreen} />
            <Stack.Screen name='SwampLineScreen' component={SwampLineScreen} />
            <Stack.Screen name='SwampStartScreen' component={SwampStartScreen} />
            <Stack.Screen name='ChaseGameScreen' component={ChaseGameScreen} />
            <Stack.Screen name='KingCureGameScreen' component={KingCureGameScreen} />
            <Stack.Screen name='MapScreen' component={MapScreen} />
        </Stack.Navigator>
    );
};

export default StackNavigator;
