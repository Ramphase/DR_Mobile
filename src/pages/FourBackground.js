import React from 'react';
import { View, Text, Image } from 'react-native';

export function FourBackground(props){
    return (
        <View style={{ height: '90%' }}>
            <View style={{ alignItems: 'center', height: '90%', backgroundColor: 'orangered'}}>
                <Text style = {{fontWeight: 'bold', fontSize: 40, color: 'black', marginTop: 40}}>{props.name}</Text>
                <Image source={require('./StopWatch2.png')}/>
            </View>
        </View>
    );
};

