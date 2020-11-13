import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {textScale,moderateScaleVertical} from './Responsive';

export default class Header1 extends React.Component{
  render(){
  return(
       <View style={{flexDirection:'row',height:50,backgroundColor:'white',width:'100%'}}>
             <View style={{flexDirection:'row',marginTop:moderateScaleVertical(17)}}>
                  <MaterialIcons name="fastfood" style={{marginLeft:moderateScaleVertical(10)}} size={24} color="black"  />
                  <Text  style={{marginLeft:moderateScaleVertical(130),fontSize:textScale(20)}}>Deep Shah</Text>
             </View>
             </View>
     )
  }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'stretch', // or 'stretch'
        width:'100%',
        height:110,
      }
});


