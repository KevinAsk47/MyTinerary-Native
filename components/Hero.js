import React from 'react'
import { Video } from 'expo-av';
import { ImageBackground, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native';

const Hero = (props) => {
    return (
        <ImageBackground style={styles.image} source={{ uri: "https://image.freepik.com/vector-gratis/aviones-papel-volando-lineas-diseno-particulas-estilo_41814-315.jpg" }} >
            <Image source={require("../assets/logoDos.png")} style={styles.photo} />
            <Text style={styles.text}>Find your perfect trip, designed by insiders who knows and love their cities!</Text>
            <TouchableOpacity
                activeOpacity={.01}
                style={styles.button}
                onPress={() => { props.navigation.navigate('Cities') }}
            >
                <Text style={styles.submit}>Click Here!</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 700,
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        backgroundColor: "green",
        marginTop: 15,
        marginBottom: 15,
        height: 50,
        width: 160,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50
    },
    submit: {
        color: "white"
    },
    text: {
        fontSize: 30,
        textAlign: "center"
    },
    photo: {
        height: 300,
        width: 300
    }

});

export default Hero