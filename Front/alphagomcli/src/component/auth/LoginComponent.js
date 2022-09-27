import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { useNavigation } from "@react-navigation/native";

const LoginComponent = () => {

    const navigation = useNavigation();

    return (
        <View>
            <Text style={styles.loginbutton}
                onPress={() => {}}>
                구글로 로그인
            </Text>

            <Text style={styles.loginbutton}
                onPress={() => {}}>
                카카오로 로그인
            </Text>

            <Text style={styles.loginbutton}
                onPress={() => {}}>
                네이버로 로그인
            </Text>

            <Text style={styles.loginbutton}
                onPress={() => navigation.navigate('HomeScreen')}>
                임시 / 홈화면으로
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    loginbutton: {
        fontSize:50
    }
});

export default LoginComponent;