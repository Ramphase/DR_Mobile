import React, {useEffect} from 'react';
import { View, Text, FlatList,  VirtualizedList, 
    TouchableOpacity } from 'react-native';
import { CustomButton } from '../components/CustomButton';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';


function MessagesList(props) {
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
                  id: swtch.MessageId,
                  name: swtch.MessageName,
                  text: swtch.Text,
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
        <TouchableOpacity onPress={() => navigation.navigate("EditMessages")} style={{ margin: 15, width: 480, flexDirection: 'row',}}>
            <Text style={{fontSize: 14, width:160, fontWeight: 'bold', marginHorizontal: 26, marginTop: 1}}>{item.name}</Text>
            <Text style={{fontSize: 14, width: 160, fontWeight: 'bold', marginTop: 1, marginHorizontal: 1}}>{item.text}</Text>
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

function mapStateToProps(state) {
    const { token } = state;
    return { token };
}

export default connect(mapStateToProps)(MessagesList)
