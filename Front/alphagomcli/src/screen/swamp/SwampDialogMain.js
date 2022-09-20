import { withTheme } from '@rneui/themed';
import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, Animated, SafeAreaView, View, Image, ImageBackground, Text } from 'react-native';

import SwampDialog1 from './SwampDialog1';
import SwampDialog2 from './SwampDialog2';
import SwampDialog3 from './SwampDialog1';
import { rotationHandlerName } from 'react-native-gesture-handler/lib/typescript/handlers/RotationGestureHandler';

function SwampDialogMain (props) {

    const fadeAnim = useRef(new Animated.Value(0)).current

    const [ beforeGame, setbeforeGame ] = useState(false)
    const [ middleGame, setmiddleGame ] = useState(false)
    const [ afterGame, setafterGame ] = useState(false)
    // 0 : 토끼, 1 : 자라, 2 : 알파곰, 3 : 용왕
    const [ changeChar, setchangeChar ] = useState(0)

    useEffect(() => {
        Animated.timing(
          fadeAnim,
          {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true
          }
        ).start();
      }, [fadeAnim])

    useEffect(() => {
        setmiddleGame(true)
    }, [beforeGame])

    useEffect(() => {
        setafterGame(true)
    }, [middleGame])

    function CharAni () {
             if (changeChar === 0) {  
                return <Image
                style={ styles.rabbit }
                source={require('../../assets/image/토끼_전신.png')} />
            } else if (changeChar === 1 ) { 
                return <Image
                style={ styles.turtle }
                source={require('../../assets/image/자라_전신.png')} />
            } else if (changeChar === 2)  { 
                return <Image
                style={ styles.alphagom }
                source={require('../../assets/image/알파곰_전신.png')} />
            } else if (changeChar === 3) { 
                return <Image
                style={ styles.alphagom }
                source={require('../../assets/image/알파곰_전신.png')} />
            } else { return null }
        };

    const charras = null

    useEffect(() => {
        charres = CharAni()
    }, [changeChar])

    return (
        <ImageBackground style={ styles.swamp }
            imageStyle={{ opacity:0.5 }}
            source={require('../../assets/image/추격전_배경_사진_필터_low.png')}>
        <Animated.View style={{ opacity: fadeAnim }}>
            { this.charres }
            <Image
                style={ styles.dialog }
                source={require('../../assets/image/대화창_늪.png')}
                resizeMode='stretch'/>

            <View>
                { beforeGame === false ? (
                    <SwampDialog1 setbeforeGame={ setbeforeGame }/>
                    ) : middleGame === true ? (
                        <SwampDialog2 setmiddleGame={ setmiddleGame }/>
                    ) : afterGame === true ? (
                        <SwampDialog3 />
                ): null }
            </View>
        </Animated.View>
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
    turtle: {
        position:'absolute',
        width:250,
        height:400,
        marginLeft:50
    },
    rabbit: {
        position:'absolute',
        width:100,
        height:400,
        marginLeft:100
    },
    alphagom: {
        position:'absolute',
        width:180,
        height:380,
        marginTop:20,
        marginLeft:60  
    },
    dialog: {
        position:'absolute',
        marginTop:190,
        marginLeft:25,
        width:780,
        height:220,
        opacity:0.9
    },
})

export default SwampDialogMain;