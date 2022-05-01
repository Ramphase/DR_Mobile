import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

export function CustomButton(props) {
    return (
        <Button title={props.title} onPress={props.onPress} style={{fontSize: 18}} color='#0053f0'/>
    )
}