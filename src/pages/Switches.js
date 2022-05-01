import React from 'react';
import { View, Text, Button, StyleSheet, FlatList} from 'react-native';
import { CustomButton } from '../components/CustomButton';


export function Switches({ navigation }) {

    return (
          <View style={{ alignItems: 'center', height: '100%', backgroundColor: 'orangered'}}>
            <View style={{ marginTop: 30, alignItems: 'center', flexDirection: 'column'}}>
                <Text style = {{fontWeight: 'bold', fontSize: 40, color: 'white', marginTop: 40}}> Switches</Text>
                

                <FlatList renderItem={Item} data={DATA}/>


                <View style={{ marginTop: 120, marginBottom: 120, alignItems: 'center', flexDirection: 'column'}}>
                <CustomButton title='Create Switch' onPress={() => navigation.navigate("CreateSwitch")} width= {250}/>
                </View>

                </View>
        </View>
    );
}

function Item({item}) {
return(<View>
<Text>{item.title}</Text>
</View>);
}

const DATA = [
  {
    id: '1',
    title: 'First Item',
  },
  {
    id: '2',
    title: 'Second Item',
  },
  {
    id: '3',
    title: 'Third Item',
  },
];