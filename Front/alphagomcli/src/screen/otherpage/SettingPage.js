import React, { Component, createContext, useContext } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform, Dimensions, NativeModules, ScrollView, PermissionsAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SystemSetting from 'react-native-system-setting';
import Slider from '@react-native-community/slider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Bounce } from 'react-native-animated-spinkit'
import RNSoundLevel from 'react-native-sound-level'
import { yellowgreen } from 'color-name';

const _color = '#6E01EF';
const _size = 100;
// const SettingMicModule = NativeModules.SettingMicModule;

class SettingPage extends Component {

    isAndroid = Platform.OS === 'android'
    volumeListener = null
    volTypes = ['music', 'system', 'call', 'ring', 'alarm', 'notification']
    volIndex = 0
    micLevel = 0

    constructor(props) {
        super(props)
        this.state = {
            volume: 0,
            volType: this.volTypes[this.volIndex],
        }
    }

    async componentDidMount() {
        this.setState({
            volume: await SystemSetting.getVolume(this.state.volType),
        })
        // just init slider value directly
        this._changeSliderNativeVol(this.sliderVol, this.state.volume)

        this.volumeListener = SystemSetting.addVolumeListener((data) => {
            const volume = this.isAndroid ? data[this.state.volType] : data.value
            this._changeSliderNativeVol(this.sliderVol, volume)
            this.setState({
                volume: volume
            })
        })
    }

    _changeSliderNativeVol(slider, value) {
        slider.setNativeProps({
            value: value
        })
    }

    _changeVol(value) {
        SystemSetting.setVolume(value, {
            type: this.state.volType,
            playSound: false,
            showUI: false
        })
        this.setState({
            volume: value
        })
    }

    _changeVolType = async () => {
        this.volIndex = ++this.volIndex % this.volTypes.length
        const volType = this.volTypes[this.volIndex]
        const vol = await SystemSetting.getVolume(volType)
        this._changeSliderNativeVol(this.sliderVol, vol)
        this.setState({
            volType: volType,
            volume: vol
        })
    }

    _openAppSetting = async () => {
        await SystemSetting.openAppSystemSettings()
    }

    // spinner visibility
    changeColor() {
        this.setState({color: 'pink'});
    }

    componentDidMount() {
        RNSoundLevel.start()
        RNSoundLevel.onNewFrame = (data) => {
          // see "Returned data" section below
          console.log('Sound level info', data.rawValue)
          this.setState({
            micLevel: data.rawValue
            })
        }
    }
      
    // don't forget to stop it
    componentWillUnmount() {
        RNSoundLevel.stop()
    }

    render() {
        // 스피커
        const { volume, brightness,
            wifiEnable, wifiStateLoading,
            locationEnable, locationStateLoading,
            bluetoothEnable, bluetoothStateLoading,
            airplaneEnable, airplaneStateLoading, micLevel
        } = this.state
        
        // 마이크
        console.log('로그 보임?')
    

        return (
            <ScrollView 
                showsHorizontalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={{flexDirection: 'row', paddingBottom: 30}}>
                        <View>
                            <Text style={styles.subtext}
                                onPress={() => navigation.navigate('HomePage')}>처음으로</Text>
                        </View>
            
                        <View>
                            <Text style={styles.subtext}
                                onPress={() => navigation.goBack()}>닫기</Text>
                        </View>
                    </View>

                    <ValueView
                        title='스피커 조절'
                        btn={this.isAndroid && {
                            title: this.state.volType,
                            onPress: this._changeVolType
                        }}
                        value={volume}
                        changeVal={(val) => this._changeVol(val)}
                        refFunc={(sliderVol) => this.sliderVol = sliderVol}
                    />
                    <View style={styles.card}>
                        {/* <TouchableOpacity
                            onPress={
                                (() => {
                                //     if (onRmsChanged) return (this.changeColor)
                                // })()
                                })
                            }> 
                            <Bounce
                                style={styles.spinner}
                                isVisible="true'"
                                size={30}
                                type="Bounce"
                                color="yellow"/>
                        </TouchableOpacity> */}
                        <Text style={[styles.subtext, styles.title]}>마이크 테스트</Text>
                        <Slider
                            style={styles.sliderstyle}
                            minimumValue={0}
                            maximumValue={1000}
                            minimumTrackTintColor="#DBB4FF"
                            maximumTrackTintColor="#000000"
                            value={micLevel}
                            thumbTintColor="#00ff0000"
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
};

const ValueView = (props) => {
    const { title, value, changeVal, refFunc, btn } = props
    return (
        <View style={styles.card}>
            <View>
                <Text style={[styles.subtext, styles.title]}>{title}</Text>
            </View>
            <Slider
                // ref={refFunc}
                ref={ref => {this.refFunc = ref;}}
                style={styles.sliderstyle}
                onValueChange={changeVal}
                minimumTrackTintColor="#DBB4FF"
                maximumTrackTintColor="#000000"
                thumbTintColor="#BB47FF"
            />
        </View>
    )
}

const requestPermission = async () => {
    if (Platform.OS === 'android') {
      await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      ]).then(result => {
        if (
          result['android.permission.RECORD_AUDIO'] === 'granted'
        ) {
          console.log('마이크 권한 허용');
        } else {
          console.log('모든 권한 거절');
        }
      });
    } else {
    }
  };

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellowgreen'
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        color: 'black'
    },
    subtext: {
        fontFamily:'SSShinb7Regular',
        color:'#6F6F6F',
        fontSize: 20,
        margin: 10
    },
    sliderstyle: {
        width: 200,
        height: 40,
    },
})

export default SettingPage;