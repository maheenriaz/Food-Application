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
  Image,Platform,Dimensions,
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import {moderateScaleVertical, textScale} from './Responsive';

const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 350;

export default class ItemDetails extends React.Component{
  render(){
    const  item = this.props.navigation.state.params.item
    console.log(item)
  return(
    <View style={styles.container}>
    <HeaderImageScrollView
      maxHeight={MAX_HEIGHT}
      minHeight={MIN_HEIGHT}
      maxOverlayOpacity={0.6}
      minOverlayOpacity={0.3}
      renderHeader={() => (
          <ImageBackground  source={{uri: item.img}} style={styles.image} >
            <TouchableOpacity  onPress={()=> this.props.navigation.navigate("Home")}>
               <MaterialIcons  name="reply" style={{marginTop:getStatusBarHeight(),marginLeft:moderateScaleVertical(10)}}  size={22} color="white"  />
            </TouchableOpacity>
          </ImageBackground>
      )}
      renderForeground={() => (
          <View style={styles.titleContainer}>
            <Text style={styles.imageTitle} >{item.description}</Text>
          </View>
        )}
      renderFixedForeground={() => (
          <Animatable.View style={styles.navTitleView} >
            <Text style={styles.navTitle}>{item.description}</Text>
          </Animatable.View>
      )} 
  >
   <TriggeringView
                style={styles.section}
             >
                <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
                    <View style={{flexDirection:'row'}} >
                        <MaterialIcons name="turned-in-not" style={{marginLeft:moderateScaleVertical(10),marginTop:moderateScaleVertical(3)}} size={20} color="black" onPress={()=> this.props.navigation.navigate("Profile")} />
                        <MaterialIcons name="favorite-outline" style={{marginLeft:moderateScaleVertical(10),marginTop:moderateScaleVertical(3)}} size={20} color="red" onPress={()=> this.props.navigation.navigate("Profile")} />
                        <MaterialIcons name="share" style={{marginLeft:moderateScaleVertical(10),color:"black",marginTop:moderateScaleVertical(3)}} size={20}  onPress={()=> this.props.navigation.navigate("Profile")} />
                    </View>
                    <View style={{flexDirection:'row'}} >
                       <Text style={{marginTop:moderateScaleVertical(10),color:'black',fontSize:textScale(14),paddingLeft:10}}>{item.name}    *</Text>
                       <Text style={{marginTop:moderateScaleVertical(10),color:'grey',fontSize:textScale(14),paddingLeft:10}}>Following    *</Text>
                       <Text style={{marginTop:moderateScaleVertical(10),color:'black',fontSize:textScale(14),paddingLeft:10}}>Subscribe     </Text>
                   </View>
                      <View style={{padding:10}}>
                        <Text>{item.place}</Text>
                        <Text>{item.description}</Text>
                    </View>
                </View>
              </TriggeringView>

            <TriggeringView>
                <View style={{marginLeft:moderateScaleVertical(20),width:'42%',borderColor:'grey',borderWidth:1,borderRadius:40,marginTop:moderateScaleVertical(10),height:30,backgroundColor:'grey'}}>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate("Home")}>
                        <Text style={{color:'black',marginTop:moderateScaleVertical(3),fontSize:textScale(16),alignSelf:'center',color:'white'}}>All Ingredient Needed</Text>
                    </TouchableOpacity>
                </View>
                <View style={{padding:24}}>
                     <Text>* 3 tsp blah</Text>
                     <Text>* 2 tsp yukh</Text>
                     <Text>* 4 cup loud</Text>
                 </View>

                 <View style={{marginLeft:moderateScaleVertical(20),width:'22%',borderColor:'grey',borderWidth:1,borderRadius:40,height:30,backgroundColor:'grey'}}>
                    <TouchableOpacity >
                        <Text style={{color:'black',marginTop:moderateScaleVertical(3),fontSize:textScale(16),alignSelf:'center',color:'white'}}>Step1</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{marginTop:moderateScaleVertical(-20),color:'black',fontSize:textScale(16),color:'black',padding:30}}>Here are the ingredients you need for this step.</Text>
                <View style={{marginTop:moderateScaleVertical(-50),padding:30}}>
                     <Text>* 3 tsp blah</Text>
                     <Text>* 2 tsp yukh</Text>
                     <Text>* 4 cup loud</Text>
                 </View>
                <Text style={{marginTop:moderateScaleVertical(-50),color:'black',fontSize:textScale(16),color:'black',padding:30}}>Here what you do in this step. This is an instruction. You take the blah blah.</Text>

                <View style={{marginLeft:moderateScaleVertical(20),width:'22%',borderColor:'grey',borderWidth:1,borderRadius:40,height:30,backgroundColor:'grey'}}>
                    <TouchableOpacity >
                        <Text style={{color:'black',marginTop:moderateScaleVertical(3),fontSize:textScale(16),alignSelf:'center',color:'white'}}>Step2</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{marginTop:moderateScaleVertical(-20),color:'black',fontSize:textScale(16),color:'black',padding:30}}>Here are the ingredients you need for this step.</Text>
                <View style={{marginTop:moderateScaleVertical(-50),padding:30}}>
                     <Text>* 3 tsp blah</Text>
                     <Text>* 2 tsp yukh</Text>
                     <Text>* 4 cup loud</Text>
                 </View>
                <Text style={{marginTop:moderateScaleVertical(-50),color:'black',fontSize:textScale(16),color:'black',padding:30}}>Here what you do in this step. This is an instruction. You take the blah blah.</Text>

                <View style={{marginLeft:moderateScaleVertical(20),width:'22%',borderColor:'grey',borderWidth:1,borderRadius:40,height:30,backgroundColor:'grey'}}>
                    <TouchableOpacity >
                        <Text style={{color:'black',marginTop:moderateScaleVertical(3),fontSize:textScale(16),alignSelf:'center',color:'white'}}>Step3</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{marginTop:moderateScaleVertical(-20),color:'black',fontSize:textScale(16),color:'black',padding:30}}>Here are the ingredients you need for this step.</Text>
                <View style={{marginTop:moderateScaleVertical(-50),padding:30}}>
                     <Text>* 3 tsp blah</Text>
                     <Text>* 2 tsp yukh</Text>
                     <Text>* 4 cup loud</Text>
                 </View>
                <Text style={{marginTop:moderateScaleVertical(-50),color:'black',fontSize:textScale(16),color:'black',padding:30}}>Here what you do in this step. This is an instruction. You take the blah blah.</Text>

            </TriggeringView>

          

     

    
   </HeaderImageScrollView>
</View>
     )
  }
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flex:1,
    },
    image: {
      height: MAX_HEIGHT,
      width: Dimensions.get('window').width,
      alignSelf: 'stretch',
      resizeMode: 'cover',
    },
    title: {
      fontSize: textScale(20),
    },
    name: {
      fontWeight: 'bold',
    },
    section: {
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#cccccc',
      backgroundColor: 'white',
    },
    sectionTitle: {
      fontSize: textScale(18),
      fontWeight: 'bold',
    },
    sectionContent: {
      fontSize: textScale(16),
      textAlign: 'justify',
    },
    categories: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
    },
    categoryContainer: {
      flexDirection: 'row',
      backgroundColor: '#FF6347',
      borderRadius: 20,
      margin: moderateScaleVertical(10),
      padding: 10,
      paddingHorizontal: 15,
    },
    category: {
      fontSize: textScale(14),
      color: '#fff',
      marginLeft: moderateScaleVertical(10),
    },
    titleContainer: {
      flex: 1,
      alignSelf: 'stretch',
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageTitle: {
      color: 'white',
      backgroundColor: 'transparent',
      fontSize: textScale(24),
    },
    navTitleView: {
      height: MIN_HEIGHT,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: Platform.OS === 'ios' ? 40 : 5,
      opacity: 0,
    },
    navTitle: {
      color: 'white',
      fontSize: textScale(18),
      backgroundColor: 'transparent',
    },
    sectionLarge: {
      minHeight: 300,
    },
  });
  


