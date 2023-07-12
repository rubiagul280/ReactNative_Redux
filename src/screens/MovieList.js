/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions} from 'react-native';
import { connect } from 'react-redux';
import { fetchMovies } from '../redux/actions/movieActions';
const { width } = Dimensions.get('screen');


const MovieList = ({ movies, fetchMovies }) => {

  useEffect(() => {
    fetchMovies();
  }, []);

  const renderMovie = ({ item }) => (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text key={item.id} style={styles.text}>Title: {`${item.title}`}</Text>
        <Text key={item.id} style={styles.text}>Release Year: {`${item.releaseYear}`}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.list}>
      <Text style={styles.title}>Movie List</Text>
      <FlatList
        data={movies}
        renderItem={renderMovie}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies,
});

const mapDispatchToProps = {
  fetchMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);

const styles = StyleSheet.create({
  container: {
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    width: Dimensions.get('screen').width * 1,
  },
  content: {
    width: width * 0.8,
    height: 240,
    borderColor: '#fff',
    borderRadius: 20,
    borderWidth: 2,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
    fontFamily: 'Lato',
    marginBottom: 10,
    color: '#fff',
  },
  list: {
    backgroundColor: '#031637',
    marginBottom: 40,
  },
  title: {
    fontSize: 30,
    fontFamily: 'Lato',
    color: '#fff',
    alignSelf: 'center',
    marginTop: 20,
  },
});
