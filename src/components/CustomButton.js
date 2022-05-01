import React from 'react';
import { TouchableOpacity, Text } from "react-native";

export function CustomButton(props) {
    return (
        <TouchableOpacity onPress={props.onPress} color='#0053f0' style={{ justifyContent: 'center', alignItems: 'center', borderRadius: 10, overflow: 'hidden', backgroundColor: '#0053f0', height: 50, width: props.width}}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>{props.title}</Text>
        </TouchableOpacity>
    )
}