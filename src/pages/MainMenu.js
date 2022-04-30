import React, { useState, Component } from 'react';
import { View, Text, Button, TextInput, Platform, StyleSheet, Image } from 'react-native';
import {Background} from './Background';
import {TwoBackground} from './TwoBackground';
import {ThreeBackground} from './ThreeBackground';
import {FourBackground} from './FourBackground';
import {DisplayImage} from './DisplayImage';




export function MainMenu() {
    const [showLogin, setShowLogin] = useState(0);
    const [showRegister, setShowRegister] = useState(0);
    const [loginName, setLoginName] = useState("");
    const [loginPass, setLoginPass] = useState("");
    const [registerName, setRegisterName] = useState("");
    const [registerPass, setRegisterPass] = useState("");

    if (showLogin == 1) {
        return (
            <View>
            <Background name = {'Dead Ringer'}/>
            <TwoBackground name = {'Login'}/>


            <View style={{alignItems: 'center', backgroundColor: 'white', borderWidth: 5,
             borderRadius: 20, borderColor: 'gainsboro', width:380, height: 50}}>
                    <Text>Email</Text>
                    <TextInput onChangeText={setLoginName} value={loginName}/>
                    </View>

             <View style={{alignItems: 'center', backgroundColor: 'white', borderWidth: 5, 
             borderRadius: 20, borderColor: 'gainsboro', width:380, height: 50}}>

                    <Text>Password</Text>
                    <TextInput onChangeText={setLoginPass} value={loginPass}/>
            </View>

            
            <View style={{alignItems: 'stretch', height:350, width:380  }}>
                          
                    <Button title='Login' onPress={doLogin}/>
            </View>
            

    

        

           <View style={{ width:"15%", height: "35%", padding: 80, marginTop: 280, }}>
                <Button title='Login' onPress={() => setShowLogin((showLogin == 0) ? 1 : 0)}/>
            </View>
        </View>

             

        );
    }

    if (showRegister == 1) {
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

    return (
        <View>
        
         <FourBackground name = {'Dead Ringer'}/>
          

           <View style={{ alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row', marginTop: 160, padding : 100 }}>
                <Button title='Login' onPress={() => setShowLogin((showLogin == 0) ? 1 : 0)}/>
                <Button title='Register' onPress={() => setShowRegister((showRegister == 0) ? 1 : 0)}/>
            
        </View>
        </View>
    );
}


function doLogin() {
    // do the login
}

function doRegister() {
    // do the login
}
