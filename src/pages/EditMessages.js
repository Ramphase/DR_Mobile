import React, { useState } from 'react';
import { View, TextInput, KeyboardAvoidingView, Text } from 'react-native';
import { CustomButton } from '../components/CustomButton';

export function EditMessages({ navigation }) {
    return (
        <View style={{ alignItems: 'center', height: '100%', backgroundColor: 'orangered'}}>
            <View style={{ marginTop: 30, alignItems: 'center', flexDirection: 'column'}}>
                <Text style = {{fontWeight: 'bold', fontSize: 40, color: 'white', marginTop: 40}}>Edit Message</Text>

                <View style={{alignItems: 'center', backgroundColor: 'white', borderWidth: 5, borderRadius: 20, borderColor: 'gainsboro', width:380, height: 50, marginVertical: 5}}>
                    <TextInput textAlign={'center'} placeholder={'Message Name'} />
                </View>

                <View style={{alignItems: 'center', backgroundColor: 'white', borderWidth: 5, borderRadius: 20, borderColor: 'gainsboro', width:380, height: 50, marginVertical: 5}}>
                    <TextInput textAlign={'center'} placeholder={'Message Body'} />
                </View>

                <View style={{ marginTop: 120, marginBottom: 120, alignItems: 'center', flexDirection: 'column'}}>
                    <CustomButton title='Save Changes' onPress={() => saveChanges(navigation)} width= {250}/>
                </View>

                <View style={{ marginTop: 120, marginBottom: 120, alignItems: 'center', flexDirection: 'column'}}>
                    <CustomButton title='Delete Message' onPress={() => saveChanges(navigation)} width= {250}/>
                </View>

            </View>
        </View>
    );
}

function saveChanges({ navigation }) {
    navigation.navigate("MessageList");
}

function deleteMessage({ navigation }) {
    navigation.navigate("MessageList");
}