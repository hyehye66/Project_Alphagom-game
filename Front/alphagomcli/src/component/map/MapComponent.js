import * as React from 'react';
import { StyleSheet, View, Text, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";

const MapComponent = () => {
    
    const navigation = useNavigation();

    return (
        <View>

            <Text style={styles.mapbutton}
                onPress={() => navigation.navigate('MagicCastleStartScreen')}>
            마법의 성
            </Text>

            <Text style={styles.mapbutton}
                onPress={() => navigation.navigate('SwampStartScreen')}>
            늪
            </Text>

            <Text style={styles.mapbutton}
                onPress={() => navigation.navigate('DarkCaveStartScreen')}>
            어둠의 동굴
            </Text>

            <Text style={styles.mapbutton}
                onPress={() => navigation.navigate('SkyStartScreen')}>
            하늘
            </Text>

        </View>
    );
};

const styles = StyleSheet.create({
    mapbutton: {
        fontSize:50
    }
})

export default MapComponent;