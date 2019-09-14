import React from "react";
import { View, Text, TextInput, Button ,StyleSheet } from "react-native";

import fire from "./fire";

export default class Donate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Number: '',
            BloodGroup: '',
            Location: ''

        };
    }
    sendData() {
        fire.firestore().collection('data').add({
            Name: this.state.Name,
            Number: this.state.Number,
            BloodGroup: this.state.BloodGroup,
            Location: this.state.Location,
        }).then(()=>{
            this.props.navigation.navigate('Homescreen')
        })
    }
    render() {
        return (
            
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text style={styles.blood}>BLOOD BANK</Text>
                <Text style={styles.head}>Donate Blood</Text>
                <TextInput
                    style={{ width: 300, height: 40, borderColor: 'gray', borderWidth: 1, padding: 5, marginTop: 10 }}
                    onChangeText={(Name) => this.setState({ Name })}
                    value={this.state.Name} placeholder='Type your Name'
                />
                <TextInput
                    style={{ width: 300, height: 40, borderColor: 'gray', borderWidth: 1, padding: 5, marginTop: 10 }}
                    onChangeText={(Number) => this.setState({ Number })}
                    value={this.state.Number} placeholder='Type your Number'
                />
                <TextInput
                    style={{ width: 300, height: 40, borderColor: 'gray', borderWidth: 1, padding: 5, marginTop: 10 }}
                    onChangeText={(BloodGroup) => this.setState({ BloodGroup })}
                    value={this.state.BloodGroup} placeholder='Type your Blood Group'
                />
                <TextInput
                    style={{ width: 300, height: 40, borderColor: 'gray', borderWidth: 1, padding: 5, marginTop: 10, marginBottom: 10 }}
                    onChangeText={(Location) => this.setState({ Location })}
                    value={this.state.Location} placeholder='Type your Location '
                />
                <Button title='submit' onPress={this.sendData.bind(this)} />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    

    
    head:{
        fontStyle:'italic',
        fontSize:20,
        fontWeight:'bold',
    },
    blood:{
        backgroundColor:'red',
        color:'white',
        textAlign:'center',
        fontSize:50,
        fontWeight:'bold',
        fontStyle:'italic',
        marginTop:15,
        marginBottom:15,
    }
})