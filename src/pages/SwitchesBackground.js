import React from 'react';
import { View, Text, Image } from 'react-native';

export function SwitchesBackground(props){
    return (
        <View style={{ height: '80%' }}>
            <View style={{ alignItems: 'center', height: '100%', backgroundColor: 'orangered'}}>
                <Text style = {{fontWeight: 'bold', fontSize: 40, color: 'white', marginTop: 40}}>{props.name}</Text>
            </View>
        </View>
    );
};

