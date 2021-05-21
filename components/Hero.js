import React from 'react'
import { Video } from 'expo-av';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const Hero = () => {
    return (
        <View style={styles.hola}>
            <Video
                source={require('../assets/AvionApareciendo.mp4')}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay
                isLooping={false}
                style={styles.video}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    video: {
        height: '100%',
        width: "100%"
    },

});

export default Hero