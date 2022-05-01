import React from 'react';
import { View, Text, Image } from 'react-native';

export function SplashBackground(props){
    return (
        <View style={{ height: '90%' }}>
            <View style={{ alignItems: 'center', height: '90%', backgroundColor: 'orangered'}}>
                <Text style = {{ fontWeight: 'bold', fontSize: 40, color: 'white', marginTop: 60}}>{props.name}</Text>
                <Image style={{ marginTop: 100 }} source={require('./StopWatch2.png')}/>
            </View>
        </View>
    );
};

