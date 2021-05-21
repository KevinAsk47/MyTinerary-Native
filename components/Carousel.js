import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import ViewPager from '@react-native-community/viewpager';

const Carousel = () => {

  const items = [
    { id: 1, title: "Paris, France", image: "https://www.viajarafrancia.com/wp-content/uploads/2016/04/Paris-760x500.jpg" },
    { id: 2, title: "New York, USA", image: "https://lonelyplanetes.cdnstatics2.com/sites/default/files/styles/max_1300x1300/public/fotos/EEUU_NuevaYork_500px_85866303_Roman%20Slavik_500px.jpg?itok=R4B_r6bN" },
    { id: 3, title: "London, England, UK", image: "https://image.freepik.com/foto-gratis/tower-bridge-crepusculo-nocturno-londres-inglaterra-reino-unido_117856-2100.jpg" },
    { id: 4, title: "Venice, Italy", image: "https://guias-viajar.com/italia/wp-content/uploads/2017/03/italia-venecia-puente-rialto-21.jpg" },
    { id: 5, title: "Vancouver, Canada", image: "https://i0.wp.com/cbnnoticias.com/wp-content/uploads/2019/08/Vancouver-desde-drone.png?fit=743%2C411" },
    { id: 6, title: "Barcelona, ​​Catalonia, Spain", image: "https://thumbs.dreamstime.com/b/vista-superior-a%C3%A9rea-de-barcelona-catalu%C3%B1a-espa%C3%B1a-palau-nacional-palacio-nacional-art-museum-nacional-de-catalu%C3%B1a-90813512.jpg" },
    { id: 7, title: "Cape Town, South Africa", image: "https://wp-growpro.s3-eu-west-1.amazonaws.com/media/2018/04/Que-ver-en-Ciudad-del-Cabo-10-Lugares-que-no-te-puedes-perder.jpg" },
    { id: 8, title: "Sydney, australia", image: "https://www.saulsaidel.com/wp-content/uploads/2020/08/sydney-australia.jpg.webp" },
    { id: 9, title: "Rome, Italy", image: "https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateRome_Hero_shutterstock789412159.jpg" },
    { id: 10, title: "Singapore", image: "https://www.atptour.com/es/scores/current/singapore/9460/www.atptour.com/-/media/images/atp-tournaments/tournament-images/singapore_tournimage_2021.jpg" },
    { id: 11, title: "Lisbon, Portugal", image: "https://www.gavelintl.com/wp-content/uploads/2018/10/lisbon-portugal.jpg" },
    { id: 12, title: "Amsterdam, netherlands", image: "https://ayfnhq.org/wp-content/uploads/2020/02/mini-mba-course-to-amsterdam-1130x650.jpg" }
  ]

  return (
    <View style={styles.carouselContainer}>
      <ViewPager style={styles.viewPager} initialPage={0}>
        {
          items.map(item => {
            return (
              <ImageBackground source={{uri: item.image}} key={item.id} style={styles.page} key="1">
                <Text style={styles.title} >{item.title}</Text>
                {
                  item.id === 1 && <Text style={styles.titleTwo}>Swipe ➡️</Text>
                }
              </ImageBackground>
            )
          })
        }
      </ViewPager>
    </View>
  );
};

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    textAlign: "center"
  },
  carouselContainer: {
    height: 500,
    width: "100%"
  },
  title:{
    fontSize: 50,
    color: "white",
    textAlign: "center"
  },
  titleTwo:{
    fontSize: 30,
    backgroundColor: "white"
  }
});

export default Carousel
