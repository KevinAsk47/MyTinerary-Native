import React from 'react'
import Home from './pages/Home'
import { Dimensions } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { createAppContainer } from 'react-navigation'
import { createDrawerNavigation } from 'react-navigation-drawer'
import { SignUp , LogIn , Cities } from './screens/screen'

const DrawerNavigator = createDrawerNavigation({
  SignUp,
  LogIn,
  Cities
})


export default createAppContainer(DrawerNavigator)
