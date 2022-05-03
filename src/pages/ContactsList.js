import React from 'react';
import { View, Text, FlatList,  VirtualizedList, 
    TouchableOpacity } from 'react-native';
import { CustomButton } from '../components/CustomButton';


export function ContactsList({ navigation }) {
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



const DATA = [
  {
    id: '1',
    name: 'Billy maddison',
    email: 'BigPapabill@gmail.com',
    phoneNumber: '407-414-8596',
  },
   {
    id: '2',
    name: 'Billy',
    email: 'Secrets',
    phoneNumber: '10 minutes',
  },
  {
    id: '3',
    name: 'Billy',
    email: 'Secrets',
    phoneNumber: '10 minutes',
  },

];