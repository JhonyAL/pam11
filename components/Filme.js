import { StyleSheet, Text, View, Image } from 'react-native';

export default function App(props) {
  const url = `https://www.themoviedb.org/t/p/original/${props.url}`

  return (
    
    <View style={styles.card_filme}>
        <Image 
            source={
            {
                uri: url
            }
            } 
            style={styles.img_geral} 
        />
        <Text style={{ color: '#edd', marginTop: 10 }}>{props.titulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card_filme:   {
    width: 350,
    height: '100%',
    padding: 5
  },
  img_geral:    {
    width   : '100%',
    height  : '80%',
    objectFit   : 'cover',
    transform: 'scale(1)'
    
  },
});