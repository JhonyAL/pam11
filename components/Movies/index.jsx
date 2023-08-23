// IMPORT MOVIE CARD COMPONENT -------------------------------------------------------------
import { Movie } from "./Movie"

// IMPORT STYLES ---------------------------------------------------------------------------
import { styles } from './style'

// IMPORT COMPONENTS FROM REACT-NATIVE -----------------------------------------------------
import { Text, View, ScrollView } from "react-native"

// EXPORT COMPONENT MOVIES -----------------------------------------------------------------
export const Movies = ({ movies }) => {
  // Movies by genre
  let moviesPerGenre = {
    adventure: [],
    romance: [],
    horror: []
  }

  // Sorting movies by genre ----------------------------------------------------------------
  movies.forEach((e) => {
    e.genre_ids.forEach((id) => {
      if (id == 12) {
        moviesPerGenre.adventure.push(e)
      }
      if (id == 27) {
        moviesPerGenre.romance.push(e)
      }
      if (id == 10749) {
        moviesPerGenre.horror.push(e)
      }
    })
  })

  return (
    <>
      <View style={styles.a1}>
        <Text style={styles.titulo}>Aventura</Text>
        <ScrollView horizontal={true} style={styles.fundoViewHorizontal}>
          {moviesPerGenre.adventure
            ? moviesPerGenre.adventure.map((e) => (
                <Movie key={e.id} url={e.backdrop_path} titulo={e.title} />
              ))
            : null}
        </ScrollView>
      </View>
      <View style={styles.a1}>
        <Text style={styles.titulo}>Terror</Text>
        <ScrollView horizontal={true} style={styles.fundoViewHorizontal}>
          {moviesPerGenre.romance
            ? moviesPerGenre.romance.map((e) => (
                <Movie key={e.id} url={e.backdrop_path} titulo={e.title} />
              ))
            : null}
        </ScrollView>
      </View>
      <View style={styles.a1}>
        <Text style={styles.titulo}>Romance</Text>
        <ScrollView horizontal={true} style={styles.fundoViewHorizontal}>
          {moviesPerGenre.horror
            ? moviesPerGenre.horror.map((e) => (
                <Movie key={e.id} url={e.backdrop_path} titulo={e.title} />
              ))
            : null}
        </ScrollView>
      </View>
    </>
  )
}

