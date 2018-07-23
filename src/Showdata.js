import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Button,
  Image,
  ListView,
  TouchableHighlight,
  Modal,
  TextInput
} from 'react-native';
const styles = require('../app/style');

import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import Toolbar from '../app/components/Toolbar/Toolbar';
import Addbutton from '../app/components/AddButton/AddButton';
import { RegisterSubjectRef } from './firebase';

export default class Showdata extends Component {
  constructor () {
    super();
    let ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});
    this.state =  {
        text: '',
        itemDataSource: ds,
        idSubject: null,
        nameSubject: null,
        unit: null,
        section: null,
        term: null,
        year: null
    }
  }

  componentWillMount () {
    this.getItem();
  }

  getItem () {
    //let items = [{title: 'Item 1'},{title: 'item 3'}];
    RegisterSubjectRef.on('value',(snap) => {
      let RegisterSubjec = [];
      snap.forEach((child) => {
        RegisterSubjec.push({
          firstname: child.val().firstname,
          lastname: child.val().lastname,
          section: child.val().section,
          nameSubject: child.val().nameSubject,
          unit: child.val().unit,
          idSubject: child.val().idSubject,
          _key: child.key
        });
        this.setState({
          itemDataSource: this.state.itemDataSource.cloneWithRows(RegisterSubjec)
        });
      });
    });
  }

  renderRow (RegisterSubjec) {
    return (
    //   <TouchableHighlight onPress={() => {
    //   }}>
    //     <View style={styles.li}>
    //       <Text style={styles.liText}>{RegisterSubjec.firstname} {RegisterSubjec.lastname}</Text>
    //     </View>
    //   </TouchableHighlight>
      <Container>
      <Content>
        <List>
          <ListItem avatar>
            <Left>
              <Thumbnail source={{ uri: 'Image URL' }} />
            </Left>
            <Body>
              <Text>{RegisterSubjec.firstname} {RegisterSubjec.lastname}</Text>
              <Text note>รหัสวิชา: {RegisterSubjec.idSubject} </Text>
              <Text note>ชื่อวิชา: {RegisterSubjec.nameSubject} </Text>
              <Text note>หน่วยกิต: {RegisterSubjec.unit}</Text>
            </Body>
            <Right>
              <Text note>Section {RegisterSubjec.section}</Text>
            </Right>
          </ListItem>
        </List>
      </Content>
    </Container>
    )
  }

  render() {
    const firstname = this.props.navigation.getParam('firstname')
    const lastname = this.props.navigation.getParam('lastname')
    return (
      <View style={styles.container}>
        <Toolbar title="แสดงรายการ"/>
        <ListView
          dataSource={this.state.itemDataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}
