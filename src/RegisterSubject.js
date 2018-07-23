import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TouchableHighlight,
  Modal,
  TextInput
} from 'react-native';
const styles = require('../app/style');

import Toolbar from '../app/components/Toolbar/Toolbar';
import Addbutton from '../app/components/AddButton/AddButton';
import { RegisterSubjectRef } from './firebase';
import { Container, Header, Content, Input, Item, Button } from 'native-base';

export default class RegisterSubject extends Component {
  constructor () {
    super();
    this.state =  {
        text: '',

        idSubject: null,
        nameSubject: null,
        unit: null,
        section: null,
        term: null,
        year: null
    }
  }

  setModalVisible (visible) {
    this.setState({modalVisible: visible});
  }
  summit = (firstname, lastname) => {
    RegisterSubjectRef.push({
        idSubject: this.state.idSubject,
        nameSubject: this.state.nameSubject,
        unit: this.state.unit,
        section: this.state.section,
        term: this.state.term,
        year: this.state.year,
        firstname: firstname,
        lastname: lastname
    })
  }

  render() {
    const firstname = this.props.navigation.getParam('firstname')
    const lastname = this.props.navigation.getParam('lastname')
    return (
        <Container>
        <Header />
        <Content>
          <Item regular>
            <Input placeholder='รหัสวิชา' onChangeText = {(value) => this.setState({idSubject:value})}/>
          </Item>
          <Item regular>
            <Input placeholder='ชื่อวิชา' onChangeText = {(value) => this.setState({nameSubject:value})}/>
          </Item>
          <Item regular>
            <Input placeholder='หน่วยกิต' onChangeText = {(value) => this.setState({unit:value})}/>
          </Item>
          <Item regular>
            <Input placeholder='ตอนเรียน' onChangeText = {(value) => this.setState({section:value})}/>
          </Item>
          <Item regular>
            <Input placeholder='ภาคเรียน' onChangeText = {(value) => this.setState({term:value})}/>
          </Item>
          <Item regular>
            <Input placeholder='ปีการศึกษา' onChangeText = {(value) => this.setState({year:value})}/>
          </Item>
          <Button
            onPress={() => {
                this.summit(firstname, lastname)
                this.props.navigation.navigate('Showdata')
            }
              }
          >
            <Text style={{color:'#fff',width:100}}>ตกลง</Text>
          </Button>
        </Content>
      </Container>
    //   <View style={styles.container}>
    //     <Modal
    //       animationType="slide"
    //       transparent={false}
    //       visible={true}
    //       onRequestClose={() => {}}>
    //       <View style={{marginTop: 22}}>
    //         <View>
    //           <Toolbar title="ลงทะเบียนเรียน" />
    //           <TextInput 
    //             value={this.state.idSubject}
    //             placeholder="รหัสวิชา"
    //             onChangeText = {(value) => this.setState({idSubject:value})}
    //           />
    //           <TextInput 
    //             value={this.state.nameSubject}
    //             placeholder="ชื่อวิชา"
    //             onChangeText = {(value) => this.setState({nameSubject:value})}
    //           />
    //           <TextInput 
    //             value={this.state.unit}
    //             placeholder="หน่วยกิต"
    //             onChangeText = {(value) => this.setState({unit:value})}
    //           />
    //           <TextInput 
    //             value={this.state.section}
    //             placeholder="ตอนเรียน"
    //             onChangeText = {(value) => this.setState({section:value})}
    //           />
    //           <TextInput 
    //             value={this.state.term}
    //             placeholder="ภาคเรียน"
    //             onChangeText = {(value) => this.setState({term:value})}
    //           />
    //           <TextInput 
    //             value={this.state.year}
    //             placeholder="ปีการศึกษา"
    //             onChangeText = {(value) => this.setState({year:value})}
    //           />
    //           <TouchableHighlight
    //             onPress={() => {
    //             this.summit(firstname, lastname)
    //               this.props.navigation.navigate('Home')
    //             }}>
    //             <Text>ตกลง</Text>
    //           </TouchableHighlight>

    //           <TouchableHighlight
    //             onPress={() => {
    //                 this.props.navigation.navigate('Home')
    //             }}>
    //             <Text>ยกเลิก</Text>
    //           </TouchableHighlight>
    //         </View>
    //       </View>
    //     </Modal>
    //   </View>
    );
  }
}
