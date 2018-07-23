import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Image,
  ListView,
  TouchableHighlight,
  Modal,
  TextInput
} from 'react-native';
const styles = require('../app/style');

import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Item, Input, Button } from 'native-base';
import Toolbar from '../app/components/Toolbar/Toolbar';
import Addbutton from '../app/components/AddButton/AddButton';
import { RegisterSubjectRef } from './firebase';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class InputGrade extends Component {
  constructor () {
    super();
    this.state =  {
        text: '',
        idSubject: null,
        nameSubject: null,
        unit: null,
        section: null,
        term: null,
        grade: null
    }
  }

  componentWillMount () {

  }

  summit () {
    RegisterSubjectRef.child('-LI5Lx_sdzu9_a-AEj6u').update({
        grade: this.state.grade
    })
  }

  render() {
    // const firstname = this.props.navigation.getParam('firstname')
    // const lastname = this.props.navigation.getParam('lastname')
    return (
        <Container>
        <Header />
        <Content>
          <Item regular>
            <Input placeholder='กรอกเกรด' onChangeText = {(value) => this.setState({grade:value})}/>
          </Item>
          <Button
            onPress={() => {
                this.summit()
                this.props.navigation.navigate('Showdata')
            }
              }
          >
            <Text style={{color:'#fff',width:100}}>ตกลง</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
