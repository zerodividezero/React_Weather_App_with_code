import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  KeyboardAvoidingView,
  Button, Dimensions,
  BackHandler,BackAndroid
} from 'react-native';
import { bold } from 'ansi-colors';

export default class Main extends React.Component {
  state = {
    city: 'No city available',
    country: 'NULL',
    description: 'No description available...',
    weather_type: 'Unknown',
    windspeed: 0.00,
    pressure: 0.00,
    humidity: 0.00,
    temp: 0.00,
    PIN: 302022,
    isloading: false
  }

  static navigationOptions = {
    title: 'React Weather',
    headerStyle: {
      backgroundColor: '#f44336',
    },
    headerTitleStyle: { color: 'white', justifyContent: "center" },
    headerTintColor: "white",

  }

  fetchData = () => {
    this.setState({ isloading: true })
    var cityPIN = this.state.PIN
    fetch('http://api.openweathermap.org/data/2.5/weather?zip=' + cityPIN + ',in&apikey=c39b8c6129d4fb3b13c21dae5a1c3487')
      .then((response) => response.json())
      .then((resp) => {
        console.log(resp)
        this.setState({ city: resp.name })
        this.setState({ country: resp.sys.country })
        this.setState({ description: resp.weather[0].description })
        this.setState({ weather_type: resp.weather[0].main })
        this.setState({ windspeed: resp.wind.speed })
        this.setState({ pressure: resp.main.pressure })
        this.setState({ humidity: resp.main.humidity })
        this.setState({ temp: (resp.main.temp) })
        this.setState({ temp_min: (resp.main.temp_min) })
        this.setState({ temp_max: (resp.main.temp_max) })


      })
      .catch((error) => {
        alert("City PIN is invalid...")
      })
      .done(() => {
        this.setState({ isloading: false })
      });

  }
  componentDidMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
     BackAndroid.exitApp();
      return true;
    });
  }


  setPIN = (pin) => {
    this.setState({ PIN: pin })
  }
  render() {
    return (
      <KeyboardAvoidingView style={custom_style.container} behavior="padding" enabled>
        <View style={{ alignItems: "center" }}>
          <StatusBar hidden={false} />
          <Image source={{ uri: 'http://www.feirox.com/rivu/2016/04/Klara-1-1.png', width: 100, height: 100 }} />
          <Text>City name: {this.state.city}</Text>
          <Text>Country: {this.state.country}</Text>
          <Text>Description: {this.state.description}</Text>
          <Text>Weather Type: {this.state.weather_type}</Text>
          <Text>WindSpeed: {this.state.windspeed}<Text> m/sec</Text></Text>
          <Text>Pressure: {this.state.pressure}<Text> Atm</Text></Text>
          <Text>Humidity: {this.state.humidity}<Text> %</Text></Text>
          <Text>Temperature: {this.state.temp}<Text> Kelvin</Text></Text>
          <Text>Min_Temp: {this.state.temp_min}<Text> Kelvin</Text></Text>
          <Text>Max_Temp: {this.state.temp_max}<Text> Kelvin</Text></Text>

          <TextInput
            placeholder="Enter Your City's PIN..."
            onChangeText={(text) => this.setPIN(text)}
            keyboardType="number-pad"
            style={custom_style.textinput} />
          <TouchableOpacity
            style={{
              marginTop: "4%", width: "100%", justifyContent: "center",
              backgroundColor: '#f44336', padding: 10, alignItems: "center", borderRadius: 5
            }}
            onPress={() => this.fetchData()}>
            <Text style={{ color: "white" }}>Fetch Weather!</Text>
          </TouchableOpacity>
          <View style={{ marginTop: 10 }}>{this.state.isloading ? <ActivityIndicator size={30} color="red" /> : <Text>Enter the PIN code and fetch your weather data...</Text>}</View>
          {/* <Button style= {{borderRadius:6,marginTop:'80%',height:10}} title='Show CODE' onPress={() => this.fetchData()} /> */}

        </View>
        <TouchableOpacity style={{
          borderRadius: 8, backgroundColor: '#3F51B5'
          , height: '10%', width: Dimensions.get('window').width, alignItems: 'center',
          justifyContent: 'center', marginTop: '28%'
        }} onPress={() => this.props.navigation.navigate('Select')}>
          <Text style={{ color: "white", fontSize: 20, marginTop: '15%' }}>Show Code</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    )
  }
}

const custom_style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    alignItems: "center"
  },
  text: {
    color: "#e91e63",
    width: "100%",
    padding: 90
  },
  textinput: {
    borderBottomColor: '#f44336',
    borderBottomWidth: 1,
    width: 200
  }
})