import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import Footer from '../../Footer';

function SkyMain () {

    return (
    <View>
        <Text style={ styles.score }>
            하늘입니다.
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

export default SkyMain;