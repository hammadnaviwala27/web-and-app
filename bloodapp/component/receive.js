import React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import fire from "./fire";

export default class Receive extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datalist: [],
        };
    }
    componentDidMount() {
        fire.firestore().collection("data").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let currArr = this.state.datalist;
                currArr.push(doc.data())
                this.setState({
                    load:true,
                    datalist: currArr
                })
                console.log(this.state.datalist);
            });
        });
    }

    render() {
        return (
            <ScrollView>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text style={styles.blood}>BLOOD BANK</Text>
                <Text style={styles.head}>View Donors</Text>
                    {this.state.datalist.map((item, index) => {
                        
                        return(
                        <switch>
                        <View>
                             <Text style={styles.Name} key={index}>{item.name}{"\n"}
                                <Text style={styles.email}>{item.Number}
                                    <Text style={styles.email}>{item.BloodGroup}
                                        <Text style={styles.email}>{item.Location}
                                            </Text>
                                                </Text>
                                                    </Text>
                                                        </Text>
                            
                        </View >
                        </switch>
                        )
                    })}
                </View>
            </ScrollView>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    head:{
        fontStyle:'italic',
        fontSize:20,
        fontWeight:'bold',
        backgroundColor:''
    },
    name: {
        fontSize: 22,
        paddingLeft: 15,
        color: '#2E7BFF',
        fontWeight: 'bold',
    },
    email: {
        fontSize: 18,
        paddingLeft: 15,
        fontWeight: '100',
        color: 'red',
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
});
