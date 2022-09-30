import { View } from 'react-native';
import 'react-native-gesture-handler';
import * as React from 'react';
import { useEffect } from 'react';
import 'react-native-reanimated'
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from './src/navigation/DrawerNavigator';


function App () {

    return (
    <NavigationContainer>
        <StatusBar hidden />
        <DrawerNavigator />
    </NavigationContainer>
    );
};

export default App;