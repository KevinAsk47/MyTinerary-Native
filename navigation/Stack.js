import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Text, StyleSheet } from 'react-native';
import Cities from '../pages/Cities';
import Home from '../pages/Home';
import Itineraries from '../pages/Itineraries';
import LogIn from '../pages/LogIn';
import SignUp from '../pages/SignUp';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createStackNavigator()

export const MyHome = (props) => {
    const redirectHome = () => {
        props.navigation.openDrawer()
    }

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{
                title: "Home",
                headerRight: () => <SimpleLineIcons style={styles.IconHamburger} onPress={redirectHome} name="menu" size={24} color="black" />

            }} />
        </Stack.Navigator>
    )
}

export const MyCities = (props) => {
    const redirectHome = () => {
        props.navigation.openDrawer()
    }
    return (
        <Stack.Navigator>
            <Stack.Screen name="Cities" component={Cities} options={{
                title: <MaterialCommunityIcons name="home-export-outline"
                    onPress={() => { props.navigation.navigate('Home') }} size={35} color="black" />,
                headerRight: () => <SimpleLineIcons style={styles.IconHamburger} onPress={redirectHome} name="menu" size={24} color="black" />

            }} />
        </Stack.Navigator>
    )
}

export const MyItineraries = (props) => {
    const redirectHome = () => {
        props.navigation.openDrawer()
    }
    return (
        <Stack.Navigator>
            <Stack.Screen name="Itineraries" component={Itineraries} options={{
                title: <MaterialCommunityIcons name="home-export-outline"
                    onPress={() => { props.navigation.navigate('Home') }} size={35} color="black" />,
                headerRight: () => <SimpleLineIcons style={styles.IconHamburger} onPress={redirectHome} name="menu" size={24} color="black" />

            }} />
        </Stack.Navigator>
    )
}

export const LogInPage = (props) => {
    const redirectHome = () => {
        props.navigation.openDrawer()
    }
    return (
        <Stack.Navigator>
            <Stack.Screen name="LogIn" component={LogIn} options={{
                title: <MaterialCommunityIcons name="home-export-outline"
                    onPress={() => { props.navigation.navigate('Home') }} size={35} color="black" />,
                headerRight: () => <SimpleLineIcons style={styles.IconHamburger} onPress={redirectHome} name="menu" size={24} color="black" />

            }} />
        </Stack.Navigator>
    )
}

export const SignUpPage = (props) => {
    const redirectHome = () => {
        props.navigation.openDrawer()
    }
    return (
        <Stack.Navigator>
            <Stack.Screen name="SignUp" component={SignUp} options={{
                title: <MaterialCommunityIcons name="home-export-outline"
                    onPress={() => { props.navigation.navigate('Home') }} size={35} color="black" />,
                headerRight: () => <SimpleLineIcons style={styles.IconHamburger} onPress={redirectHome} name="menu" size={24} color="black" />
            }} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    IconHamburger: {
        marginRight: 12
    }
});