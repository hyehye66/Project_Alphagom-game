import { withTheme } from '@rneui/themed';
import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, Animated, SafeAreaView, View, Image, ImageBackground, Text } from 'react-native';

function ChaseMain ({setchaseGame}) {
    return (
        <View>
            <Text style={ styles.text }
            onPress={() => {setchaseGame(true)}}>
                일단 눌러~
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