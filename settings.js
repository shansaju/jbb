import "firebase/database";
import firebase from "firebase";
import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { Component } from 'react'
  
const adddata = () => {
    let obj = {
        name: "TF66",
        age: 25,
      };
      firebase.database().ref("user4").set(obj);
}

  export class Settings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nam :'hi'
        }
    }

    componentDidMount(){
        firebase
        .database()
        .ref("user4")
        .on("value", snapshot => {
            this.setState({
                nam:snapshot.val(),
                
            })
        });
    }


    render() {
      return (
        <View style={styles.container}>
        <TouchableOpacity
          onPress={adddata}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Sigghrryyr</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={adddata}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Sigghyr</Text>
        </TouchableOpacity>
        <Text>hello {this.state.nam}</Text>
      </View>
      )
    }
  }
  
  export default Settings
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
     button: {
      backgroundColor: '#0782F9',
      width: '60%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 40,
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
  })