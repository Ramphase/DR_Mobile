import React from 'react';
import { View, Text, FlatList,  VirtualizedList, 
    TouchableOpacity } from 'react-native';
import { CustomButton } from '../components/CustomButton';


export function Switches({ navigation }) {
    function Item({item}) {
        return(
            <TouchableOpacity onPress={() => navigation.navigate("EditSwitches")} style={{margin: 15, width: 380, flexDirection: 'row',}}>
                <Text style={{fontSize: 18, width: 85,fontWeight: 'bold', marginTop: 20}}>{item.contact}</Text>
                <Text style={{fontSize: 18, width: 125,fontWeight: 'bold', marginTop: 20}}>{item.messageTitle}</Text>
                <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 20, marginHorizontal: 11}}>{item.remainingTime}</Text>
            </TouchableOpacity>
        );
    }

    return (
        <View style={{ alignItems: 'center', height: '100%', backgroundColor: 'orangered'}}>
            <View style={{ marginTop: 30, alignItems: 'center', flexDirection: 'column'}}>
                <Text style = {{fontWeight: 'bold', fontSize: 40, color: 'white', marginTop: 40}}> Switches</Text>
                

                <View style={{margin: 15, width: 380, flexDirection: 'row',}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 20, marginHorizontal: 9}}>Contact</Text>
                    <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 20, marginHorizontal: 9}}>Message Title</Text>
                    <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 20, marginHorizontal: 9}}>Time Remaining</Text>
                </View>

                <View style={{backgroundColor: 'black', borderWidth: 3, borderColor: 'black', width:400, height: 0, marginVertical: 5}} />
                <FlatList renderItem={Item} data={DATA}/>

                <View style={{ marginTop: 120, marginBottom: 100, alignItems: 'center', flexDirection: 'column'}}>
                <CustomButton title='Create Switch' onPress={() => navigation.navigate("CreateSwitch")} width= {250}/>
                </View>

            </View>
        </View>
    );
}



const DATA = [
  {
    id: '1',
    contact: 'Billy',
    messageTitle: 'Secrets',
    remainingTime: '10 minutes',
  },
  {
    id: '2',
    contact: 'Bob',
    messageTitle: 'Secrets',
    remainingTime: '30 minutes',
  },
  {
    id: '3',
    contact: 'Billy',
    messageTitle: 'BEEG Secrets',
    remainingTime: '12 hours',
  },

];