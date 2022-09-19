import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Settings () {

    const navigation = useNavigation();

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

    </View>
    );
};

const styles = StyleSheet.create({
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