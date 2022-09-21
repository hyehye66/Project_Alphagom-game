import { withTheme } from '@rneui/themed';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Animated, SafeAreaView, View, Image, ImageBackground, Text } from 'react-native';

function SwampMiddle () {
    return (
        <View>
            <Text style={ styles.dialogtext }>
                로그3
            </Text>
        </View>
    );
};

const styles = StyleSheet.compose({
    dialogtext: {
        fontFamily:'Batang_Bold',
        fontSize:100,
        color:'black',
        marginLeft:100,
        marginTop:250
    },
})

export default SwampMiddle;