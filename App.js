/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store/configureStore';
import MovieList from './src/screens/MovieList';
import MyComponent from './src/screens/MyComponent';
import {View} from 'react-native';
const store = configureStore();

const App = () => {
  return (
    // <Provider store={store}>
    //   <MovieList />
    // </Provider>
    <View>
      <MyComponent />
    </View>
  );
};

export default App;
