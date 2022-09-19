import React, { useRef, useState } from 'react';
import { StyleSheet, View, SafeAreaView, Text, } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function Footer () {
    
    const navigation = useNavigation();

    return (
    <View style={styles.point}>
  
        <View style={styles.container}>
            <View style={styles.full}>
            <Text style={styles.subtext}
                onPress={() => navigation.navigate('Settings')}>설정하기</Text>
            </View>

            <View style={styles.full}>
            <Text style={styles.subtext}
                onPress={() => navigation.navigate('HomePage')}>처음으로</Text>
            </View>

            <View style={styles.full}>
                <Text style={styles.subtext}
                    onPress={() => navigation.goBack()}>뒤로가기</Text>
            </View>
        </View>
    </View>  
    );
};

const styles = StyleSheet.create({
    point: {
        justifyContent:'flex-end',
    },
    container: {
        justifyContent:'flex-start',
        alignItems:'flex-end'
    },
    full: {
        flexDirection: 'row',
        alignItems:'flex-end'
    },
    subtext: {
        fontFamily:'Batang_Regular',
        color:'black',
        fontSize: 20,
        margin: 10
    }
})

export default Footer;