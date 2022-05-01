import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginPage } from './src/pages/LoginPage'
import { View, Text, Button, TextInput, Platform, StyleSheet, } from 'react-native';

export function Background(props){
  return (
        <View style={{ height: '20%' }}>
            <View style={{alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: 'orangered'}}>
                <Text style = {{fontWeight: 'bold', fontSize: 60, color: 'white'}}>{props.name}</Text>
            </View>
        </View>
    );
};

