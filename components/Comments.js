import React from 'react'
import { useEffect, useState } from "react"
import { View, StyleSheet, TextInput, TouchableOpacity, Text, ToastAndroid } from "react-native";
import { connect } from 'react-redux';
import commentsActions from '../redux/actions/commentsActions';
import Comment from './Comment';

const Comments = (props) => {
    const {
        addComment,
        setAddComment,
        deleteComment,
        updateComentario,
        user,
        fetchComments,
        idItinerary
    } = props
    const [loadingComment, setLoadingComment] = useState(true)
    const [comment, setComment] = useState({
        comentario: "",
        token: user ? user.token : null
    })

    const showToast = (message) => {
        ToastAndroid.show(message, ToastAndroid.SHORT);
    }

    const readInput = (e, campo) => {
        setComment({
            ...comment,
            [campo]: e
        })
    }

    const sendComment = async () => {
        if (/^\s+|\s+$/.test(comment.comentario) || comment.comentario === "") {
            showToast("I can't send empty messages")
        } else {
            setLoadingComment(false)
            var response = await fetchComments(comment, idItinerary)
            setAddComment(response)
            setComment({ comentario: "" })
            setLoadingComment(true)
        }
    }

    const sendDeleteComment = async (id) => {
        var response = await deleteComment(id, idItinerary)
        setAddComment(response)
    }

    const sendUpdateComment = async (id, commentToModify) => {
        var response = await updateComentario(commentToModify, idItinerary, id)
        setAddComment(response)
    }

    return (
        <View>
            <View style={styles.CommentsConteiner}>
                <View>
                    {
                        addComment.map((comment) => <Comment
                            key={comment._id}
                            comment={comment}
                            sendDeleteComment={sendDeleteComment}
                            sendUpdateComment={sendUpdateComment}
                        />)
                    }
                </View>
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
                        onPress={loadingComment ? sendComment : null}
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
        width: "100%",
        alignItems: "center"
    },
    button: {
        backgroundColor: "black",
        width: "20%",
        height: 50,
        justifyContent: "center"
    },
    submitConteiner: {
        flexDirection: "row",
        marginTop: 15
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