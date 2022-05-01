import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

export function CustomButton(props) {
    return (
        <View style={{fontSize: 18, borderRadius: 10, overflow: 'hidden'}} >
            <Button title={props.title} onPress={props.onPress} color='#0053f0'/>
        </View>
        
    )
}