import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginPage } from './src/pages/LoginPage'
import { View, Text, Button, TextInput, Platform, StyleSheet, } from 'react-native';

export function ThreeBackground(props){
  return (

      <View style={{ height: '30%' }}>
      
      <View style={{ alignItems: 'center', height: '30%', backgroundColor: 'orangered'}}>
      <Text style = {{fontWeight: 'bold', fontSize: 40, color: 'black'}}>{props.name}</Text>
      </View>

      </View>
      );
};

