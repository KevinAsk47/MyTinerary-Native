import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, Image, Button, ToastAndroid } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { connect } from 'react-redux';
import likesActions from '../redux/actions/likesActions'
import Comments from './Comments';

const Itinerary = (props) => {
    const { itinerary, user, likear } = props

    const [viewMore, setViewMore] = useState(false)
    const [liked, setLiked] = useState([])
    const [flag, setFlag] = useState(false)
    const [loadingLiked, setLoadingLike] = useState(true)
    const [userToken, setUser] = useState({ token: user ? user.token : null })
    const [addComment, setAddComment] = useState(itinerary.comentarios)

    useEffect(() => {
        setLiked(itinerary.userLiked)
        if (user && itinerary.userLiked.includes(user.mail)) {
            setFlag(true)
        }
    }, [])

    const showToast = (message) => {
        ToastAndroid.show(message, ToastAndroid.SHORT);
    }

    const likes = async () => {
        if (user) {
            setLoadingLike(false)
            var response = await likear(itinerary._id, userToken)
            setLiked(response.likeItinerario.userLiked)
            setFlag(!response.flag)
            setLoadingLike(true)
        } else {
            showToast("you must log in to like")
        }
    }

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
                <View style={styles.hastash}>
                    {
                        itinerary.hashtag.map((hastash, index) => <Text key={index} style={styles.textHastash}>{hastash}</Text>)
                    }
                </View>
                <View style={styles.moneyConteiner}>
                    {
                        Array(itinerary.precio).fill(itinerary.precio).map((billete, index) => {
                            return (<FontAwesome5 style={styles.money} key={index} name="money-bill-alt" size={40} color="black" />)
                        })
                    }
                </View>
                <View style={styles.conteinerMG}>
                    <View style={styles.hourConteiner}>
                        <Text style={styles.hour}>{itinerary.duracion}</Text>
                        <AntDesign name="clockcircleo" size={40} color="white" />
                    </View>
                    <View style={styles.likeConteiner}>
                        <Text style={styles.like}>{liked.length}</Text>
                        <AntDesign onPress={loadingLiked ? likes : null} name={!flag ? "like2" : "dislike2"} size={40} color="white" />
                    </View>
                </View>
                {
                    viewMore &&
                    <View style={styles.commentsContainer}>
                        <Comments
                            idItinerary={itinerary._id}
                            addComment={addComment}
                            setAddComment={setAddComment}
                        />
                    </View>
                }
                <View style={styles.button}>
                    <Button
                        onPress={() => { setViewMore(!viewMore) }}
                        title={!viewMore ? "Show More" : "Show Less"}
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
        backgroundColor: "pink",
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
        width: "100%",
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
    },
    moneyConteiner: {
        height: 60,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    money: {
        marginLeft: 5,
        marginRight: 5
    },
    conteinerMG: {
        width: "100%",
        flexDirection: "row"
    },
    hourConteiner: {
        height: 100,
        width: "50%",
        justifyContent: "center",
        alignItems: "center"
    },
    hour: {
        fontSize: 20,
        marginBottom: 5
    },
    likeConteiner: {
        height: 100,
        width: "50%",
        justifyContent: "center",
        alignItems: "center"
    },
    like: {
        fontSize: 20,
        marginBottom: 5
    },
    hastash: {
        height: 50,
        width: "100%",
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    textHastash: {
        marginLeft: 5,
        marginRight: 5,
        fontSize: 20
    }
});

const mapStateToProps = state => {
    return {
        user: state.user.user,
    }
}

const mapDispatchToProps = {
    likear: likesActions.likedItinerary,
}

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary)