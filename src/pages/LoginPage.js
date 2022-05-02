import React, { useState } from 'react';
import { View, TextInput, KeyboardAvoidingView } from 'react-native';
import { LoginBackground } from './LoginBackground';
import { CustomButton } from '../components/CustomButton';


export function LoginPage({ navigation }) {
    const [loginName, setLoginName] = useState("");
    const [loginPass, setLoginPass] = useState("");


    return (
        <View>
            <LoginBackground name = {'Login'}/>
            <KeyboardAvoidingView style={{alignItems: 'center'}}>
                <View style={{backgroundColor: 'white', borderWidth: 5, borderRadius: 20, borderColor: 'gainsboro', width:380, height: 50, marginTop: 80}}>
                    <TextInput textAlign={'center'} placeholder={'Username'} onChangeText={setLoginName} value={loginName}/>
                </View>

                <View style={{backgroundColor: 'white', borderWidth: 5, borderRadius: 20, borderColor: 'gainsboro', width:380, height: 50, marginVertical: 20}}>
                    <TextInput secureTextEntry={true} textAlign={'center'} placeholder={'Password'} onChangeText={setLoginPass} value={loginPass}/>
                </View>

                <View style={{alignItems: 'stretch', height:350, width:380, marginTop: 120 }}>
                    <CustomButton title='Login' onPress={() => navigation.navigate("SwitchesList")}/>
                </View>
            </KeyboardAvoidingView>
        </View>
    );
}

function doLogin() {

}
