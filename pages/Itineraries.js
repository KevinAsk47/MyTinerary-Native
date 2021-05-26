import { setStatusBarHidden, StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import citiesActions from '../redux/actions/citiesActions';
import { connect } from 'react-redux'
import Itinerary from '../components/Itinerary';

const Itineraries = (props) => {
  const [city, setCity] = useState({})
  const [itineraries, setItineraries] = useState([])

  useEffect(() => {
    fetchCity()
    fetchItineraries()
  }, [])

  useEffect(() => {
    return () => {
      setItineraries([])
    }
  }, [])

  const fetchCity = async () => {
    let response = await props.fetchCities()
    if (response) {
      const CitySelected = response.find(city => city._id === props.route.params.id)
      setCity(CitySelected)
    }
  }

  const fetchItineraries = async () => {
    let response = await props.fetchItinerariesByCity(props.route.params.id)
    if (response) {
      setItineraries(response)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ImageBackground source={{ uri: city.imagen }} style={styles.banner} >
          <Text style={styles.title}>{city.pais}</Text>
          <Text style={styles.titleTwo}>{city.titulo}</Text>
        </ImageBackground>
        {
          itineraries.length === 0 ?
            <View style={styles.noItineraries}><Text style={styles.text}>There are no loaded itineraries</Text></View>
            : itineraries.map(itinerary => <Itinerary key={itinerary._id} itinerary={itinerary} />)
        }
      </ScrollView>
      <StatusBar style="auto" hidden={true} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    width: "100%",
    height: "100%"
  },
  text: {
    fontSize: 42,
  },
  banner: {
    height: 250,
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 40,
    color: "white",
    textAlign: "center"
  },
  titleTwo: {
    fontSize: 20,
    color: "white"
  },
  noItineraries: {
    width: "100%",
    height: 450,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 40,
    textAlign: "center"
  }
});

const mapDispatchToProps = {
  fetchCities: citiesActions.fetchCities,
  fetchItinerariesByCity: citiesActions.fetchItinerariesByCity
}

export default connect(null, mapDispatchToProps)(Itineraries)