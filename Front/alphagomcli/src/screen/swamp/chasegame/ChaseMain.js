import { withTheme } from '@rneui/themed';
import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, Animated, SafeAreaView, View, Image, ImageBackground, Text } from 'react-native';

function ChaseMain () {
    return (
        <View>
            <Text style={ styles.text }>
                안녕하세요
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize:50,
        color:'black'
    }
})

export default ChaseMain;