import { setStatusBarHidden, StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux'
import City from '../components/City';
import citiesActions from '../redux/actions/citiesActions';

const Cities = (props) => {
  const [allCities, setAllCities] = useState([])
  const [citiesCopy, setCitiesCopy] = useState([])
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    fetchAllCities()
  }, [])

  const fetchAllCities = async () => {
    let response = await props.fetchCities()
    if (response) {
      setAllCities(response)
      setCitiesCopy(response)
      setLoader(false)
    }
  }

  const readInput = (e) => {
    let filteredCities = citiesCopy.filter(city => city.titulo.toLocaleLowerCase().trim().indexOf(e.toLocaleLowerCase().trim()) === 0)
    setAllCities(filteredCities)
  }

  if (loader) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.searchConteiner}>
          <View style={styles.search}>
            <TextInput
              placeholder="Search"
              placeholderTextColor='black'
              color='black'
              style={styles.input}
              onChangeText={(e) => readInput(e)}
            />
          </View>
        </View>
        <View style={styles.citiesContainer}>
          {
            allCities.length === 0 ?
              <Text style={styles.text}>There are not results for your search</Text> :
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
    alignItems: "center"
  },
  scrollView: {
    width: "100%",
    height: "100%",
  },
  citiesContainer: {
    height: "100%",
    width: "100%",
    alignItems: "center"
  },
  searchConteiner: {
    width: "100%",
    height: 100,
    justifyContent: "center"
  },
  search: {
    alignItems: "center",
  },
  input: {
    height: 50,
    width: "60%",
    paddingLeft: 5,
    borderBottomWidth: 2,
    borderBottomColor: "black"
  },
  loader: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 20,
    textAlign: "center"
  }
});

const mapDispatchToProps = {
  fetchCities: citiesActions.fetchCities
}

export default connect(null, mapDispatchToProps)(Cities)