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
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Header2 from './Header2';
import {TextInput} from 'react-native-paper';
import {moderateScaleVertical, textScale} from './Responsive';

export default class Add_recipe2 extends React.Component{
  render(){
  return(
       <View style={{backgroundColor:'white'}}>
          <Header2 navigation={this.props.navigation} />
        
        <View style={{width:'70%',marginTop:moderateScaleVertical(20),marginLeft:moderateScaleVertical(10)}}>
        <TextInput
            label="What is this dish called?"
           style={{backgroundColor:'white'}}
           theme={{colors: {primary: '#E05F00'}}}
            />

        <TextInput
            label="Describe this dish?"
           style={{backgroundColor:'white'}}
           theme={{colors: {primary: '#E05F00'}}}
            />

        <TextInput
            label="Where is this dish from?"
           style={{backgroundColor:'white'}}
           theme={{colors: {primary: '#E05F00'}}}
            />

        <TextInput
            label="Who can see this recipe?"
           style={{backgroundColor:'white'}}
           theme={{colors: {primary: '#E05F00'}}}
            />

        <TextInput
            label="Allow remixing"
           style={{backgroundColor:'white'}}
           theme={{colors: {primary: '#E05F00'}}}

            />
       </View>
     
          

       <View style={{flexDirection:'row',marginTop:moderateScaleVertical(20)}}>
            <View style={{width:'27%',borderColor:'#076AAA',borderWidth:1,borderRadius:40,marginTop:moderateScaleVertical(10),height:30,marginLeft:moderateScaleVertical(10)}}>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate("Add_recipe")}>
                  <Text style={{marginTop:3,fontSize:textScale(16),alignSelf:'center',color:'black'}}>Back</Text>
             </TouchableOpacity>
          </View>
            
            <View style={{width:'22%',borderColor:'#07AA0C',borderWidth:1,borderRadius:40,marginTop:moderateScaleVertical(11),height:33,marginLeft:moderateScaleVertical(170),backgroundColor:'#07AA0C'}}>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate("Home")}>
                <Text style={{color:'black',marginTop:moderateScaleVertical(3)  ,fontSize:textScale(16),alignSelf:'center',color:'white'}}>Add recipe</Text>
                </TouchableOpacity>
         
            </View>
        </View>



       <View style={{marginTop:300}}>
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


