/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {ScrollView, Text, View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {styles} from './style/style';
import {Item} from './components/TaskItem';
class App extends Component {
  private content: String;

  constructor(props:any){
    super(props);
    this.content = '';
  }

  private _onPress = () => {
    console.log(this.content);
  };

  private _onTextChange = (text:String) => {
    this.content = text;
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Today's Tasks</Text>
        <ScrollView style={styles.mt_24}>
          <Item />
        </ScrollView>

        <View style={styles.wrapper}>
          <TextInput
            style={[styles.input, styles.shadow]}
            placeholder="Write a task"
            onChangeText={this._onTextChange}
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
