import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Dimensions
} from 'react-native';
import { createBottomTabNavigator  } from 'react-navigation'

// Hide Warning
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])

import { Home } from './screenName'

// Components
import HomeScreen from './src/HomeScreen'
import RegisterSubjectScreen from './src/RegisterSubject'
import ShowdataScreen from './src/Showdata'

const RootStack = createBottomTabNavigator (
  {
    Home: {
      screen: HomeScreen
    },
    RegisterSubject: {
      screen: RegisterSubjectScreen
    },
    Showdata: {
      screen: ShowdataScreen
    }
  },
  {
    headerMode: 'none'
  }
);

export default RootStack
