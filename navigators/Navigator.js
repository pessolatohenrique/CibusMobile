import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStackNavigator } from 'react-navigation'
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
  reduxifyNavigator,
} from 'react-navigation-redux-helpers';

export const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.navigation,
);
const addListener = reduxifyNavigator(middleware, "root");

import HomeScreen from '../components/HomeScreen';

export const Navigator = createStackNavigator({
  Home: { screen: HomeScreen },
},{
  initialRouteName: 'Home',
})

class Nav extends Component {
  render() {

    return (
      <Navigator navigation={{
        dispatch: this.props.dispatch,
        state: this.props.navigation,
        addListener,
      }} />
    )
  }
}

const mapStateToProps = state => ({
  navigation: state.navigation,
})

export default connect(mapStateToProps)(Nav)