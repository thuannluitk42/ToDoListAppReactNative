/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3499dc',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent:'center',
  },
  loginComponent: {
    backgroundColor: '#d9eaf8',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    height: 210,
    width: 300,
  },
  loginTitle: {
    fontSize: 24,
    color: 'black',
    marginTop: 20,
    marginLeft: 20,

  },
  wrapper: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  ml_10:{
    marginLeft: 10,
  },

  loginBtn: {
    backgroundColor: '#2096f3',
    height:25,
    borderRadius: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginBtnName:{
    color:'white',
  },

});
