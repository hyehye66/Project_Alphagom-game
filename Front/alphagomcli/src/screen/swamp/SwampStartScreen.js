import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

function SwampStartScreen () {

    const navigation = useNavigation();

    const [ timePassed, settimePassed ] = useState([false])
    const timer = setTimeout(() => {settimePassed(true)}, 2500)

    useEffect(() => {
        if (timePassed === true) {
            clearTimeout(timer)
            navigation.navigate('SwampLineScreen');
        } else {
            timer
        }
    }, [timePassed])

    return (
        <SafeAreaView style={styles.background}>
        <View style={styles.centertitle}>
        <View style={styles.plustitle}>
        <Text style={styles.maintitle}>
        늪
        </Text>
        <Text style={styles.subtitle}>
        ~ 별주부전 ~
        </Text>
        </View>
        </View>
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    background: {
    flex:1,
    backgroundColor:'#37474F',
    justifyContent:'center',
    },
    maintitle: {
    fontSize: 100,
    color: 'white',
    fontFamily: 'Title_Light',
    margin:10
    },
    subtitle: {
    fontSize: 30,
    color: 'grey',
    fontFamily: 'Batang_Bold',
    },
    centertitle: {
        flexDirection:'row',
        justifyContent:'center'
    },
    plustitle: {
        flexDirection:'column',
        alignItems:'center'
    }
})

export default SwampStartScreen;