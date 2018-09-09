import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { meal } from './reducers/meal';
import { navigation } from './reducers/navigation'
import { login } from './reducers/login'
import { reducer as formReducer } from 'redux-form';
import Navigator from './components/Navigator';

const reducer = combineReducers({ 
    login, 
    navigation, 
    meal,
    form: formReducer 
})
const store = createStore(reducer, applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}