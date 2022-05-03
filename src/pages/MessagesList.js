import React from 'react';
import { View, Text, FlatList,  VirtualizedList, 
    TouchableOpacity } from 'react-native';
import { CustomButton } from '../components/CustomButton';


export function Messages({ navigation }) {
    function Item({item}) {
    return(
        <TouchableOpacity onPress={() => navigation.navigate("EditMessages")} style={{ margin: 15, width: 480, flexDirection: 'row',}}>
            <Text style={{fontSize: 14, width:160, fontWeight: 'bold', marginHorizontal: 26, marginTop: 1}}>{item.messageTitle}</Text>
            <Text style={{fontSize: 14, width: 125, fontWeight: 'bold', marginTop: 1, marginHorizontal: 1}}>{item.messageText}</Text>
        </TouchableOpacity>
    );
}

    return (
        <View style={{ alignItems: 'center', height: '100%', backgroundColor: 'orangered'}}>
            <View style={{ marginTop: 30, alignItems: 'center', flexDirection: 'column'}}>
                <Text style = {{fontWeight: 'bold', fontSize: 40, color: 'white', marginTop: 40}}> Messages</Text>


                <View style={{ width: 350, flexDirection: 'row', }}>
                    <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 20, marginHorizontal: 19}}>Message Title</Text>
                    <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 20, marginHorizontal: 49}}>Message Text</Text>
                </View>

                <View style={{backgroundColor: 'black', borderWidth: 3, borderColor: 'black', width:400, height: 0, marginVertical: 5}} />
                <FlatList renderItem={Item} data={DATA}/>

                <View style={{ marginBottom: 120, alignItems: 'center', flexDirection: 'column'}}>
                <CustomButton title='Create Message' onPress={() => navigation.navigate("CreateMessages")} width= {250}/>
                </View>
                

            </View>
        </View>
    );
}


const DATA = [
  {
    id: '1',
    messageTitle: 'Billy got that good kush boys lets go poppinlokcojf',
    messageText: 'HELP ME NIBBA'
  },
  {
    id: '2',
    messageTitle: 'Bdsadfdsffdsas go poppinlokcojf',
    messageText: 'dfsdaklfjadslkfjsdaklfj;dfjaskld'
  },
  {
    id: '3',
    messageTitle: 'Bhdgfjg443543454ets go poppinlokcojf',
    messageText: 'dfsdaklfjadslkfjsdaklfj;dfjaskld'
  },

];