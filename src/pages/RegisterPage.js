import React, { useState, Component } from 'react';
import { View, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import {LoginBackground} from './LoginBackground';
import { CustomButton } from '../components/CustomButton';


export function RegisterPage({ navigation }) {
    const [loginName, setLoginName] = useState("");
    const [loginPass, setLoginPass] = useState("");
    const [registerName, setRegisterName] = useState("");
    const [registerPass, setRegisterPass] = useState("");

        return (
            <ScrollView scrollEnabled={false} showsVerticalScrollIndicator={false}>
                <LoginBackground name = {'Register'}/>
                <KeyboardAvoidingView behavior={'height'} style={{alignItems: 'center', marginTop: 20}}>
                    <View style={{alignItems: 'center', backgroundColor: 'white', borderWidth: 5, borderRadius: 20, borderColor: 'gainsboro', width:380, height: 50, marginVertical: 5}}>
                        <TextInput placeholder={'Email'} textAlign={'center'} onChangeText={setLoginName} value={loginName}/>
                    </View>

                    <View style={{alignItems: 'center', backgroundColor: 'white', borderWidth: 5, borderRadius: 20, borderColor: 'gainsboro', width:380, height: 50, marginVertical: 5}}>
                        <TextInput placeholder={'First Name'} textAlign={'center'} onChangeText={setLoginName} value={loginName}/>
                    </View>

                    <View style={{alignItems: 'center', backgroundColor: 'white', borderWidth: 5, borderRadius: 20, borderColor: 'gainsboro', width:380, height: 50, marginVertical: 5}}>
                        <TextInput placeholder={'Last Name'} textAlign={'center'} onChangeText={setLoginName} value={loginName}/>
                    </View>

                    <View style={{alignItems: 'center', backgroundColor: 'white', borderWidth: 5, borderRadius: 20, borderColor: 'gainsboro', width:380, height: 50, marginVertical: 5}}>
                        <TextInput secureTextEntry={true} textAlign={'center'} placeholder={'Password'} onChangeText={setLoginPass} value={loginPass}/>
                    </View>

                    <View style={{alignItems: 'center', backgroundColor: 'white', borderWidth: 5, borderRadius: 20, borderColor: 'gainsboro', width:380, height: 50, marginVertical: 5}}>
                        <TextInput secureTextEntry={true} textAlign={'center'} placeholder={'Confirm Password'} onChangeText={setLoginPass} value={loginPass}/>
                    </View>

                    <View style={{alignItems: 'stretch', height:350, width:380, marginVertical: 30  }}>
                        <CustomButton title='Register' onPress={doLogin}/>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
    );
}

function doLogin() {
    // do the login
}
