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
        <Text>Lorem ipsum odor amet, consectetuer adipiscing elit. Vestibulum nostra hac sodales praesent, tincidunt facilisis potenti feugiat. Proin orci tempus metus curabitur magna duis. Ridiculus porttitor potenti interdum curae eleifend fringilla amet. Curae tellus cursus potenti nullam fames senectus bibendum. Sagittis magnis bibendum aliquet est tortor commodo aenean mus. Fames integer quam est luctus montes sit curabitur nascetur. Ut nunc metus interdum consectetur tincidunt laoreet.

          Cras eleifend facilisi quam ullamcorper, vulputate iaculis rhoncus arcu. Mollis primis dictum gravida gravida blandit amet dictum id praesent. Taciti ullamcorper volutpat quis quam erat senectus commodo magna. Sed ornare hac nisl tellus et dolor mattis gravida. Habitant malesuada leo laoreet cras est. Purus vitae sagittis platea at nisi. Laoreet in vestibulum lacinia dis quis iaculis ipsum pretium fringilla. Maximus ante eros parturient nisl penatibus tortor dis. Fames rhoncus magnis ipsum in leo commodo diam erat. Duis egestas aenean lectus rutrum mollis penatibus.

          Bibendum risus ante tempor aliquet faucibus tristique libero scelerisque. Ut urna suscipit euismod aliquam dapibus facilisi magna. Nulla commodo amet lacinia montes duis. Porta varius porttitor tellus lectus mauris urna lacinia? Dignissim dui velit rhoncus torquent aenean. Curabitur dui congue sed eleifend tempus pellentesque iaculis felis. Ultrices tempus cursus quam laoreet ullamcorper congue.</Text>

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