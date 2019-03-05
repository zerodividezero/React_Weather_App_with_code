import React,{Component} from 'react';
import {Image,ImageBackground,View,StyleSheet,ColorPropType,Text} from 'react-native';

export default class Splash extends React.Component{
    static navigationOptions ={
        header: null,
        title: null
    }
    componentDidMount(){
        // Start counting when the page is loaded
         setTimeout(()=>{
            // Add your logic for the transition
            this.props.navigation.navigate('Main') // what to push here?
        }, 3000);
    }

    

     render(){
        
         return( 
         <ImageBackground source={require('../assets/hmm.png')} style ={{ width: '100%',height: '100%'}} >
         <Image source={{uri:'http://www.feirox.com/rivu/2016/04/Klara-1-1.png',width:100,height:100}}
         style= {{alignSelf:'center', marginTop: '50%'}}/>
         <Text style={{ alignSelf:'center',fontSize:23,color:'white',padding:20}}>React Weather</Text>
         </ImageBackground> )
     }
    }
     