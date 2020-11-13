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
  TouchableOpacity
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import {textScale,moderateScaleVertical} from './Responsive';

export default class Screen1 extends React.Component{
  render(){
    console.log(getStatusBarHeight());
  return(
     <View>
          <ImageBackground source={require('../assets/mycurve.png')} style={styles.backgroundImage} />
          <KeyboardAvoidingView behavior='padding'> 
          <View style={{marginTop:moderateScaleVertical(200)}}>
             <Text style={{fontSize:textScale(24),paddingLeft:10,color:'grey'}}>Pipli is the best place for independent blogging.</Text>
             <Text style={{fontSize:textScale(24),paddingLeft:10,color:'grey',marginTop:moderateScaleVertical(20)}}> 
               Find and build your own community
               and make money for subscription. 
             </Text>
             <Text style={{marginTop:moderateScaleVertical(20),paddingLeft:10,color:'grey'}}>Email address</Text>
                  <TextInput style={{width:'90%',height:40,borderWidth:1,borderColor:'grey'
                  ,borderRadius:20,padding:10,marginLeft:moderateScaleVertical(8),marginTop:moderateScaleVertical(17),color:'grey'}} 
                  placeholder="Enter Your Email Address" />
                  <TouchableOpacity onPress={()=> this.props.navigation.navigate("Screen2")}>
              <View style={{width:100,height:40,borderWidth:1,borderColor:'#E05F00',borderRadius:20,
              marginTop:moderateScaleVertical(20),marginLeft:moderateScaleVertical(10),backgroundColor:'#E05F00'}}>
                <Text style={{textAlign:'center',marginTop:moderateScaleVertical(7),fontSize:textScale(17),color:'white'}}>Continue</Text>
              </View>
              </TouchableOpacity>
       
         </View>
         </KeyboardAvoidingView>

    </View>
    )
  }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'stretch', // or 'stretch'
        height:220,
        width:'100%',
       
      }
});


