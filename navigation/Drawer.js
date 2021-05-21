import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { LogInPage, MyCities, MyHome, SignUpPage } from './Stack';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MyHome} />
      <Drawer.Screen name="Cities" component={MyCities} />
      <Drawer.Screen name="LogIn" component={LogInPage} />
      <Drawer.Screen name="SigUp" component={SignUpPage} />
    </Drawer.Navigator>
  );
}

export default MyDrawer