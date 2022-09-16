import React from 'react';
import { StyleSheet, View, SafeAreaView, Button, ImageBackground, ScrollView } from 'react-native';

import Footer from '../../Footer';

import { useNavigation } from '@react-navigation/native';

function Map () {

    const navigation = useNavigation();

    return (
        <ScrollView horizontal={true}>
        <ImageBackground 
            // style={{ width: 1200, height: '100%'}}
            style={ styles.background }
            source={require('../../assets/image/하늘_배경.png')}>
        <SafeAreaView style={styles.container}>
            
        <View style={styles.button}>
        <Button
            title="마법의 성"
            onPress={() => navigation.navigate('MagicStartPage')}
        />
        </View>
            
        <View style={styles.button}>
        <Button
            title="늪"
            onPress={() => navigation.navigate('SwampStartPage')}
        />
        </View>

        <View style={styles.button}>
        <Button
            title="어둠의 동굴"
            onPress={() => navigation.navigate('CaveStartPage')}
        />
        </View>

        <View style={styles.button}>
        <Button
            title="밤하늘"
            onPress={() => navigation.navigate('SkyStartPage')}
        />
        </View>
            
        </SafeAreaView>
            <Footer />
        </ImageBackground>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      marginHorizontal: 16,
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    background: {
        width: 1200,
        height: '100%'
    },
    button: {
        width:100,
        height:200,
    }
  });


export default Map;