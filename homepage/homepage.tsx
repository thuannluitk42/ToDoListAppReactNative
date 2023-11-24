/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {styles} from './style/style';
class App extends Component {
  _onPress = () => {
    console.log('nhan em di');
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Today's Tasks</Text>
        <ScrollView style={styles.mt_24}>
          <View style={styles.item}>
            <View style={styles.subItem}>
              <View style={[styles.square, styles.mr_16]} />
              <Text>Like</Text>
            </View>
            <View style={styles.circle} />
          </View>
        </ScrollView>

        <View style={styles.wrapper}>
          <TextInput
            style={[styles.input, styles.shadow]}
            placeholder="Write a task"
          />
          <TouchableOpacity
            style={[styles.btn, styles.shadow]}
            onPress={this._onPress}>
            <Image source={require('../images/add/add.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default App;
