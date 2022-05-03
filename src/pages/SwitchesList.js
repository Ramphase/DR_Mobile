import React, {useEffect} from 'react';
import { View, Text, FlatList,  VirtualizedList, 
    TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { CustomButton } from '../components/CustomButton';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


function SwitchesList(props) {
    const navigation = useNavigation();
    var DATA = [];
    useEffect(() => {
        var bp = 'https://dead-ringer.herokuapp.com/'
        console.log(props.token.userId);
        var obj = { userId: props.token.userID, jwtToken: props.token.token };
        var js = JSON.stringify(obj);
        var config = {
          method: "post",
          url: bp + "displayTriggers",
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
              setSwitches(
                res.results.map((swtch) => ({
                  id: swtch.triggerId,
                  name: swtch.triggerName,
                  msgId: swtch.message,
                  contactId: swtch.contactId[0],
                  timer: swtch.time,
                }))
              );
              console.log(res.results);
            } else {
              console.log("No contacts to display");
            }
          }
        });
      }, []);

    function setSwitches(list) {
        for (let i = 0; i < list.length; i++) {
            DATA[i] = list.i;
        }
    }


    function Item({item}) {
        return(
            <TouchableOpacity onPress={() => navigation.navigate("EditSwitches")} style={{margin: 15, width: 380, flexDirection: 'row',}}>
                <Text style={{fontSize: 18, width: 85,fontWeight: 'bold', marginTop: 20}}>{item.name}</Text>
                <Text style={{fontSize: 18, width: 125,fontWeight: 'bold', marginTop: 20}}>{item.msgId}</Text>
                <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 20, marginHorizontal: 11}}>{item.timer}</Text>
            </TouchableOpacity>
        );
    }

    return (
        <View style={{ alignItems: 'center', height: '100%', backgroundColor: 'orangered'}}>
            <View style={{ marginTop: 30, alignItems: 'center', flexDirection: 'column'}}>
                <Text style = {{fontWeight: 'bold', fontSize: 40, color: 'white', marginTop: 40}}> Switches</Text>
                

                <View style={{margin: 15, width: 380, flexDirection: 'row',}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 20, marginHorizontal: 9}}>Name</Text>
                    <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 20, marginHorizontal: 9}}>Message Number</Text>
                    <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 20, marginHorizontal: 9}}>Time Remaining</Text>
                </View>

                <View style={{backgroundColor: 'black', borderWidth: 3, borderColor: 'black', width:400, height: 0, marginVertical: 5}} />
                <FlatList renderItem={Item} data={DATA}/>

                <View style={{ marginTop: 120, marginBottom: 100, alignItems: 'center', flexDirection: 'column'}}>
                <CustomButton title='Create Switch' onPress={() => navigation.navigate("CreateSwitches")} width= {250}/>
                </View>

            </View>
        </View>
    );
}

function mapStateToProps(state) {
    const { token } = state;
    return { token };
}

export default connect(mapStateToProps)(SwitchesList)