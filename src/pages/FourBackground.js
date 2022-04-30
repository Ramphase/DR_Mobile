import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button, TextInput, Platform, StyleSheet, } from 'react-native';

export function FourBackground(props){
    return (
    <View style={{ height: '50%' }}>
        <View style={{ alignItems: 'center', height: '80%', backgroundColor: 'orangered'}}>
            <Text style = {{fontWeight: 'bold', fontSize: 40, color: 'black'}}>{props.name}</Text>
        </View>
    </View>
      );
};

