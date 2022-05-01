import React from 'react';
import { View, Text } from 'react-native';

export function RegisterBackground(props){
  return (
        <View style={{ height: '40%' }}>
            <View style={{ alignItems: 'center', height: '60%', backgroundColor: 'orangered'}}>
                <Text style={{fontWeight: 'bold', fontSize: 40, color: 'black'}}>Dead Ringer</Text>
                <Text style={{fontWeight: 'bold', fontSize: 40, color: 'black'}}>{props.name}</Text>
            </View>
        </View>
    );
};
