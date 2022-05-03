import React, { useState } from 'react';
import { View, TextInput, KeyboardAvoidingView, Text } from 'react-native';
import { CustomButton } from '../components/CustomButton';

export function EditContacts({ navigation }) {
    return (
        <View style={{ alignItems: 'center', height: '100%', backgroundColor: 'orangered'}}>
            <View style={{ marginTop: 30, alignItems: 'center', flexDirection: 'column'}}>
                <Text style = {{fontWeight: 'bold', fontSize: 40, color: 'white', marginTop: 40, marginBottom: 80}}>Edit Contact</Text>

                <View style={{alignItems: 'center', backgroundColor: 'white', borderWidth: 5, borderRadius: 20, borderColor: 'gainsboro', width:380, height: 50, marginVertical: 10}}>
                    <TextInput textAlign={'center'} placeholder={'First Name'} />
                </View>

                <View style={{alignItems: 'center', backgroundColor: 'white', borderWidth: 5, borderRadius: 20, borderColor: 'gainsboro', width:380, height: 50, marginVertical: 10}}>
                    <TextInput textAlign={'center'} placeholder={'Last Name'} />
                </View>

                <View style={{alignItems: 'center', backgroundColor: 'white', borderWidth: 5, borderRadius: 20, borderColor: 'gainsboro', width:380, height: 50, marginVertical: 10}}>
                    <TextInput textAlign={'center'} placeholder={'Email'} />
                </View>

                <View style={{alignItems: 'center', backgroundColor: 'white', borderWidth: 5, borderRadius: 20, borderColor: 'gainsboro', width:380, height: 50, marginVertical: 10}}>
                    <TextInput textAlign={'center'} placeholder={'Phone Number'} />
                </View>

                <View style={{ marginTop: 40, marginBottom: 20, alignItems: 'center', flexDirection: 'column'}}>
                    <CustomButton title='Save Changes' onPress={() => saveChanges(navigation)} width= {250}/>
                </View>

                <View style={{ marginTop: 20, marginBottom: 20, alignItems: 'center', flexDirection: 'column'}}>
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