import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStackNavigator } from 'react-navigation';

import { meal } from './reducers/meal';
import HomeScreen from './components/HomeScreen';

const store = createStore(meal, applyMiddleware(thunkMiddleware));

const RootStack = createStackNavigator({
    Home: {
      screen: HomeScreen
    },
});
  
export default class App extends Component {
    
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50
  }
});