import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  StatusBar
} from 'react-native';
const styles = require('../../style');

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev men',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

export default class Toolbar extends Component {

  render() {
    return (
      <View>
        <StatusBar
          backgroundColor="coral"
          barStyle="dark-content"
        />
        <View style={styles.navbar}>
          <Text style={styles.navbarTitle}>
            {this.props.title}
          </Text>
        </View>
      </View>
    );
  }
}