
import React from 'react';
import { Text, View, TextInput, TouchableOpacity ,StyleSheet,Button} from 'react-native';
import fire from "./fire";


export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            psw: '',
        };
    }
    goToSignin(){
        this.props.navigation.navigate('Signin')
    }
    Signup(){
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.psw).then(()=>{
          
            this.props.navigation.navigate('Homescreen')            
        })
  
}


    render() {
        return (
            <View style={{ flex: 1, marginTop: 25,alignItems: "center", justifyContent: "center"}}>
                <Text style={styles.blood}>BLOOD BANK</Text>
                <Text style={styles.head}>Welcome To Signup Screen</Text>
                
                <TextInput
                    style={{ width: 300, height: 40, borderColor: 'gray', borderWidth: 1, padding: 5, marginTop: 10 }}
                    onChangeText={(name) => this.setState({ name })}
                    value={this.state.name} placeholder='Type your Name'
                />
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
                <TouchableOpacity onPress={this.Signup.bind(this)}><Text style={styles.up} >Signup</Text></TouchableOpacity>

                <TouchableOpacity onPress={this.goToSignin.bind(this)}><Text style={styles.con}>Already have an account? Signin</Text></TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    up: {
         
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
        backgroundColor:''
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