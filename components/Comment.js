import React from 'react'
import { useEffect, useState } from "react"
import { View, StyleSheet, TextInput, TouchableOpacity, Text, Modal, TouchableHighlight, Alert } from "react-native";
import { connect } from 'react-redux';
import commentsActions from '../redux/actions/commentsActions';
import { AntDesign, Entypo } from '@expo/vector-icons';

const Comment = (props) => {
    const { comment, sendDeleteComment, sendUpdateComment, user } = props
    const [modalVisible, setModalVisible] = useState(false);
    const [modify, setModify] = useState(false)
    const [editComment, setEditComment] = useState({ comentario: comment.comentario })
    const [legitimateUser, setLegitimateUser] = useState(false)

    useEffect(() => {
        if (user && (comment.idUser.mail === user.mail)) {
            setLegitimateUser(true)
        }
    }, [legitimateUser])

    const readInput = (e) => {
        setEditComment({
            ...editComment,
            comentario: e
        })
    }

    const sendEdit = () => {
        sendUpdateComment(comment._id, editComment)
        setModify(false)
    }

    return (
        <>
            <Text style={styles.author}>{comment.idUser.usuario}:</Text>
            <View style={styles.comment}>
                {
                    modify &&
                    <>
                        <TextInput
                            placeholderTextColor="black"
                            color='white'
                            style={styles.input}
                            onChangeText={(e) => readInput(e)}
                        />
                    </>

                }
                <Text style={styles.message}>{comment.comentario}</Text>
                <View style={styles.deleteAndEdit}>
                    {
                        (user && legitimateUser) &&
                        <>
                            {
                                modify ?
                                    <>
                                        <Entypo onPress={sendEdit} style={styles.checkIcon} name="check" size={30} color="black" />
                                        <AntDesign style={styles.closeIcon} onPress={() => setModify(false)} name="close" size={30} color="black" />
                                    </> :
                                    <AntDesign onPress={() => setModify(true)} style={styles.editIcon} name="edit" size={30} color="black" />
                            }
                            <AntDesign onPress={() => {
                                setModalVisible(true);
                            }} style={styles.deleteIcon} name="delete" size={30} color="black" />
                        </>
                    }
                </View>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Do you want to delete this message?</Text>
                        <View style={styles.modalButtons}>
                            <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
                                onPress={() => {
                                    sendDeleteComment(comment._id);
                                }}>
                                <Text style={styles.textStyle}>Yes</Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: 'red' }}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                }}>
                                <Text style={styles.textStyle}>No</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    comment: {
        marginTop: 5,
        marginBottom: 15,
        backgroundColor: "white",
        width: 350,
        minHeight: 50,
        justifyContent: "center",
        borderTopEndRadius: 20,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    author: {
        fontSize: 20
    },
    message: {
        fontSize: 20,
        marginLeft: 15
    },
    deleteIcon: {
        marginRight: 15
    },
    editIcon: {
        marginRight: 10
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    modalButtons: {
        flexDirection: "row",
    },
    openButton: {
        backgroundColor: '#F194FF',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginRight: 10,
        marginLeft: 10,
        width: 100
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 20
    },
    input: {
        position: "absolute",
        fontSize: 20,
        marginLeft: 15,
        width: 200,
        color: "black",
        zIndex: 2,
        borderColor: "black",
        borderWidth: 1,
        marginLeft: 5,
        backgroundColor: "white",
        paddingLeft: 5
    },
    deleteAndEdit: {
        flexDirection: "row",
    },
    checkIcon: {
        marginRight: 10
    },
    closeIcon: {
        marginRight: 10
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

export default connect(mapStateToProps, mapDispatchToProps)(Comment)