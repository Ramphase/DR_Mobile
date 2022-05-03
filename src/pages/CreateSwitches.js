import React, { useState } from 'react';
import { View, TextInput, KeyboardAvoidingView, Text } from 'react-native';
import { CustomButton } from '../components/CustomButton';

export function CreateSwitches({ navigation }) {
    return (
        <View style={{ alignItems: 'center', height: '100%', backgroundColor: 'orangered'}}>
            <View style={{ marginTop: 30, alignItems: 'center', flexDirection: 'column'}}>
                <Text style = {{fontWeight: 'bold', fontSize: 40, color: 'white', marginTop: 40, marginBottom: 120}}>Create Message</Text>

                <View style={{alignItems: 'center', backgroundColor: 'white', borderWidth: 5, borderRadius: 20, borderColor: 'gainsboro', width:380, height: 50, marginVertical: 20}}>
                    <TextInput textAlign={'center'} placeholder={'Message Name'} />
                </View>

                <View style={{alignItems: 'center', backgroundColor: 'white', borderWidth: 5, borderRadius: 20, borderColor: 'gainsboro', width:380, height: 50, marginVertical: 20}}>
                    <TextInput textAlign={'center'} placeholder={'Message Body'} />
                </View>

                <View style={{ marginTop: 180, marginBottom: 20, alignItems: 'center', flexDirection: 'column'}}>
                    <CustomButton title='Create Message' onPress={() => createMessage(navigation)} width= {250}/>
                </View>

            </View>
        </View>
    );
}

function createMessage({ navigation }) {
    navigation.navigate("MessageList");
}