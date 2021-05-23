import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { LogInPage, MyCities, MyHome, SignUpPage } from './Stack';
import { View, StyleSheet, Text } from 'react-native';
import CustomDrawerContent from '../screens/CustomDrawerContent'

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={MyHome} />
      <Drawer.Screen name="Cities" component={MyCities} />
      <Drawer.Screen name="LogIn" component={LogInPage} />
      <Drawer.Screen name="SignUp" component={SignUpPage} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  user: {
    width: "100%",
    height: 200
  },
  hola: {
    height: "100%",
    width: "100%"
  }
});

export default MyDrawer