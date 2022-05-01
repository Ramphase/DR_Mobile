import React from 'react';
import { View, Text, Button, TextInput, Platform, StyleSheet, } from 'react-native';

export function LoginBackground(props){
  return (

      <View style={{ height: '20%' }}>
      
      <View style={{alignItems: 'center', justifyContent: 'center', height: '20%', backgroundColor: 'orangered'}}>
      <Text style = {{fontWeight: 'bold', fontSize: 40, color: 'black'}}>{props.name}</Text>
      </View>

      </View>
      );
};