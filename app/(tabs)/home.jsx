import { View, Text, StyleSheet, Image, TouchableOpacity, } from 'react-native'
import React from 'react'

export default function home() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Welcome to the Burger home page</Text>
      <View style={styles.imageBox}>
        <Image
          style={styles.images}
          source={require('../home.png')}
        />
      </View>

      <View style={styles.section1}>
        <Text>At Burger Joint, we’re all about simple, delicious food done right. Our menu is focused on the classics — juicy, mouthwatering burgers, crispy fries, and thick, creamy milkshakes that bring all the flavors together. Whether you’re a fan of our Double Cheese Burger or craving a cool milkshake to wash it down, we’ve got you covered.

          We believe in quality over quantity, which is why we keep our menu straightforward but packed with flavor. Come by and grab a burger, fries, and a shake today — your taste buds will thank you!</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Press Me</Text>
        </TouchableOpacity>
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

  section1: {

    padding: 10,
    width: 1800,
    height: 300,
  },

  section2: {
    backgroundColor: '#fc0303',
    width: 1800,
    height: 100,
  },

  images: {
    width: 200,
    height: 200,
    resizeMode: 'stretch',
  },

  imageBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },


  button: {
    height: 50,
    width: 100,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10, // optional, for rounded corners
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },


});