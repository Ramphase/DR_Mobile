import React from 'react';
import { View, Text, Button, TextInput, Platform, StyleSheet, Image } from 'react-native';
import {SplashBackground} from './SplashBackground';
import { CustomButton } from '../components/CustomButton';

export function MainMenu({ navigation }) {

    return (
        <View>
            <SplashBackground name = {'Dead Ringer'}/>
            <View style={{ alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row'}}>
                <CustomButton title='Login' onPress={() => navigation.navigate("Login")}/>
                <CustomButton title='Register' onPress={() => navigation.navigate("Register")}/>
            </View>
        </View>
    );
}