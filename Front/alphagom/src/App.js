import { StatusBar } from 'expo-status-bar';
import React from "react";
import { View } from 'react-native';

import HomePage from './components/otherpage/HomePage'

const App = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        }}
        >
        <HomePage />
        <StatusBar style="auto" />
        </View>
    );
};

export default App;