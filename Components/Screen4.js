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
import {textScale,moderateScaleVertical} from './Responsive';

export default class Screen4 extends React.Component{
  render(){
  return(
     <View>
          <ImageBackground source={require('../assets/mycurve.png')} style={styles.backgroundImage} />
        
          <View style={{marginTop:moderateScaleVertical(80),marginLeft:moderateScaleVertical(20)}}>
              <Text style={{marginTop:moderateScaleVertical(20),color:'#302E2D',marginTop:moderateScaleVertical(40),fontSize:textScale(20)}}>A Little More About You </Text>
              
             <Text style={{marginTop:moderateScaleVertical(20),paddingLeft:10,color:'grey'}}>Where are you based?</Text>
              <TextInput style={{width:'90%',height:40,borderWidth:1,borderColor:'grey'
                  ,borderRadius:20,padding:10,marginLeft:moderateScaleVertical(8),marginTop:moderateScaleVertical(17),color:'grey'}} 
                  placeholder="" />
             <Text style={{marginTop:moderateScaleVertical(20),paddingLeft:10,color:'grey'}}>Are you intrested in being a part of subscriber beta</Text>
             <TextInput style={{width:'90%',height:40,borderWidth:1,borderColor:'grey'
                  ,borderRadius:20,padding:10,marginLeft:moderateScaleVertical(8),marginTop:10,color:'grey'}} 
                  placeholder="" />
         <TouchableOpacity onPress={()=> this.props.navigation.navigate("Screen5")}>
             <View style={{width:100,height:40,borderWidth:1,borderColor:'#E05F00',borderRadius:20,
                 marginTop:moderateScaleVertical(20),marginLeft:moderateScaleVertical(10),backgroundColor:'#E05F00'}}>
                <Text style={{textAlign:'center',marginTop:moderateScaleVertical(7),fontSize:textScale(17),color:'white'}}>Continue</Text>
              </View>
              </TouchableOpacity>
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


