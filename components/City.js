import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';

const City = (props) => {
    const { city, navigation } = props

    return (
        <ImageBackground source={{ uri: city.imagen }} style={styles.card} >
            <Text onPress={() => { navigation.navigate("Itineraries", { id: city._id }) }} style={styles.title} >{city.titulo}</Text>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 42,
    },
    card: {
        height: 250,
        width: 350,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },
    title: {
        color: "white",
        fontSize: 40
    },
});

export default City