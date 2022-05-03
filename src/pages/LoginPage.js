import React, { useState } from 'react';
import { View, TextInput, KeyboardAvoidingView } from 'react-native';
import axios from 'axios';
import { LoginBackground } from './LoginBackground';
import { CustomButton } from '../components/CustomButton';
import jwt_decode from 'jwt-decode';
import { setToken, setId } from '../redux/Action';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


function LoginPage(props) {
    const navigation = useNavigation();
    const [loginName, setLoginName] = useState("");
    const [loginPass, setLoginPass] = useState("");
    const [message, setMessage] = useState("");

    function doLogin() {
        var bp = 'https://dead-ringer.herokuapp.com/'
        var obj = {login:loginName,password:loginPass};
        var js = JSON.stringify(obj);
        var config = 
        {
            method: 'post',
            url: bp + 'login',
            headers: 
            {
                'Content-Type': 'application/json'
            },
            data: js
        };
        axios(config)
            .then(function (response) 
        {
            var res = response.data;
            if (res.error) 
            {
                setMessage('User/Password combination incorrect');
            }
            else 
            {
                var ud = jwt_decode(res.accessToken);
                var userId = ud.userId;
                props.setToken(res.accessToken);
                props.setId(userId);
                navigation.navigate("SwitchesList");
            }

        })
        .catch(function (error) 
        {
            console.log(error);
        }); 
    }


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
                    <CustomButton title='Login' onPress={() => doLogin()}/>
                </View>
            </KeyboardAvoidingView>
        </View>
    );
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
      setToken,
      setId,
    }, dispatch)
  );

export default connect(null, mapDispatchToProps)(LoginPage)