import React from 'react';
import { View, Text, FlatList,  VirtualizedList, 
    TouchableOpacity } from 'react-native';
import { CustomButton } from '../components/CustomButton';


export function Messages({ navigation }) {

    return (
        <View style={{ alignItems: 'center', height: '100%', backgroundColor: 'orangered'}}>
            <View style={{ marginTop: 30, alignItems: 'center', flexDirection: 'column'}}>
                <Text style = {{fontWeight: 'bold', fontSize: 40, color: 'white', marginTop: 40}}> Messages</Text>
                

                <View style={{backgroundColor: 'black', borderWidth: 3, borderColor: 'black', width:400, height: 0, marginVertical: 5}} />
                <FlatList renderItem={Item} data={DATA}/>

                <View style={{ marginTop: 120, marginBottom: 120, alignItems: 'center', flexDirection: 'column'}}>
                <CustomButton title='Create Message' onPress={() => navigation.navigate("CreateSwitch")} width= {250}/>
                </View>

            </View>
        </View>
    );
}

function Item({item}) {
    return(
        <TouchableOpacity style={{margin: 15, width: 380, flexDirection: 'row',}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 1, marginHorizontal:9}}>{item.contactID}</Text>
            <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 1, marginHorizontal: 9}}>{item.messageTitle}</Text>
            <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 1, marginHorizontal: 9}}>{item.remainingTime}</Text>
        </TouchableOpacity>
    );
}

const DATA = [
  {
    id: '1',
    contactID: 'Billy got that good kush boys lets go poppinlokcojf',
  },
  {
    id: '2',
    contactID: 'Bob dslkfjasd;lkfjdsl;kfjasdlk;fjdkl;fsj',

  },
  {
    id: '3',
    contactID: 'Bill flkdsalfkmdsaklfdflkdflkasdmf,.dsmf,.dsmf.,dsmf.,adsmf.y',
 
  },

];