/* eslint-disable prettier/prettier */
import React, {Component, ReactElement} from 'react';
import {ScrollView, Text, View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {styles} from './style/style';
import {Item} from './components/TaskItem';

interface iProps{}
interface iState{
  titleItem:String,
  listItem:String[],
}
class App extends Component <iProps, iState>{
  private content: String;
  private arrayItem:String[];

  constructor(props:any){
    super(props);
    this.content = '';
    this.arrayItem = [];
    this.state = {
      titleItem : '',
      listItem:[],

    };
  }

  private _onPress = () => {

    this.arrayItem.push(this.content);
    this.setState({
      listItem: this.arrayItem,
    });
    // this._onTextChange('');
  };

  private _onTextChange = (text:String) => {
    this.content = text;
  };

  private _renderTaskItem = ():Array<ReactElement> => {
    return this.state.listItem.map((item, index) => <Item key={index} index={index} content={item} onDelete={this._onDelete}/>);
  };

  private _onDelete = (index:number) => {
    this.arrayItem.splice(index,1);
    this.setState({
      listItem: this.arrayItem,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Today's Tasks</Text>
        <ScrollView style={styles.mt_24}>
          {this._renderTaskItem()}
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
