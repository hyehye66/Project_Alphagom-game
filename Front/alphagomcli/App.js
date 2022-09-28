import { View } from 'react-native';
import 'react-native-gesture-handler';
import 'react-native-reanimated'
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from './src/screen/otherpage/DrawerNavigator';


function App () {

    return (
    <NavigationContainer>
        <StatusBar hidden />
        <DrawerNavigator />
    </NavigationContainer>
    );
};

export default App;