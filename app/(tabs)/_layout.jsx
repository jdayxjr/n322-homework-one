import { View, Text } from 'react-native'
import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "../../constants/Colors";

export default function RootLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: Colors.links, }}>
      <Tabs.Screen name='home' options={{ tabBarLabel: "Homepage", tabBarIcon: ({ color }) => (<Ionicons name="home" size={24} color={color} />), }} />
      <Tabs.Screen name='products' options={{ tabBarLabel: "Products", tabBarIcon: ({ color }) => (<Ionicons name="fast-food" size={24} color={color} />), }} />
      <Tabs.Screen name='contact' options={{ tabBarLabel: "Contacts", tabBarIcon: ({ color }) => (<Ionicons name="person" size={24} color={color} />), }} />
    </Tabs>
  )
}