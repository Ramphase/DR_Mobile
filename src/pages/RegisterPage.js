import React, { useState, Component } from 'react';
import { View, Text, Button, TextInput, Platform, StyleSheet, } from 'react-native';
import {Background} from './Background';
import {TwoBackground} from './TwoBackground';
import {ThreeBackground} from './ThreeBackground';


export function RegisterPage() {
    const [showLogin, setShowLogin] = useState(0);
    const [showRegister, setShowRegister] = useState(0);
    const [loginName, setLoginName] = useState("");
    const [loginPass, setLoginPass] = useState("");
    const [registerName, setRegisterName] = useState("");
    const [registerPass, setRegisterPass] = useState("");


        return (
            <View>
            <Background name = {'Dead Ringer'}/>
            <ThreeBackground name = {'Register'}/>


            <View style={{alignItems: 'center', backgroundColor: 'white', borderWidth: 5,
             borderRadius: 20, borderColor: 'gainsboro', width:380, height: 50}}>
                    <Text>Email </Text>
                    <TextInput onChangeText={setLoginName} value={loginName}/>
                    </View>

              <View style={{alignItems: 'center', backgroundColor: 'white', borderWidth: 5,
             borderRadius: 20, borderColor: 'gainsboro', width:380, height: 50}}>
                    <Text>First Name </Text>
                    <TextInput onChangeText={setLoginName} value={loginName}/>
                    </View>

                      <View style={{alignItems: 'center', backgroundColor: 'white', borderWidth: 5,
             borderRadius: 20, borderColor: 'gainsboro', width:380, height: 50}}>
                    <Text>Last Name </Text>
                    <TextInput onChangeText={setLoginName} value={loginName}/>
                    </View>

             <View style={{alignItems: 'center', backgroundColor: 'white', borderWidth: 5, 
             borderRadius: 20, borderColor: 'gainsboro', width:380, height: 50}}>

                    <Text>Password</Text>
                    <TextInput onChangeText={setLoginPass} value={loginPass}/>
            </View>

            
            <View style={{alignItems: 'stretch', height:350, width:380  }}>
                          
                    <Button title='Register' onPress={doLogin}/>
            </View>
        </View>
    );
}

function doLogin() {
    // do the login
}
