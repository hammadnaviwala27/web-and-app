import React from 'react';
import { Text, View, TextInput, TouchableOpacity,StyleSheet } from 'react-native';
import fire from "./fire";


export default class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            psw: '',
        };
    }
    goToSignup() {
        this.props.navigation.navigate('Signup')
    }
    Signin(){
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.psw)
        .then(()=>{
            this.props.navigation.navigate('Homescreen')            
            })
            
    }

    render() {
        return (
            
            <View style={{ flex: 1, marginTop: 25,alignItems: "center", justifyContent: "center" }}>
                
                <Text style={styles.blood}>BLOOD BANK</Text>
                <Text style={styles.head}>Welcome To Signin Screen</Text>
                
                <TextInput
                    style={{ width: 300, height: 40, borderColor: 'gray', borderWidth: 1, padding: 5, marginTop: 10 }}
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email} placeholder='Type your email'
                />
                <TextInput
                    style={{ width: 300, height: 40, borderColor: 'gray', borderWidth: 1, padding: 5, marginTop: 10 }}
                    onChangeText={(psw) => this.setState({ psw })}
                    value={this.state.psw} placeholder='Type your Password'
                />
                <TouchableOpacity onPress={this.Signin.bind(this)}><Text style={styles.in}>Signin</Text></TouchableOpacity>
                <TouchableOpacity onPress={this.goToSignup.bind(this)}><Text style={styles.con}>Don't have an account? Signup</Text></TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    in: {
        
        backgroundColor:'blue',
        color:'white',
        textAlign:'center',
        fontSize:22,
        fontWeight:'bold',
        marginLeft:50,
        marginRight:80,
        marginTop:10,
        
    },
    con:{
        color:'blue',
        margin:10,

    },
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