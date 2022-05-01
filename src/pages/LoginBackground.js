import React from 'react';
import { View, Text } from 'react-native';

export function LoginBackground(props){
  return (
        <View style={{ height: '30%' }}>
            <View style={{alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: 'orangered'}}>
                <Text style = {{fontWeight: 'bold', fontSize: 40, color: 'white', marginVertical: 20}}>Dead Ringer</Text>
                <Text style = {{fontWeight: 'bold', fontSize: 38, color: 'black', marginVertical: 40}}>{props.name}</Text>
            </View>
        </View>
      );
};