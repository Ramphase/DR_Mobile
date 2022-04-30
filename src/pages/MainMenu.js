import React from 'react';
import { View, Text, Button, TextInput, Platform, StyleSheet, Image } from 'react-native';
import {FourBackground} from './FourBackground';

export function MainMenu({ navigation }) {

    return (
        <View>
            <FourBackground name = {'Dead Ringer'}/>
            <View style={{ alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row', marginTop: 160, padding : 100 }}>
                <Button title='Login' onPress={() => navigation.navigate("Login")}/>
                <Button title='Register' onPress={() => navigation.navigate("Register")}/>
            </View>
        </View>
    );
}