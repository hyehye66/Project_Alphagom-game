import React from 'react';
import { StyleSheet, StatusBar, Alert, View, Text, Slider, TouchableOpacity, Switch, ActivityIndicator, ScrollView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SystemSetting from 'react-native-system-setting';

function Settings () {

    const navigation = useNavigation();
    
    // isAndroid = Platform.OS === 'android'
    // volumeListener = null
    // volTypes = ['music', 'system', 'call', 'ring', 'alarm', 'notification']
    // volIndex = 0

    // constructor(props) ;{
    //     super(props)
    //     this.state = {
    //         volume: 0,
    //         volType: this.volTypes[this.volIndex],
    //     }
    // }

    // async function componentDidMount() ;{
    //     this.setState({
    //         volume: await SystemSetting.getVolume(this.state.volType),
    //     })
    //     // just init slider value directly
    //     this._changeSliderNativeVol(this.sliderVol, this.state.volume)

    //     this.volumeListener = SystemSetting.addVolumeListener((data) => {
    //         const volume = this.isAndroid ? data[this.state.volType] : data.value
    //         this._changeSliderNativeVol(this.sliderVol, volume)
    //         this.setState({
    //             volume: volume
    //         })
    //     })
    // }

    // _changeSliderNativeVol(slider, value) ;{
    //     slider.setNativeProps({
    //         value: value
    //     })
    // }

    // _changeVol(value) ;{
    //     SystemSetting.setVolume(value, {
    //         type: this.state.volType,
    //         playSound: false,
    //         showUI: false
    //     })
    //     this.setState({
    //         volume: value
    //     })
    // }

    // _changeVolType = async () => {
    //     this.volIndex = ++this.volIndex % this.volTypes.length
    //     const volType = this.volTypes[this.volIndex]
    //     const vol = await SystemSetting.getVolume(volType)
    //     this._changeSliderNativeVol(this.sliderVol, vol)
    //     this.setState({
    //         volType: volType,
    //         volume: vol
    //     })
    // }

    // _openAppSetting = async () => {
    //     await SystemSetting.openAppSystemSettings()
    // }

    // const volume = this.state

    return (
        <View>
            <Text>
                설정입니다
            </Text>

            <View style={styles.full}>
                <Text style={styles.subtext}
                    onPress={() => navigation.navigate('HomePage')}>처음으로</Text>
            </View>

            <View style={styles.full}>
                <Text style={styles.subtext}
                    onPress={() => navigation.goBack()}>뒤로가기</Text>
            </View>
            {/* <ValueView
                title='Volume'
                btn={this.isAndroid && {
                    title: this.state.volType,
                    onPress: this._changeVolType
                }}
                value={volume}
                changeVal={(val) => this._changeVol(val)}
                refFunc={(sliderVol) => this.sliderVol = sliderVol}
            />
            <View style={styles.card}>
                <View style={styles.row}>
                    <Text style={[styles.title, {flex: 1}]}>Func</Text>
                    <TouchableOpacity onPress={this._openAppSetting}>
                        <Text style={styles.btn}>Open App Setting</Text>
                    </TouchableOpacity>
                </View>
            </View> */}
        </View>
    );
};

// const ValueView = (props) => {
//     const { title, value, changeVal, refFunc, btn } = props
//     return (
//         <View style={styles.card}>
//             <View style={styles.row}>
//                 <Text style={styles.title}>{title}</Text>
//                 {btn && <TouchableOpacity onPress={btn.onPress}>
//                     <Text style={styles.btn}>{btn.title}</Text>
//                 </TouchableOpacity>}
//                 <Text style={styles.value}>{value}</Text>
//             </View>
//             <Slider
//                 ref={refFunc}
//                 style={styles.slider}
//                 onValueChange={changeVal} />
//         </View>
//     )
// }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E7E8'
    },
    head: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 64,
    },
    card: {
        padding: 8,
        backgroundColor: '#fff',
        marginVertical: 4
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8
    },
    title: {
        fontSize: 16,
        color: '#6F6F6F'
    },
    value: {
        fontSize: 14,
        flex: 1,
        textAlign: 'right',
        color: '#904ED9'
    },
    split: {
        marginVertical: 16,
        height: 1,
        backgroundColor: '#ccc',
    },
    btn: {
        fontSize: 16,
        padding: 8,
        paddingVertical: 8,
        color: '#405EFF'
    },
    full: {
        flexDirection: 'row',
        alignItems:'flex-end'
    },
    subtext: {
        fontFamily:'SSShinb7Regular',
        color:'black',
        fontSize: 20,
        margin: 10
        
    }
})

export default Settings;