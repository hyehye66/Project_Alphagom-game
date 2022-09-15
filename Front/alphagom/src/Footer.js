import React from 'react';

import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

function Footer () {
    
    const navigation = useNavigation();

    return (
    <SafeAreaView>
        <View>
            <Ionicons name="settings-sharp" 
            size={30} 
            color="black" 
            onPress={() => navigation.navigate('Settings')}
            />
        </View>

        <View>
        <Entypo name="home" 
            size={30} 
            color="black" 
            onPress={() => navigation.navigate('HomePage')}/>
        </View>

        <View>
        <Entypo name="back" 
           size={30} 
           color="black"
           onPress={() => navigation.goBack()}/>
        </View>
    </SafeAreaView>  
    );
};

export default Footer;