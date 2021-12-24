import React, {Component}  from "react";
import {View, Text, StyleSheet, Button, Image} from "react-native";

export default class Dice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            source:require('../../assets/dice1.png')
        }
    }
    
    buttonHandler=()=>{
        let array=[require('../../assets/dice1.png'),require('../../assets/dice2.png'),
            require('../../assets/dice3.png'),require('../../assets/dice4.png'),
            require('../../assets/dice5.png'),require('../../assets/dice6.png')]
        let number=Math.floor(Math.random() * 6);
        this.setState({source:array[number]})
    }

    render() {
        return (
            <View style={localStyles.body}>
                <Text style={localStyles.name}>Timur Kazdayev SE-2017</Text>
                <Image source={this.state.source} style={localStyles.image}/>
                <Button title='ROLL' onPress={this.buttonHandler}/>
            </View>

        )
    }
}
const localStyles= StyleSheet.create({
    body:{
        backgroundColor: '#fff',
        top:20
    },
    name:{
        position:'absolute',
        right:5,
        top:20
    },
    image:{
        width:200,
        height:200
    }
})
