import { withTheme } from '@rneui/themed';
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Animated, SafeAreaView, View, Image, ImageBackground, Text } from 'react-native';

import SwampLine from '../../../dialog/SwampLine.json';

function SwampEpilogue ({fullLine, setfullLine, setafterGame }) {

    const fadeLine = useRef(new Animated.Value(0)).current
    const fadeImage = useRef(new Animated.Value(0)).current
    const fadeDialog = useRef(new Animated.Value(0)).current

    const [ idx, setidx ] = useState(0)
    const charname = SwampLine.epilogue[idx].char
    const line1 = SwampLine.epilogue[idx].line1
    const line2 = SwampLine.epilogue[idx].line2

    function checkDialog () {
        if (idx + 1 === SwampLine.epilogue.length) {
            setafterGame(true)
            return
        } 
    }

    useEffect(() => {
        checkDialog()
    }, [idx])

    useEffect(() => {
        fadeLine.setValue(0);
        if (fullLine === false || idx === 0) {
        Animated.timing(
            fadeLine,
            {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true
            }
            ).start(() => setfullLine(true));
    } else {
        Animated.timing(
            fadeLine,
            {
                toValue: 1,
                duration: 0,
                useNativeDriver: true
            }).start();
    }}, [fullLine])

    useEffect(() => {
        Animated.timing(
          fadeImage,
          {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true
          }
        ).start();
      }, [])

    useEffect(() => {
    Animated.timing(
        fadeDialog,
        {
        toValue: 0.9,
        duration: 1500,
        useNativeDriver: true
        }
    ).start();
    }, [])

    return (
        <View>
            <Animated.Text style={[styles.step, {opacity:fadeImage}]}
        onPress={() => { setafterGame(true)} }>건너뛰기</Animated.Text>
           { charname === "토끼" ? <Animated.Image
                style={ [styles.rabbit, {opacity:fadeImage}] }
                source={require('../../../assets/image/토끼_전신.png')}/>
           : charname === "자라" ? <Animated.Image
           style={ [styles.turtle, {opacity:fadeImage}] }
           source={require('../../../assets/image/자라_전신.png')}/>
            : charname === "용왕" ? <Animated.Image
            style={ [styles.king, {opacity:fadeImage}] }
            source={require('../../../assets/image/용왕_전신.png')}/>
            : charname === "알파곰" ? <Animated.Image
            style={ [styles.alphagom, {opacity:fadeImage}] }
            source={require('../../../assets/image/알파곰_전신.png')}/>
            : charname === "회오리" ? <Animated.Image
            style={ [styles.rabbit, {opacity:fadeImage}] }
            source={require('../../../assets/image/알파곰_전신.png')}/>
            : null
        }      
            <Animated.Image
                style={[styles.dialog, {opacity:fadeDialog}]}
                source={require('../../../assets/image/대화창_늪.png')}
                resizeMode='stretch'/> 
            <Animated.Text style={ [styles.character, {opacity:fadeImage}] }>
            { charname }
            </Animated.Text>

            <Animated.Text style={[styles.dialogtext, {opacity: fadeLine}]}>
            { line1 }{"\n"}{ line2 }
            </Animated.Text>
        <View style={{flexDirection:'row'}}>
        { idx !== 0 && fullLine === true ?
            <Text style={styles.before}
            onPress={() => { setidx(idx - 1), setfullLine(false) }}>이전</Text>
            : <></>
        }
        { fullLine === true ? 
        <Text style={styles.next}
        onPress={() => { setidx(idx + 1), setfullLine(false)} }>다음</Text>
        : <></>
        }
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    character: {
        fontFamily:'SSShinb7Regular',
        fontSize:50,
        color:'white',
        marginTop:155,
        marginLeft:90
    },
    dialogtext: {
        fontFamily:'Batang_Bold',
        fontSize:25,
        color:'black',
        marginLeft:100,
        marginTop:20
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
    king: {
        position:'absolute',
        width:250,
        height:400,
        marginLeft:70
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
    next: {
        color:'black',
        fontSize:30,
        fontFamily:'SSShinb7Regular',
        marginLeft:30

    },
    before: {
        color:'black',
        fontSize:30,
        fontFamily:'SSShinb7Regular',
        marginLeft:650,
    },
    step: {
        color:'black',
        fontSize:30,
        fontFamily:'SSShinb7Regular',
        marginLeft:20
    },
})

export default SwampEpilogue;