import React from 'react';

import { StyleSheet, View, SafeAreaView, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { useNavigation } from '@react-navigation/native';

function Footer () {
    
    const navigation = useNavigation();

    return (
    <SafeAreaView>
        <View>
            <Button title="설정" 
            onPress={() => navigation.navigate('Settings')}
            />
        </View>

        <View>
        <Button title="홈"
            onPress={() => navigation.navigate('HomePage')}/>
        </View>

        <View>
        <Button title="뒤로가기" 
           onPress={() => navigation.goBack()}/>
        </View>
    </SafeAreaView>  
    );
};

export default Footer;