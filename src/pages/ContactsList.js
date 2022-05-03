import React, {useEffect} from 'react';
import { View, Text, FlatList,  VirtualizedList, 
    TouchableOpacity } from 'react-native';
import { CustomButton } from '../components/CustomButton';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';


function ContactsList(props) {
    const navigation = useNavigation();
    var DATA = [];
    useEffect(() => {
        var bp = 'https://dead-ringer.herokuapp.com/'
        var obj = { userId: props.token.userID, jwtToken: props.token.token };
        var js = JSON.stringify(obj);
        var config = {
          method: "post",
          url: bp + "displayContacts",
          headers: {
            "Content-Type": "application/json",
          },
          data: js,
        };
        axios(config).then(function (response) {
          var res = response.data;
          console.log(res);
          if (res.error) {
            console.log("Failure");
          } else {
            console.log("Success");
            if (res.results.length > 0) {
              setContacts(
                res.results.map((swtch) => ({
                  name: swtch.MessageId,
                  email: swtch.MessageName,
                  phoneNumber: swtch.Text,
                }))
              );
              console.log(res.results);
            } else {
              console.log("No contacts to display");
            }
          }
        });
      }, []);

    function setContacts(list) {
        for (let i = 0; i < list.length; i++) {
            DATA[i] = list.i;
        }
    }
    function Item({item}) {
    return(
        <TouchableOpacity onPress={() => navigation.navigate("EditContacts")} style={{width: 380, flexDirection: 'row',}}>
            
            <Text style={{fontSize: 15, fontWeight: 'bold', width: 85, marginVertical: 10}}>{item.name}</Text>
            <Text style={{fontSize: 15, fontWeight: 'bold', width: 175, marginVertical: 10}}>{item.email}</Text>
            <Text style={{fontSize: 15, fontWeight: 'bold', marginVertical: 10}}>{item.phoneNumber}</Text>
        </TouchableOpacity>
    );
}

    return (
        <View style={{ alignItems: 'center', height: '100%', backgroundColor: 'orangered'}}>
            <View style={{ marginTop: 30, alignItems: 'center', flexDirection: 'column'}}>
                <Text style = {{fontWeight: 'bold', fontSize: 40, color: 'white', marginTop: 40}}> Contacts</Text>
                

                <View style={{ width: 400, flexDirection: 'row',}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 20, marginHorizontal: 8}}>Name</Text>
                    <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 20, marginHorizontal: 30}}>Email</Text>
                    <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 20, marginHorizontal: 99}}>Phone Number</Text>
                </View>

                <View style={{backgroundColor: 'black', borderWidth: 3, borderColor: 'black', width:400, marginVertical: 5}} />
                <FlatList renderItem={Item} data={DATA}/>

                <View style={{ marginBottom: 40, alignItems: 'center', flexDirection: 'column'}}>
                <CustomButton title='Create Contact' onPress={() => navigation.navigate("CreateContacts")} width= {250}/>
                </View>

            </View>
        </View>
    );
}

function mapStateToProps(state) {
    const { token } = state;
    return { token };
}

export default connect(mapStateToProps)(ContactsList)