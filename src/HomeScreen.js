import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ListView,
  TouchableHighlight,
  Modal,
  TextInput
} from 'react-native';
const styles = require('../app/style');

import Toolbar from '../app/components/Toolbar/Toolbar';
import Addbutton from '../app/components/AddButton/AddButton';
import { PersonalRef } from './firebase';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class HomeScreen extends Component {
    static navigationOptions = {
        // tabBarLable: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="md-home" size={25}  color={tintColor}/>
        )
      }

  constructor () {
    super();
    let ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});
    this.state =  {
      text: '',
      itemDataSource: ds,
      modalVisible: false,

      id: null,
      firstname: null,
      lastname: null,
      sex: null,
      banch: null,
      birthday: null
    }
    //this.itemsRef = Items;

    this.renderRow = this.renderRow.bind(this);
    this.pressRow = this.pressRow.bind(this);
  }

  setModalVisible (visible) {
    this.setState({modalVisible: visible});
  }

//   getRef () {
//     return firebase.database().ref();
//   }

  componentWillMount () {
    this.getItem();
  }

  componentDidMount () {
    // this.getItem(this.itemsRef);
  }

  getItem () {
    //let items = [{title: 'Item 1'},{title: 'item 3'}];
    PersonalRef.on('value',(snap) => {
      let Personals = [];
      snap.forEach((child) => {
        Personals.push({
          firstname: child.val().firstname,
          lastname: child.val().lastname,
          _key: child.key
        });
        this.setState({
          itemDataSource: this.state.itemDataSource.cloneWithRows(Personals)
        });
      });
    });
  }

  pressRow () {
    console.log(Personal);
  }

  renderRow (Personal) {
    return (
      <TouchableHighlight onPress={() => {
        this.props.navigation.navigate('RegisterSubject', {firstname: Personal.firstname, lastname: Personal.lastname})
      }}>
        <View style={styles.li}>
          <Text style={styles.liText}>{Personal.firstname} {Personal.lastname}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  addItem () {
    this.setState({text: null})
    this.setModalVisible(true);
  }

  summit () {
    PersonalRef.push({
      title: this.state.text,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      sex: this.state.sex,
      banch: this.state.banch,
      birthday: this.state.birthday
    })
  }

  render() {
    return (
      <View style={styles.container}>

      <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {}}>
          <View style={{marginTop: 22}}>
            <View>
              <Toolbar title="กรอกข้อมูลนักศึกษา" />
              <TextInput 
                value={this.state.text}
                placeholder="รหัสนักศึกษา"
                onChangeText = {(value) => this.setState({id:value})}
              />
              <TextInput 
                value={this.state.text}
                placeholder="ชื่อ"
                onChangeText = {(value) => this.setState({firstname:value})}
              />
              <TextInput 
                value={this.state.text}
                placeholder="นามสกุล"
                onChangeText = {(value) => this.setState({lastname:value})}
              />
              <TextInput 
                value={this.state.text}
                placeholder="วว/ดด/ปปปป"
                onChangeText = {(value) => this.setState({birthday:value})}
              />
              <TextInput 
                value={this.state.text}
                placeholder="เพศ"
                onChangeText = {(value) => this.setState({sex:value})}
              />
              <TextInput 
                value={this.state.text}
                placeholder="สาขา"
                onChangeText = {(value) => this.setState({banch:value})}
              />
              <TouchableHighlight
                onPress={() => {
                  this.summit()
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>ตกลง</Text>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>ยกเลิก</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <Toolbar title="นักศึกษา"/>
        <ListView
          dataSource={this.state.itemDataSource}
          renderRow={this.renderRow}
        />
        <Addbutton onPress={this.addItem.bind(this)} title="ADD" />
      </View>
    );
  }
}
