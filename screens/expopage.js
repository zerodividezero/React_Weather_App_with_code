import React, { Component } from "react";
import { View, Text ,TouchableOpacity,WebView} from 'react-native';

export class Expopage extends React.Component {
   
    render() {
        return (
            <WebView
            source={{uri: 'https://docs.expo.io/versions/latest/introduction/installation/'}}
            style={{marginTop: 20}}
          />

        )
    }
}


//link : https://docs.expo.io/versions/latest/introduction/installation