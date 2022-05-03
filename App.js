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
import { EditMessages } from './src/pages/EditMessages';
import { CreateMessages } from './src/pages/CreateMessages';
import { EditContacts } from './src/pages/EditContacts';
import { CreateContacts } from './src/pages/CreateContacts';




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
                <Stack.Screen name="EditMessages" component={EditMessages} />
                <Stack.Screen name="CreateMessages" component={CreateMessages} />
                <Stack.Screen name="EditContacts" component={EditContacts} />
                <Stack.Screen name="CreateContacts" component={CreateContacts} />


            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
