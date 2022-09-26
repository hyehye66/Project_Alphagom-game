import { withTheme } from '@rneui/themed';
import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, Image, ImageBackground, Text, TouchableOpacity } from 'react-native';

import SwampPrologue from './dialog/SwampPrologue';
import SwampEpilogue from './dialog/SwampEpilogue';
import SwampMiddle from './dialog/SwampMiddle';

import ChaseMain from './chasegame/ChaseMain';
import KingCureMain from './kingcuregame/KingCureMain';

import Score from '../otherpage/Score'

function SwampMain () {

    const [ beforeGame, setbeforeGame ] = useState(false)
    const [ middleGame, setmiddleGame ] = useState(false)
    const [ afterGame, setafterGame ] = useState(false)

    const [ chaseGame, setchaseGame ] = useState(false)
    const [ kingGame, setkingGame ] = useState(false)

    const [ changeImage, setchangeImage ] = useState(false)

    const [ fullLine, setfullLine ] = useState(false) 

    return (
        <View activeOpacity={1}>
        { changeImage === false ?
        <ImageBackground style={ styles.swamp }
            imageStyle={{ opacity:0.5 }}
            source={require('../../assets/image/추격전_배경_사진_필터_low.png')}>
        <TouchableOpacity 
        onPress={ () => { setfullLine(true) }}
        activeOpacity={1}>

        <View>
            { beforeGame === false ?
                <SwampPrologue fullLine={fullLine} setbeforeGame={setbeforeGame} setfullLine={setfullLine}/>
                : chaseGame === false ?
                <ChaseMain setchaseGame={setchaseGame} />
                : middleGame === false ?
                <SwampMiddle fullLine={fullLine} setmiddleGame={setmiddleGame} setfullLine={setfullLine} setchangeImage={setchangeImage} />
                : kingGame === false ?
                <KingCureMain setkingGame={setkingGame} setchangeImage={setchangeImage}/>
                : afterGame === false ?
                <SwampEpilogue fullLine={fullLine} setafterGame={setafterGame} setfullLine={setfullLine} />
                : <Score />
            }
        </View>

            </TouchableOpacity>
            </ImageBackground>

        : <ImageBackground style={ styles.swamp }
            imageStyle={{ opacity:0.5 }}
            source={require('../../assets/image/용궁_배경_사진_필터_low.png')}>
            <TouchableOpacity 
            onPress={ () => { setfullLine(true) }}
            activeOpacity={1}>

        <View>
            { beforeGame === false ?
                <SwampPrologue fullLine={fullLine} setbeforeGame={setbeforeGame} setfullLine={setfullLine}/>
                : chaseGame === false ?
                <ChaseMain setchaseGame={setchaseGame} />
                : middleGame === false ?
                <SwampMiddle fullLine={fullLine} setmiddleGame={setmiddleGame} setfullLine={setfullLine} setchangeImage={setchangeImage} />
                : kingGame === false ?
                <KingCureMain setkingGame={setkingGame} setchangeImage={setchangeImage}/>
                : afterGame === false ?
                <SwampEpilogue fullLine={fullLine} setafterGame={setafterGame} setfullLine={setfullLine} />
                : <Score />
            }
        </View>

        </TouchableOpacity>
        </ImageBackground>
        }
    </View>
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

export default SwampMain;