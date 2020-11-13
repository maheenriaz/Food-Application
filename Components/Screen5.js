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

export default class Screen5 extends React.Component{
  render(){
  return(
     <View>
          <ImageBackground source={require('../assets/mycurve.png')} style={styles.backgroundImage} />
        
          <View style={{marginTop:moderateScaleVertical(140),marginLeft:moderateScaleVertical(20)}}>
              <Text style={{color:'#302E2D',fontSize:textScale(20)}}>All Set! 🎉</Text>
              <Text style={{color:'#302E2D',marginTop:20,fontSize:textScale(20)}}>Headover to your profile 
              and start adding your recipes. </Text>
              
            
         <TouchableOpacity onPress={()=> this.props.navigation.navigate("Profile")}>
             <View style={{width:180,height:40,borderWidth:1,borderColor:'#E05F00',borderRadius:20,
                 marginTop:moderateScaleVertical(20),backgroundColor:'#E05F00'}}>
                <Text style={{textAlign:'center',marginTop:moderateScaleVertical(7),fontSize:textScale(17),color:'white'}}>Let's Start Cooking</Text>
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


