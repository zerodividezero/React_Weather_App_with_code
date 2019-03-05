import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import {Form} from './screens/form'
import {Expopage} from './screens/expopage'


import Main from './screens/main';

import Splash from './screens/Splash';
import { SelectCode } from './screens/selectcode';

const Routes=createStackNavigator(
  {
    Splash:Splash,
    Main: Main,
    Form: Form,
    Expopage : Expopage,
    Select : SelectCode
    
  },
  {
    initialRouteName:"Splash"
  }
);

const AppContainer=createAppContainer(Routes);

export default class App extends React.Component{
  render(){
    return(
      <AppContainer />
    )
  }
}

const custom_style=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  text:{
    color:"#e91e63",
    width:"100%",
    padding:90
  }
})