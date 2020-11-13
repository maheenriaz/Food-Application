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
import Header2 from './Header2'
import {moderateScaleVertical, textScale} from './Responsive';


export default class Add_recipe extends React.Component{
  render(){
  return(
       <View style={{backgroundColor:'white'}}>
          <Header2 navigation={this.props.navigation} />
          <View style={{marginTop:moderateScaleVertical(20),backgroundColor:'grey'}}>
                <Text style={{color:'white',padding:10}}>INGREDIENTS</Text>
          </View>
         <Text style={{color:'grey',padding:10}}>what are the ingredients you need for the recipe? Seperate each ingredient by comma. For example: 2 tsp salt, 1 tsp water, 4 tsp lemon.</Text>

         <View style={{marginTop:moderateScaleVertical(20),backgroundColor:'grey'}}>
              <Text style={{color:'white',padding:10}}>STEP 1</Text>
         </View>
         <View style={{flexDirection:'row'}}>
              <View style={{flexDirection:'column'}}>
                   <Text style={{color:'grey',padding:10}}>What do you do in this step?</Text>
                   <View style={{width:'67%',borderColor:'black',borderWidth:1,borderRadius:40,marginTop:moderateScaleVertical(80),height:30,marginLeft:moderateScaleVertical(10)}}>
                    <Text style={{color:'black',marginTop:moderateScaleVertical(3),fontSize:textScale(16),alignSelf:'center',color:'black'}}>Remove Step 1</Text>
                </View>

             </View>
            <View style={{backgroundColor:'black',height:110,width:100,marginTop:moderateScaleVertical(10),marginLeft:moderateScaleVertical(100)}}>
              <View style={{borderColor:'black',borderWidth:1,borderRadius:40,marginTop:moderateScaleVertical(10),height:30,marginLeft:moderateScaleVertical(10),backgroundColor:'black'}}>
                <Text style={{color:'black',marginTop:moderateScaleVertical(43),fontSize:textScale(13),alignSelf:'center',color:'white'}}>Choose a Photo or video for this step</Text>
              </View> 
            </View>
       </View>

       <View style={{marginTop:moderateScaleVertical(20),backgroundColor:'grey'}}>
              <Text style={{color:'white',padding:10}}>STEP 2</Text>
         </View>
         <View style={{flexDirection:'row'}}>
              <View style={{flexDirection:'column'}}>
                   <Text style={{color:'grey',padding:10}}>What do you do in this step?</Text>
                   <View style={{width:'67%',borderColor:'black',borderWidth:1,borderRadius:40,marginTop:moderateScaleVertical(80),height:30,marginLeft:moderateScaleVertical(10)}}>
                    <Text style={{color:'black',marginTop:moderateScaleVertical(3),fontSize:textScale(16),alignSelf:'center',color:'black'}}>Remove Step 2</Text>
                </View>

             </View>
            <View style={{backgroundColor:'black',height:110,width:100,marginTop:moderateScaleVertical(10),marginLeft:moderateScaleVertical(100)}}>
              <View style={{borderColor:'black',borderWidth:1,borderRadius:40,marginTop:moderateScaleVertical(10),height:30,marginLeft:moderateScaleVertical(10),backgroundColor:'black'}}>
                <Text style={{color:'black',marginTop:moderateScaleVertical(43),fontSize:textScale(13),alignSelf:'center',color:'white'}}>Choose a Photo or video for this step</Text>
              </View> 
            </View>
       </View>
    
        <View style={{flexDirection:'row',marginTop:30}}>
            <View style={{width:'27%',borderColor:'#076AAA',borderWidth:1,borderRadius:40,marginTop:moderateScaleVertical(10),height:30,marginLeft:moderateScaleVertical(10)}}>
                <Text style={{marginTop:moderateScaleVertical(3),fontSize:textScale(16),alignSelf:'center',color:'black'}}>Add Step</Text>
            </View>
            
            <View style={{width:'22%',borderColor:'#E05F00',borderWidth:1,borderRadius:40,marginTop:moderateScaleVertical(10),height:30,marginLeft:moderateScaleVertical(170),backgroundColor:'#E05F00'}}>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate("Add_recipe2")}>
                <Text style={{color:'black',marginTop:moderateScaleVertical(3),fontSize:textScale(16),alignSelf:'center',color:'white'}}>Next</Text>
                </TouchableOpacity>
         
            </View>
        </View>





       <View style={{marginTop:200}}>
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


