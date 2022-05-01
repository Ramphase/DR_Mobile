import React, { useState, Component } from 'react';
import { View, Text, Button, TextInput, Platform, StyleSheet, } from 'react-native';
import {Background} from './Background';
import { LoginBackground } from './LoginBackground';


export function LoginPage({ navigation }) {
    const [loginName, setLoginName] = useState("");
    const [loginPass, setLoginPass] = useState("");


        return (
            <View>
                <Background name = {'Dead Ringer'}/>
                <LoginBackground name = {'Login'}/>

                <View style={{alignItems: 'center', backgroundColor: 'white', borderWidth: 5, borderRadius: 20, borderColor: 'gainsboro', width:380, height: 50}}>
                    <TextInput placeholder={'Email'} onChangeText={setLoginName} value={loginName}/>
                </View>

                <View style={{alignItems: 'center', backgroundColor: 'white', borderWidth: 5, borderRadius: 20, borderColor: 'gainsboro', width:380, height: 50}}>
                    <TextInput placeholder={'Password'} onChangeText={setLoginPass} value={loginPass}/>
                </View>

                <View style={{alignItems: 'stretch', height:350, width:380  }}>
                    <Button title='Login' onPress={doLogin}/>
                </View>

                <View style={{ width:"15%", height: "35%", padding: 80, marginTop: 280, }}>
                    <Button title='Login' onPress={doLogin}/>
                </View>
            </View>
    );
}

function doLogin() {

}
