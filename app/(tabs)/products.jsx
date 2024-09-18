
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'

export default function Products() {
  return (

    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titleText}>Products: Our burgers and more!</Text>

        <View style={styles.menuItem}>
          <Image
            style={styles.images}
            source={require('../burger.jpg')}
          />
          <Text style={styles.itemName}>Double Cheese Burger</Text>
          <Text style={styles.priceText}>Price: $3.99</Text>
        </View>

        <View style={styles.menuItem}>
          <Image
            style={styles.images}
            source={require('../fries.jpg')}
          />
          <Text style={styles.itemName}>Cheese Fries</Text>
          <Text style={styles.priceText}>Price: $1.00</Text>
        </View>

        <View style={styles.menuItem}>
          <Image
            style={styles.images}
            source={require('../shake.jpg')}
          />
          <Text style={styles.itemName}>Milkshake</Text>
          <Text style={styles.priceText}>Price: $2.99</Text>
        </View>

        <View style={styles.section2}></View>
      </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  menuItem: {
    alignItems: 'center', // Center items (image, text)
    marginBottom: 30, // Space between items
  },
  images: {
    width: 150,
    height: 150,
    borderRadius: 10, // Optional for rounded corners
    marginBottom: 10, // Space between image and text
    resizeMode: 'cover',
  },
  itemName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  priceText: {
    fontSize: 16,
    color: '#333',
  },
  section2: {
    backgroundColor: '#fc0303',
    width: '100%',
    height: 60,
    marginTop: 40,
  },
});
