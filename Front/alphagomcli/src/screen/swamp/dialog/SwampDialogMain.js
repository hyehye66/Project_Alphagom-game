import { withTheme } from '@rneui/themed';
import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, Animated, SafeAreaView, View, Image, ImageBackground, Text, TouchableOpacity } from 'react-native';

import SwampPrologue from './SwampPrologue';
import SwampEpilogue from './SwampEpilogue';
import SwampMiddle from './SwampMiddle';

function SwampDialogMain () {

    const fadeAnim = useRef(new Animated.Value(0)).current

    const [ beforeGame, setbeforeGame ] = useState(false)
    const [ middleGame, setmiddleGame ] = useState(false)
    const [ afterGame, setafterGame ] = useState(false)
    const [ fullLine, setfullLine ] = useState(false)

    useEffect(() => {
        setmiddleGame(true)
    }, [beforeGame])

    useEffect(() => {
        setafterGame(true)
    }, [middleGame])

    return (
        <ImageBackground style={ styles.swamp }
            imageStyle={{ opacity:0.5 }}
            source={require('../../../assets/image/추격전_배경_사진_필터_low.png')}>
        <TouchableOpacity 
        onPress={ () => { setfullLine(true) }}
        activeOpacity={1}>
        {/* <Animated.View style={{ opacity: fadeAnim }}>
            </Animated.View> */}
            <View>
                { beforeGame === false ?
                    <SwampPrologue fullLine={fullLine} setbeforeGame={setbeforeGame} setfullLine={setfullLine}/>
                    : middleGame === false ?
                    <SwampMiddle changeLine={changeLine} setmiddleGame={setmiddleGame}/>
                    : afterGame === false ?
                    <SwampEpilogue changeLine={changeLine} />
                    : null
                }
            </View>
            </TouchableOpacity>
            </ImageBackground>
    );
};

const styles = StyleSheet.create({
    swamp: {
        width: 'auto',
        height:'100%',
    },
    background:{
        flex:1,
    },
})

export default SwampDialogMain;