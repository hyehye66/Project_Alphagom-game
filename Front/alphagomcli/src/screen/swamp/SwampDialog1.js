import { withTheme } from '@rneui/themed';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Animated, SafeAreaView, View, Image, ImageBackground, Text } from 'react-native';

function SwampDialog1 (props) {
    return (
        <View>
            <Text style={styles.character }>
            자라
            </Text>
            <Text style={ styles.dialogtext }>
                간다. 구하러 용왕
            </Text>
            <Text style={ styles.dialogtext2 }>
                나 충성심 캡틴 터틀 강한.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    character: {
        fontFamily:'SSShinb7Regular',
        fontSize:50,
        color:'white',
        marginTop:190,
        marginLeft:100
    },
    dialogtext: {
        fontFamily:'Batang_Bold',
        fontSize:25,
        color:'black',
        marginLeft:100,
        marginTop:25    },
    dialogtext2: {
        fontFamily:'Batang_Bold',
        fontSize:25,
        color:'black',
        marginLeft:100,
        marginTop:10
    },
})

export default SwampDialog1;