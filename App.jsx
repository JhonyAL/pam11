// IMPORT MOVIES COMPONENT
import { Movies } from './components/Movies'

// IMPORTS FROM REACT
import { useEffect, useState } from 'react';
// IMPORT COMPONENTS FROM REACT-NATIVE
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native';

export default function App() {
  const [ movies, setMovies ] = useState(null)

  // Fetch via GET TheMovieDB API
  const fetchTheMovieDB = async (genresId, page) => {
    // Defining headers
    const headers = { 
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWY5MTAyZTAxNzQzMWJhZGZiNDBkMDA4ZjY1NDEzNSIsInN1YiI6IjYzZWY4ZDQ2ZWE4NGM3MDA5NmVmYTE0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pX14UtP6uIfifrvNvEO0kia6o_gC5N_iydUf9sII1Fk',
      'accept': 'application/json'
    }

    // Defining genres by id for fetch
    let genres = ''
    genresId.forEach(e => {
      genres += `${e}|`
    });
    
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?language=pt-BR&with_genres=${genres}&page=${page}`, { headers: headers })
    return response
  }

  const fetchAPI = () => {
    for (let index = 0; index < 10; index++) {
      fetchTheMovieDB([12, 27, 10749], index)
      .then(response => response.json())
      .then(data => setMovies(data.results))
    }
  }
  console.log(movies)

  // const fetchAPI = () => {
  //   const mmm = [];
  //   for (let index = 0; index < 1; index++) {
  //     fetchTheMovieDB([12, 27, 10749], 1)
  //     .then(response => response.json())
  //     .then(data => data.results)
  //     .then(results => results.forEach(e => mmm.push(e)))
  //   }
  //   setMovies(mmm)
  // }
  // Fetching TheMovieDB API when loading the window
  useEffect(() => {
    fetchAPI()
    
  }, [])

  return (
    <ImageBackground source={require('./assets/background.jpg')} resizeMode="cover" style={{width: '100%', height: '100%', flex: 1}}>
      <ScrollView style={styles.container}>
        <View style={styles.top}>
          <Image source={require('./assets/logo netflix png.png')} style={styles.logo}/>
        </View>
        <View>
          {
            movies ? <Movies movies={movies} /> : <></>
          }
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

// STYLE
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
});