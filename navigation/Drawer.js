import React, { useEffect } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { LogInPage, MyCities, MyHome, SignUpPage } from './Stack';
import CustomDrawerContent from '../screens/CustomDrawerContent'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux'
import userActions from '../redux/actions/userActions'

const Drawer = createDrawerNavigator();

function MyDrawer(props) {

  useEffect(() => {
    storage()
  }, [])

  const storage = async () => {
    if (!props.user && AsyncStorage.getItem('token')) {
      const tokenAsyncStorage = await AsyncStorage.getItem('token')
      const infoUser = await AsyncStorage.getItem('usuarioLogueado')
      const infoUserConvert = JSON.parse(infoUser)
      const userLoggedInfo = {
        token: tokenAsyncStorage,
        ...infoUserConvert
      }
      props.forceLoginLocalStore(userLoggedInfo)

      return null
    }
  }

  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={MyHome} />
      <Drawer.Screen name="Cities" component={MyCities} />
      <Drawer.Screen name="LogIn" component={LogInPage} />
      <Drawer.Screen name="SignUp" component={SignUpPage} />
    </Drawer.Navigator>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user.user
  }
}

const mapDispatchToProps = {
  forceLoginLocalStore: userActions.forceLoginLocalStore
}

export default connect(mapStateToProps, mapDispatchToProps)(MyDrawer)