import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  View,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const requestMovies = async () => {
      setLoading(true);
      const req = await fetch('https://api.b7web.com.br/cinema/');
      const json = await req.json();

      if (json) {
        setMovies(json);
      }

      setLoading(false);
    };

    requestMovies();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {loading && (
        <View style={styles.loadingArea}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      )}

      {!loading && (
        <>
          <Text style={styles.totalMoviesText}>
            Total de Filmes: {movies.length}
          </Text>
          <FlatList
            style={styles.list}
            data={movies}
            renderItem={({item}) => (
              <View style={styles.movieItem}>
                <Image
                  source={{uri: item.avatar}}
                  style={styles.movieImage}
                  resizeMode="contain"
                />
                <Text style={styles.movieTitle}>{item.titulo}</Text>
              </View>
            )}
            keyExtractor={(item) => item.titulo}
          />
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  totalMoviesText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  list: {
    flex: 1,
  },
  movieItem: {
    marginBottom: 30,
  },
  movieImage: {
    height: 450,
  },
  movieTitle: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 5,
  },
  loadingArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
