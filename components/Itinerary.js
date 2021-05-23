import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, Image, Button } from 'react-native';

const Itinerary = (props) => {
    const { itinerary } = props
    const [viewMore, setViewMore] = useState(false)

    console.log(itinerary)

    return (
        <View style={styles.itinerariesConteiner}>
            <View style={styles.authorContainer}>
                <Image source={{ uri: itinerary.personaImagen }} style={styles.photo} />
                <Text style={styles.name}>Hi! I'Am {itinerary.personaNombre}</Text>
            </View>
            <View style={styles.itineraryConteiner}>
                <ImageBackground source={{ uri: itinerary.banner }} style={styles.banner} >
                    <Text style={styles.title} >{itinerary.titulo}</Text>
                </ImageBackground>
                {
                    viewMore &&
                    <View style={styles.commentsContainer}>

                    </View>
                }
                <View style={styles.button}>
                    <Button
                        onPress={() => { setViewMore(!viewMore) }}
                        title="View More"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    itineraryConteiner: {
        backgroundColor: "red",
        width: "90%",
        alignItems: "center",
        marginBottom: 10
    },
    itinerariesConteiner: {
        width: "100%",
        alignItems: "center"
    },
    photo: {
        height: 150,
        width: 150,
        borderRadius: 100,
        marginBottom: 10,
        marginTop: 10,
        borderColor: "black",
        borderWidth: 5
    },
    banner: {
        width: "100%",
        height: 150,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontSize: 30,
        textAlign: "center",
        color: "white",
        backgroundColor: "#000000a0",
        width: "100%"
    },
    commentsContainer: {
        height: 300,
        width: "100%",
        backgroundColor: "blue"
    },
    button: {
        marginTop: 10,
        marginBottom: 10,
    },
    authorContainer: {
        marginTop: 30,
        width: "90%",
        height: 180,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center"
    },
    name: {
        marginLeft: 10,
        fontSize: 15,
        textAlign: "center",
        backgroundColor: "#000000a0",
        color: "white"
    }
});

export default Itinerary