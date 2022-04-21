import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';


export function LoginPage() {
    const [showLogin, setShowLogin] = useState(0);
    const [showRegister, setShowRegister] = useState(0);
    const [loginName, setLoginName] = useState("");
    const [loginPass, setLoginPass] = useState("");
    const [registerName, setRegisterName] = useState("");
    const [registerPass, setRegisterPass] = useState("");

    if (showLogin == 1) {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                    <Text>Login</Text>
                </View>
                <View>
                    <Text>Username</Text>
                    <TextInput onChangeText={setLoginName} value={loginName}/>
                    <Text>Password</Text>
                    <TextInput onChangeText={setLoginPass} value={loginPass}/>
                    <Button title='Login' onPress={doLogin}/>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, flexDirection: 'row', padding : 32 }}>
                    <Button title='Login' onPress={() => setShowLogin((showLogin == 0) ? 1 : 0)}/>
                    <Button title='Register' onPress={() => setShowRegister((showRegister == 0) ? 1 : 0)}/>
                </View>
            </View>
        );
    }

    if (showRegister == 1) {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                    <Text>Register</Text>
                </View>
                <View>
                    <Text>Username</Text>
                    <TextInput onChangeText={setRegisterName} value={registerName}/>
                    <Text>Password</Text>
                    <TextInput onChangeText={setRegisterPass} value={registerPass}/>
                    <Button title='Login' onPress={doLogin}/>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, flexDirection: 'row', padding : 32 }}>
                    <Button title='Login' onPress={() => setShowLogin((showLogin == 0) ? 1 : 0)}/>
                    <Button title='Register' onPress={() => setShowRegister((showRegister == 0) ? 1 : 0)}/>
                </View>
            </View>
        );
    }

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <Text>Login</Text>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, flexDirection: 'row', padding : 32 }}>
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