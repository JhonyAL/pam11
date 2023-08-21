import Filme from './components/Filme'

import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native';

export default function App() {

  const [ filmes, setFIlmes ] = useState(null)

  const fetchTheMovieDB = async genresId => {
    const header = { 
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWY5MTAyZTAxNzQzMWJhZGZiNDBkMDA4ZjY1NDEzNSIsInN1YiI6IjYzZWY4ZDQ2ZWE4NGM3MDA5NmVmYTE0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pX14UtP6uIfifrvNvEO0kia6o_gC5N_iydUf9sII1Fk',
      'accept': 'application/json'
    }
    let genres = ''
    genresId.forEach(e => {
      genres += `${e}|`
    });
    
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?language=pt-BR&with_genres=${genres}`, { headers: header })
    return response
  }

  const viewFilmes = () => {
    let filmesAventura = []
    let filmesRomance = []
    let filmesTerror = []

    filmes.forEach(e => {
      e.genre_ids.forEach(id => {
        if (id == 12) {
          filmesAventura.push(e)
        }
        if (id == 27){
          filmesRomance.push(e)
        }
        if (id == 10749){
          filmesTerror.push(e)
        }
      })
    })

    return (
      <>
        <View style={styles.a1}>
          <Text style={styles.titulo}>Aventura</Text>
          <ScrollView horizontal={true} style={styles.fundoViewHorizontal}>
            {
              filmesAventura ? filmesAventura.map((e) => <Filme key={e.id} url={e.backdrop_path}  titulo={e.title}/>) : null
            }
          </ScrollView>
        </View>
        <View style={styles.a1}>
          <Text style={styles.titulo}>Terror</Text>
          <ScrollView horizontal={true} style={styles.fundoViewHorizontal}>
            {
              filmesRomance ? filmesRomance.map((e) => <Filme key={e.id} url={e.backdrop_path}  titulo={e.title}/>) : null
            }
          </ScrollView>
        </View>
        <View style={styles.a1}>
          <Text style={styles.titulo}>Romance</Text>
          <ScrollView horizontal={true} style={styles.fundoViewHorizontal}>
            {
              filmesTerror ? filmesTerror.map((e) => <Filme key={e.id} url={e.backdrop_path}  titulo={e.title}/>) : null
            }
          </ScrollView>
        </View>
      </>
    );
  }

  useEffect(() => {
    fetchTheMovieDB([12, 27, 10749])
      .then(response => response.json())
      .then(data => setFIlmes(data.results))
  }, [])

  return (
    <ImageBackground source={require('./assets/background.jpg')} resizeMode="cover" style={{width: '100%', height: '100%', flex: 1}}>
      <ScrollView style={styles.container}>
        <View style={styles.top}>
          <Image source={require('./assets/logo netflix png.png')} style={styles.logo}/>
        </View>
        {
          filmes ? viewFilmes() : <></>
        }
        
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