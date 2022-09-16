import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Settings () {

    const navigation = useNavigation();

   return ( 
    <View>
        <Text>
            설정입니다
        </Text>

        <View>
        <Button title="홈"
            onPress={() => navigation.navigate('HomePage')}/>
        </View>

        <View>
        <Entypo name="back" 
           size={30} 
           color="black"
           onPress={() => navigation.goBack()}/>
        </View>

    </View>
    );
};

export default Settings;