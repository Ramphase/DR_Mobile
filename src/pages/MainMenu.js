import React from 'react';
import { View, Text, Button, TextInput, Platform, StyleSheet, Image } from 'react-native';
import {SplashBackground} from './SplashBackground';

export function MainMenu({ navigation }) {

    return (
        <View>
            <SplashBackground name = {'Dead Ringer'}/>
            <View style={{ alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row'}}>
                <Button title='Login' onPress={() => navigation.navigate("Login")}/>
                <Button title='Register' onPress={() => navigation.navigate("Register")}/>
            </View>
        </View>
    );
}