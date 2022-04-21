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

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
