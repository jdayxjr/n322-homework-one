import { View, Text, StyleSheet, Image, Button, Alert } from 'react-native'
import React from 'react'

export default function contact() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Contact Us</Text>
      <View>
        <Image
          style={styles.stretch}
          source={require('../contact.png')}
        />
      </View>

      <View style={styles.section1}>
        <Text style={styles.contactText} >Phone number: 1-888-888-8888</Text>
        <Text style={styles.contactText}>Email: johnjoe@gmail.com</Text>
        <Text style={styles.contactText}>Socials: Instagram YouTube Twitter</Text>
      </View>
      <View style={styles.section2}></View>
    </View>

  )
}

const styles = StyleSheet.create({

  container: {
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',

  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  contactText: {
    fontSize: 20,
  },

  section1: {
    backgroundColor: '#b4b8b5',
    padding: 10,
    width: 1800,
    height: 300,
  },

  section2: {

    width: 1800,
    height: 100,
  },

  stretch: {
    width: 200,
    height: 200,
    resizeMode: 'stretch',
  },


});