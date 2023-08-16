import Filme from './components/Filme'

import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native';

export default function App() {

  const [ filmes, setFilmes ] = useState(null);

   const fetchTheMovieDB = async () => {
    let response = await fetch('https://api.themoviedb.org/3//movie/popular?language=pt-BR', { 
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWY5MTAyZTAxNzQzMWJhZGZiNDBkMDA4ZjY1NDEzNSIsInN1YiI6IjYzZWY4ZDQ2ZWE4NGM3MDA5NmVmYTE0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pX14UtP6uIfifrvNvEO0kia6o_gC5N_iydUf9sII1Fk',
      'accept': 'application/json'
     })
    return response
  }

  useEffect(() => {
    fetchTheMovieDB()
     .then(response => response.json())
     .then(data => setFilmes(data.results))
  }, [])

  return (
    <ImageBackground source={require('./assets/background.jpg')} resizeMode="cover" style={{width: '100%', height: '100%', flex: 1}}>
      <ScrollView style={styles.container}>
        <View style={styles.top}>
          <Image source={require('./assets/logo netflix png.png')} style={styles.logo}/>
        </View>
        <View style={styles.a1}>
          <Text style={styles.titulo}>Filmes</Text>
          <ScrollView horizontal={true} style={styles.fundoViewHorizontal}>
            {
              filmes ? filmes.map((e) => <Filme key={e.id} url={e.backdrop_path}  titulo={e.title}/>) : <View></View>
            }
          </ScrollView>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000ab'
  },
  
  top: {
    width : "100%",
    flex  : 1,
    justifyContent  : 'center',
    alignItems  : 'center',
    height  : 75,
    padding : 10,
    backgroundColor: '#000000cc'
  },

  logo: {
    width : 140,
    height  : 35,
  },

  a1:{
    width: '100%',
    margin: 5
  },

  titulo:{
    fontSize: 30,
    fontWeight: '700',
    color: '#eee',
  },
  
  fundoViewHorizontal:{
    width: '100%',
    height: 250,
    flexDirection: 'row',
    padding: 5
  }
});