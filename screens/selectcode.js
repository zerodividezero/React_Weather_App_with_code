import React,{ Component } from 'react';
import {View,Text,TouchableOpacity,Alert} from 'react-native';


export class SelectCode extends React.Component{
    static navigationOptions={
        title:'Select Your Option',
        headerStyle:{
            backgroundColor:'#2f3542'
        },
        
        headerTitleStyle:{color:'#1e90ff'},
    
}
    render(){
        
        alertmessage = () => {
            // console.log.toString('write down your github app address here along with \'\' ')
            
               Alert.alert('Good Work','write down your github app address here along with \' \' in the Code')
                {/* <Text>write down your github app address here along with</Text> */}
            
        }
        return(
            <View style={{width:'100%', height: '100%', backgroundColor: '#2f3542' ,
            justifyContent:'space-evenly'}}>
            <View style={{flexDirection: 'column',alignItems:'center',padding:10, 

            }}>
            <View>
                <TouchableOpacity style={{padding:10, backgroundColor:'#74b9ff', borderRadius:6 }}
                 onPress={()=> alertmessage()} >
                <Text style={{fontSize:17, color: '#dff9fb'}}>Show Code</Text></TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={{padding: 10,backgroundColor:'#74b9ff', borderRadius:6,
                 color: '#dfe6e9',marginTop:'10%'}}
                 onPress ={()=> this.props.navigation.navigate('Form')}>
                <Text style={{fontSize:18, color: '#dff9fb'}}>
                  build app/instructions  </Text></TouchableOpacity>
            </View>
            </View>
            </View>
        )
    }
}