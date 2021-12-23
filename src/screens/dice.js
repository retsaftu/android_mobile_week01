import React, { Component } from 'react';
// import { React } from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default class Dice extends Component{
    render(){
        return (
            <View>
                <View>
                    <Text>Let's play?</Text>
                </View>
                <View>
                    <Text>p1</Text>
                    
                </View>
                <View>
                    <Text>p2</Text>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
