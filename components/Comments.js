import React from 'react'
import { useEffect, useState } from "react"
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from "react-native";
import { connect } from 'react-redux';
import commentsActions from '../redux/actions/commentsActions';

const Comments = (props) => {
    const { user, fetchComments } = props
    const [comment, setComment] = useState({ comentario: "", token: localStorage.getItem('token') })

    const readInput = (e, campo) => {
        setComment({
            ...comment,
            [campo]: e
        })
    }

    const sendComment = async (e) => {
        /*         e.preventDefault()
                if (/^\s+|\s+$/.test(comentario.comentario) || comentario.comentario === "") {
                    alert("You cannot send an empty comment")
                } else {
                    setLoadingComentario(false)
                    var respuesta = await props.fetchComentarios(comentario, props.idItinerario)
                    setAgregarComentario(respuesta)
                    setComentario({ comentario: "", token: localStorage.getItem('token') })
                    setLoadingComentario(true)
                } */
    }

    return (
        <View>
            <View style={styles.CommentsConteiner}>

            </View>
            {
                user &&
                <View style={styles.submitConteiner}>
                    <TextInput
                        placeholder="Hello!"
                        placeholderTextColor='black'
                        color='black'
                        style={styles.input}
                        onChangeText={(e) => readInput(e, 'comentario')}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={sendComment}
                    >
                        <Text style={styles.submit}>Send</Text>
                    </TouchableOpacity>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: "white",
        textAlign: "center",
        width: "80%",
        height: 50
    },
    CommentsConteiner: {
        minHeight: 300,
        width: "100%"
    },
    button: {
        backgroundColor: "black",
        width: "20%",
        height: 50,
        justifyContent: "center"
    },
    submitConteiner: {
        flexDirection: "row"
    },
    submit: {
        color: "white",
        textAlign: "center"
    }
});

const mapStateToProps = state => {
    return {
        user: state.user.user
    }
}

const mapDispatchToProps = {
    fetchComments: commentsActions.fetchComments,
    deleteComment: commentsActions.deleteComment,
    updateComentario: commentsActions.updateComentario
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)