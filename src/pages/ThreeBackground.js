import React from 'react';
import { View, Text } from 'react-native';

export function ThreeBackground(props){
  return (
        <View style={{ height: '20%' }}>
            <View style={{ alignItems: 'center', height: '30%', backgroundColor: 'orangered'}}>
                <Text style={{fontWeight: 'bold', fontSize: 40, color: 'black'}}>{props.name}</Text>
            </View>
        </View>
    );
};

