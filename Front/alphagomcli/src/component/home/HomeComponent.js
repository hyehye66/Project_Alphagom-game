import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

function HomeComponent () {  

    const navigation = useNavigation();

    return (
        <View>
            <Text style={styles.navibutton}
                onPress={() => navigation.navigate('MapScreen')}>
                탐험하기
            </Text>

            <Text style={styles.navibutton}
                onPress={() => navigation.navigate('MyPageScreen')}>
                나의 여정
            </Text>

            <Text style={styles.navibutton}
                onPress={() => navigation.navigate('RankScreen')}>
                순위보기
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    navibutton: {
        fontSize:50
    }
});

export default HomeComponent;