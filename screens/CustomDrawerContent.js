import React from 'react'
import { View, StyleSheet, Text, ImageBackground, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { connect } from 'react-redux'
import userActions from '../redux/actions/userActions';

const CustomDrawerContent = (props) => {
    return (
        <View style={styles.userConteiner}>
            <ImageBackground source={{ uri: "https://cdn.pixabay.com/photo/2016/11/01/18/38/background-1789175_960_720.png" }} style={styles.user} >
                {
                    props.user ?
                        <>
                            <Image source={{ uri: props.user.imagen }} style={styles.photo} />
                            <Text style={styles.textUser}>{props.user.usuario}</Text>
                        </> : <AntDesign name="user" size={80} color="white" />
                }
            </ImageBackground>
            <>
                <View style={styles.navigation}>
                    <Text style={styles.text} onPress={() => { props.navigation.navigate("Home") }}>Home</Text>
                </View>
                <View style={styles.navigation}>
                    <Text style={styles.text} onPress={() => { props.navigation.navigate("Cities") }}>Cities</Text>
                </View>
            </>
            {
                props.user ?
                    <View style={styles.logOut}>
                        <Entypo name="log-out" size={24} color="white" />
                        <Text style={styles.logOutText} onPress={() => { props.logOut() }}>Log Out</Text>
                    </View>
                    :
                    <>
                        <View style={styles.navigation}>
                            <Text style={styles.text} onPress={() => { props.navigation.navigate("LogIn") }}>Log In</Text>
                        </View>
                        <View style={styles.navigation}>
                            <Text style={styles.text} onPress={() => { props.navigation.navigate("SignUp") }}>Sign Up</Text>
                        </View>
                    </>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    userConteiner: {
        width: "100%",
        height: "100%",
        alignItems: "center"
    },
    user: {
        width: "100%",
        height: 200,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center"
    },
    navigation: {
        width: "90%",
        height: 50,
        backgroundColor: "black",
        marginTop: 10,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    logOut: {
        width: "90%",
        height: 50,
        backgroundColor: "red",
        marginTop: 10,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row'
    },
    logOutText: {
        fontSize: 20,
        marginLeft: 10,
        color: "white"
    },
    text: {
        fontSize: 20,
        color: "white"
    },
    photo: {
        height: 80,
        width: 80,
        borderRadius: 100,
        marginBottom: 10,
        marginTop: 10,
        borderColor: "black",
        borderWidth: 2
    },
    textUser: {
        fontSize: 30,
        color: "white"
    }
});

const mapStateToProps = state => {
    return {
        user: state.user.user
    }
}

const mapDispatchToProps = {
    logOut: userActions.logOut
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawerContent)