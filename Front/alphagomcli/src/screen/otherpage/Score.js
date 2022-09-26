import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

function Score () {

    const navigation = useNavigation();

    return (
    <View>
        <Text style={ styles.score }
        onPress={() => navigation.navigate('SkyStartPage')}>
            점수입니다.
        </Text>
    </View>
    );
};

const styles = StyleSheet.create({
    score:{
        fontSize:100,
        color:'black'
    }
})

export default Score;
