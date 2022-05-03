/**
 * DeadRinger App
 *
 * @format
 * @flow strict-local
 */


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './src/pages/LoginPage'
import { RegisterPage } from './src/pages/RegisterPage'
import { MainMenu } from './src/pages/MainMenu'
import { CreateMessages } from './src/pages/CreateMessages';
import SwitchesList from './src/pages/SwitchesList'
import { CreateContacts } from './src/pages/CreateContacts';
import { EditContacts } from './src/pages/EditContacts';
import { EditMessages } from './src/pages/EditMessages';
import ContactsList from './src/pages/ContactsList';
import MessagesList from './src/pages/MessagesList';
import { EditSwitches } from './src/pages/EditSwitches';
import { CreateSwitches } from './src/pages/CreateSwitches';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import tokenReducer from './src/redux/Reducer';



const store = createStore(tokenReducer);
const Stack = createNativeStackNavigator();

function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="MainMenu"  screenOptions={{headerShown: false}}>
                <Stack.Screen name="MainMenu" component={MainMenu} />
                <Stack.Screen name="Login" component={LoginPage} />
                <Stack.Screen name="Register" component={RegisterPage} />
                <Stack.Screen name="SwitchesList" component={SwitchesList} />
                <Stack.Screen name="ContactsList" component={ContactsList} />
                <Stack.Screen name="MessagesList" component={MessagesList} />
                <Stack.Screen name="EditMessages" component={EditMessages} />
                <Stack.Screen name="CreateMessages" component={CreateMessages} />
                <Stack.Screen name="EditContacts" component={EditContacts} />
                <Stack.Screen name="CreateContacts" component={CreateContacts} />
                <Stack.Screen name="EditSwitches" component={EditSwitches} />
                <Stack.Screen name="CreateSwitches" component={CreateSwitches} />

                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

export default App;
