import { setStatusBarHidden, StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react'
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux'
import City from '../components/City';
import citiesActions from '../redux/actions/citiesActions';

const Cities = (props) => {
  const [allCities, setAllCities] = useState([])

  useEffect(() => {
    fetchAllCities()
  }, [])

  const fetchAllCities = async () => {
    let response = await props.fetchCities()
    if (response) {
      setAllCities(response)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.citiesContainer}>
          {
            allCities.map(city => <City key={city._id} city={city} navigation={props.navigation} />)
          }
        </View>
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
    height: "100%",
  },
  citiesContainer: {
    height: "100%",
    width: "100%",
    alignItems: "center"
  }
});

const mapDispatchToProps = {
  fetchCities: citiesActions.fetchCities
}

export default connect(null, mapDispatchToProps)(Cities)