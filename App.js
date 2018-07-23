import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Dimensions
} from 'react-native';
import { createStackNavigator } from 'react-navigation'

// Hide Warning
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])

import { Home } from './screenName'

// Components
import HomeScreen from './src/HomeScreen'
import RegisterSubjectScreen from './src/RegisterSubject'

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    RegisterSubject: {
      screen: RegisterSubjectScreen
    }
  },
  {
    headerMode: 'none'
  }
);

export default RootStack
