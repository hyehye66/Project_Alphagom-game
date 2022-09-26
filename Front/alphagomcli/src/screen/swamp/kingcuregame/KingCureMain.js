import { withTheme } from '@rneui/themed';
import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, Animated, SafeAreaView, View, Image, ImageBackground, Text } from 'react-native';

function KingCureMain ({setkingGame, setchangeImage}) {
    return (
        <View>
            <Text style={ styles.text }
            onPress={() => {setkingGame(true), setchangeImage(false)}}>
                일단 눌러~2
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

export default KingCureMain;