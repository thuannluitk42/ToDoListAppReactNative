/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './style/style';
class App extends Component {
  _onPress = () => {
    console.log('nhan em di');
  };
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.loginComponent}>
        <Text style={styles.loginTitle}>Đăng Nhập</Text>
        <View style={styles.wrapper}>
          <TextInput style={styles.ml_10}>Tên đăng nhập</TextInput>
          <TextInput style={styles.ml_10}>Mật khẩu</TextInput>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style = {styles.loginBtnName}>ĐĂNG NHẬP</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    );
  }
}

export default App;
