import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, ImageBackground, Text } from 'react-native';

import Footer from '../../Footer';

function SkyStartPage ({navigation}) {

    const [ timePassed, settimePassed ] = useState([false])
    const timer = setTimeout(() => {settimePassed(true)}, 2500)

    useEffect(() => {
        if (timePassed === true) {
            clearTimeout(timer)
            navigation.navigate('SkyMain');
        } else {
            timer
        }
    }, [timePassed])

    return (
        <SafeAreaView style={styles.background}>
        <View style={styles.centertitle}>
        <View style={styles.plustitle}>
        <Text style={styles.maintitle}>
        하늘
        </Text>
        <Text style={styles.subtitle}>
        ~ 견우와 직녀 ~
        </Text>
        </View>
        </View>
        <Footer />
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    background: {
    flex:1,
    backgroundColor:'#50bcdf',
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

export default SkyStartPage;