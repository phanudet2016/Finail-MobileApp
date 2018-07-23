import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar,
  TouchableHighlight
} from 'react-native';
const styles = require('../../style');
const constants = styles.constants;
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev men',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

export default class AddButton extends Component {

  render() {
    return (
      <View style={styles.action}>
        <TouchableHighlight
          underlayColor="#24ce84"
          onPress={this.props.onPress}
        >
          <Text style={styles.actionText}>
            {this.props.title}
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}