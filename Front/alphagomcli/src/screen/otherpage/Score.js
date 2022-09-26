import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import Footer from '../../Footer';
import { useNavigation } from '@react-navigation/native';

function Score () {

    const navigation = useNavigation();

    return (
    <View>
        <Text style={ styles.score }
        onPress={() => navigation.navigate('SkyStartPage')}>
            점수입니다.
        </Text>
        <Footer />
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
