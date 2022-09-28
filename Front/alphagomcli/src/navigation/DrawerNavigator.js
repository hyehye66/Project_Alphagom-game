import * as React from 'react';
import { View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from '../screen/home/HomeScreen';
import SettingScreen from '../screen/setting/SettingScreen';
import CustomDrawer from './CustomDrawer';
import LoginScreen from '../screen/auth/LoginScreen';
import StackNavigator from './StackNavigator'


const Drawer = createDrawerNavigator();


function DrawerNavigator () {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props} />}
        initialRouteName="HomePageDrawer"
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: '#aa18ea',
          drawerActiveTintColor: '#fff',
        }}
      >
        <Drawer.Screen
          name='메뉴' 
          component={StackNavigator} 
          options={{ drawerLabel: '메뉴' }} />
        <Drawer.Screen 
          name='처음으로' 
          component={HomeScreen} 
          options={{ drawerLabel: '처음으로' }} />
        <Drawer.Screen 
          name='설정하기' 
          component={SettingScreen} 
          options={{ drawerLabel: '설정하기' }} />
        <Drawer.Screen
           name='로그인'
           component={LoginScreen}
           options={{ drawerLabel: '로그인'}} />
      </Drawer.Navigator>
    </View>
  );
}


export default DrawerNavigator;