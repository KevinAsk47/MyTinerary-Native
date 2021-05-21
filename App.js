import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from './navigation/Drawer';

const App = () => {
  return(
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  )
}




export default App
