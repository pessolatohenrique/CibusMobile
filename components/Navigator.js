import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StackNavigator, addNavigationHelpers } from 'react-navigation'
import { Root } from "native-base";
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

export const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.navigation,
);

const addListener = createReduxBoundAddListener("root");

import Login from './Login'
import HomeScreen from './HomeScreen'

export const Navigator = new StackNavigator({
    Login: { screen: Login },
    Home: { screen: HomeScreen },
},{
  initialRouteName: 'Login',
})

class Nav extends Component {
  render() {

    return (
    <Root>
      <Navigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.navigation,
        addListener,
      })} />
    </Root>
    )
  }
}

const mapStateToProps = state => ({
  navigation: state.navigation,
})

export default connect(mapStateToProps)(Nav)