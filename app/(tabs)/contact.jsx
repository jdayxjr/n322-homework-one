import { View, Text, StyleSheet, Image, Button, Alert } from 'react-native'
import React from 'react'

export default function contact() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Contact Us</Text>
      <View>
        <Image
          style={styles.stretch}
          source={require('../burger.jpg')}
        />
      </View>

      <View style={styles.section1}>
        <Text>Lorem ipsum odor amet, consectetuer adipiscing elit. Vestibulum nostra hac sodales praesent, tincidunt facilisis potenti feugiat. Proin orci tempus metus curabitur magna duis. Ridiculus porttitor potenti interdum curae eleifend fringilla amet. Curae tellus cursus potenti nullam fames senectus bibendum. Sagittis magnis bibendum aliquet est tortor commodo aenean mus. Fames integer quam est luctus montes sit curabitur nascetur. Ut nunc metus interdum consectetur tincidunt laoreet.

          Cras eleifend facilisi quam ullamcorper, vulputate iaculis rhoncus arcu. Mollis primis dictum gravida gravida blandit amet dictum id praesent. Taciti ullamcorper volutpat quis quam erat senectus commodo magna. Sed ornare hac nisl tellus et dolor mattis gravida. Habitant malesuada leo laoreet cras est. Purus vitae sagittis platea at nisi. Laoreet in vestibulum lacinia dis quis iaculis ipsum pretium fringilla. Maximus ante eros parturient nisl penatibus tortor dis. Fames rhoncus magnis ipsum in leo commodo diam erat. Duis egestas aenean lectus rutrum mollis penatibus.

          Bibendum risus ante tempor aliquet faucibus tristique libero scelerisque. Ut urna suscipit euismod aliquam dapibus facilisi magna. Nulla commodo amet lacinia montes duis. Porta varius porttitor tellus lectus mauris urna lacinia? Dignissim dui velit rhoncus torquent aenean. Curabitur dui congue sed eleifend tempus pellentesque iaculis felis. Ultrices tempus cursus quam laoreet ullamcorper congue.</Text>

        <Button
          title="Press me"
          color="#f194ff"
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
      </View>
      <View style={styles.section2}></View>
    </View>

  )
}

const styles = StyleSheet.create({

  container: {
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-around',

  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  section1: {
    backgroundColor: '#32ff',
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