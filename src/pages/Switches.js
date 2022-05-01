import React from 'react';
import { View, Text, Button, StyleSheet, FlatList} from 'react-native';
import { CustomButton } from '../components/CustomButton';


export function Switches({ navigation }) {

    return (
          <View style={{ alignItems: 'center', height: '100%', backgroundColor: 'orangered'}}>
            <View style={{ marginTop: 30, alignItems: 'center', flexDirection: 'column'}}>
                <Text style = {{fontWeight: 'bold', fontSize: 40, color: 'white', marginTop: 40}}> Switches</Text>
                

<View style={{margin: 15, width: 350, flexDirection: 'row',}}>
<Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 20}}> Contact ID </Text>
<Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 20}}>Message Title</Text>
<Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 20}}> Time Remaining</Text>
</View>

<View style={{backgroundColor: 'black', borderWidth: 5, borderColor: 'black', width:400, height: 0, marginVertical: 5}}>
</View>


                <FlatList renderItem={Item} data={DATA}/>


                <View style={{ marginTop: 120, marginBottom: 120, alignItems: 'center', flexDirection: 'column'}}>
                <CustomButton title='Create Switch' onPress={() => navigation.navigate("CreateSwitch")} width= {250}/>
                </View>

                </View>
        </View>
    );
}

function Item({item}) {
return(<View style={{margin: 15, width: 350, flexDirection: 'row',}}>
<Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 20}}>{item.title}</Text>
<Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 20}}>{item.title}</Text>
<Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 20}}>{item.title}</Text>
</View>);
}

const DATA = [
  {
    id: '1',
    title: 'Contact ID',
  },
  {
    id: '2',
    title: 'Message Title',
  },
  {
    id: '3',
    title: 'Remaining Time',
  },

];