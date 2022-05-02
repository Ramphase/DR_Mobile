/**
 * DeadRinger App
 *
 * @format
 * @flow strict-local
 */


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginPage } from './src/pages/LoginPage'
import { RegisterPage } from './src/pages/RegisterPage'
import { MainMenu } from './src/pages/MainMenu'
import { Switches } from './src/pages/SwitchesList'
import { Messages } from './src/pages/MessagesList'
import { ContactsList } from './src/pages/ContactsList'




const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
                <Stack.Navigator initialRouteName="MainMenu" screenOptions={{headerShown: false}}>
                <Stack.Screen name="MainMenu" component={MainMenu} />
                <Stack.Screen name="Login" component={LoginPage} />
                <Stack.Screen name="Register" component={RegisterPage} />
                <Stack.Screen name="SwitchesList" component={Switches} />
                <Stack.Screen name="ContactsList" component={ContactsList} />
                <Stack.Screen name="Messages" component={Messages} />


            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
