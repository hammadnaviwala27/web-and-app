import React from "react";
import { View, Image, TouchableOpacity } from "react-native";


export default class Homescreen extends React.Component {
  gotodonate() {
    this.props.navigation.navigate('Donate')
  }
  gotoreceive() {
    this.props.navigation.navigate('Receive')
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      
           <TouchableOpacity onPress={this.gotodonate.bind(this)}><Image source={require('../donate.jpg')} style={{ width: 200, height: 200, marginBottom: 100 }} /></TouchableOpacity>
        <TouchableOpacity onPress={this.gotoreceive.bind(this)}><Image source={require('../receive.png')} style={{ width: 150, height: 150 }} /></TouchableOpacity>
      </View>
    );
  }
}