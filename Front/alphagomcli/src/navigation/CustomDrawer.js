import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native';

const CustomDrawer = (props) => {
    // 이거 밖에 넣으면 'Invalid hook call. Hooks can only be called inside of the body of a function component' 에러 남
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{backgroundColor: '#ffffff'}}
            >
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    marginTop: 15,
                }}>
                    <Image
                        source={require('../assets/image/알파곰_표정_기본.png')}
                        style={{ 
                            height: 80, 
                            width: 80, 
                            marginTop: 2,

                        }}
                    />
                    <Text
                        style={{
                            fontSize: 14,
                            fontFamily: 'Roboto-Medium',
                            color: 'black',
                            marginVertical: 10,
                        }}>
                        알파곰 
                    </Text>
                </View>
                <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={{
                padding: 14,
                // borderTopWidth: 1, borderTopColor: '#ccc'
            }}>
                <TouchableOpacity 
                    onPress={() => navigation.goBack()}
                    style={{ paddingVertical: 2.5}}>
                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{ color: '#ccc', fontFamily: 'Roboto-Medium', fontSize: 14,  marginLeft: 5}}>
                            뒤로가기
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CustomDrawer;