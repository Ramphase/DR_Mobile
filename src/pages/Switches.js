import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { CustomButton } from '../components/CustomButton';


export function Switches({ navigation }) {

    return (
        <View style={{ alignItems: 'center', height: '100%', backgroundColor: 'orangered'}}>
            <View style={{ marginTop: 30, alignItems: 'center', flexDirection: 'column'}}>
                <Text style = {{fontWeight: 'bold', fontSize: 40, color: 'white', marginTop: 40}}> Switches</Text>
                

                <View style={{margin: 15, width: 350, flexDirection: 'row',}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 20, marginHorizontal: 10}}>Contact ID</Text>
                    <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 20, marginHorizontal: 10}}>Message Title</Text>
                    <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 20, marginHorizontal: 10}}>Time Remaining</Text>
                </View>

                <View style={{backgroundColor: 'black', borderWidth: 5, borderColor: 'black', width:400, height: 0, marginVertical: 5}} />


                <FlatList renderItem={Item} data={DATA}/>


                <View style={{ marginTop: 120, marginBottom: 120, alignItems: 'center', flexDirection: 'column'}}>
                <CustomButton title='Create Switch' onPress={() => navigation.navigate("CreateSwitch")} width= {250}/>
                </View>

            </View>
        </View>
    );
}

function Item({item}) {
    return(
        <TouchableOpacity style={{margin: 15, width: 350, flexDirection: 'row',}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 20, marginHorizontal: 10}}>{item.contactID}</Text>
            <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 20, marginHorizontal: 10}}>{item.messageTitle}</Text>
            <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 20, marginHorizontal: 10}}>{item.remainingTime}</Text>
        </TouchableOpacity>
    );
}

const DATA = [
  {
    id: '1',
    contactID: 'Billy',
    messageTitle: 'Secrets',
    remainingTime: '10 minutes',
  },
  {
    id: '2',
    contactID: 'Bob',
    messageTitle: 'Secrets',
    remainingTime: '30 minutes',
  },
  {
    id: '3',
    contactID: 'Billy',
    messageTitle: 'BEEG Secrets',
    remainingTime: '12 hours',
  },

];