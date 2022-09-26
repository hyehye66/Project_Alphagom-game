import React from "react";
import { View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StackNavigator } from "./StackNavigator";

import HomePage from "./HomePage";
import SettingPage from "./SettingPage";
import CustomDrawer from "./CustomDrawer";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
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
          component={HomePage} 
          options={{ drawerLabel: '처음으로' }} />
        <Drawer.Screen 
          name='설정하기' 
          component={SettingPage} 
          options={{ drawerLabel: '설정하기' }} />
      </Drawer.Navigator>
    </View>
  );
}


export default DrawerNavigator;