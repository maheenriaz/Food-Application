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
  Animated,
  Dimensions
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Header1 from './Header1'
import {moderateScaleVertical, textScale} from './Responsive';

const { width } = Dimensions.get("window");


export default class Profile extends React.Component{
  state = {
    active: 0,
    xTabOne: 0,
    xTabTwo: 0,
    translateX: new Animated.Value(0),
    translateXTabOne: new Animated.Value(0),
    translateXTabTwo: new Animated.Value(width),
    translateY: -1000
};
handleSlide = type => {
  let {
      active,
      xTabOne,
      xTabTwo,
      translateX,
      translateXTabOne,
      translateXTabTwo
  } = this.state;
  Animated.spring(translateX, {
      toValue: type,
      duration: 100
  }).start();
  if (active === 0) {
      Animated.parallel([
          Animated.spring(translateXTabOne, {
              toValue: 0,
              duration: 100
          }).start(),
          Animated.spring(translateXTabTwo, {
              toValue: width,
              duration: 100
          }).start()
      ]);
  } else {
      Animated.parallel([
          Animated.spring(translateXTabOne, {
              toValue: -width,
              duration: 100
          }).start(),
          Animated.spring(translateXTabTwo, {
              toValue: 0,
              duration: 100
          }).start()
      ]);
  }
};
  render(){
    let {
      xTabOne,
      xTabTwo,
      translateX,
      active,
      translateXTabOne,
      translateXTabTwo,
      translateY
  } = this.state;
 
  return(
     <View style={{backgroundColor:'white'}}>
         <Header1 />
         
         <View style={{flexDirection:'row'}}>
                    <Image  source={{uri:'https://i.stack.imgur.com/l60Hf.png'}}
                     style={{width:80,height:70,marginLeft:10,borderRadius:180,marginTop:30}} />
                  <View style={{flexDirection:'column'}}>
                    <Text style={{marginTop:20,color:'black',marginTop:30,fontSize:textScale(19),paddingLeft:10,fontWeight:'bold'}}>Deep Shah</Text>
                    <Text style={{marginTop:2,color:'grey',fontSize:textScale(14),paddingLeft:10}}>@deepShah</Text>
                    <Text style={{marginTop:2,color:'#E05F00',fontSize:textScale(14),paddingLeft:10}}>Share Profile</Text>
                  </View>
         </View>

        <View style={{width:'100%',flexDirection:'row'}}>
           <Text style={{marginTop:20,color:'black',marginTop:30,fontSize:textScale(16),paddingLeft:10}}>20 Subscriber</Text>
          <Text style={{marginTop:20,color:'black',marginTop:30,fontSize:textScale(16),paddingLeft:10}}>143 Followers</Text>
           <Text style={{marginTop:20,color:'black',marginTop:30,fontSize:textScale(16),paddingLeft:10}}>57 Following</Text>
       </View>

       <View style={{width:'87%',flexDirection:'row'}}>
           <Text style={{color:'black',marginTop:30,fontSize:16,paddingLeft:10}}>Deep is a vegan and dluten free designer from Ahmdabad. He lives in Brooklen with his dog Nacy drwer.</Text>
       </View>

       <View style={{width:'27%',borderColor:'#E05F00',borderWidth:1,borderRadius:40,marginTop:moderateScaleVertical(10),height:30,marginLeft:moderateScaleVertical(10),backgroundColor:'#E05F00'}}>
           <Text style={{color:'black',marginTop:moderateScaleVertical(3),fontSize:textScale(16),alignSelf:'center',color:'white'}}>Edit Profile</Text>
       </View>

     
       <View>
                <View
                    style={{
                        width: "80%",
                        marginLeft: "auto",
                        marginRight: "auto"
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            marginTop: moderateScaleVertical(40),
                            marginBottom: moderateScaleVertical(20),
                            height: 36,
                            position: "relative"
                        }}
                    >
                        <Animated.View
                            style={{
                                position: "absolute",
                                width: "50%",
                                height: "100%",
                                top: 0,
                                left: 0,
                                backgroundColor: "black",
                                borderRadius: 4,
                                transform: [
                                    {
                                        translateX
                                    }
                                ]
                            }}
                        />
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                borderWidth: 1,
                                borderColor: "black",
                                borderRadius: 4,
                                borderRightWidth: 0,
                                borderTopRightRadius: 0,
                                borderBottomRightRadius: 0
                            }}
                            onLayout={event =>
                                this.setState({
                                    xTabOne: event.nativeEvent.layout.x
                                })
                            }
                            onPress={() =>
                                this.setState({ active: 0 }, () =>
                                    this.handleSlide(xTabOne)
                                )
                            }
                        >
                            <Text
                                style={{
                                    color: active === 0 ? "#fff" : "black"
                                }}
                            >
                                My Recipes
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                borderWidth: 1,
                                borderColor: "black",
                                borderRadius: 4,
                                borderLeftWidth: 0,
                                borderTopLeftRadius: 0,
                                borderBottomLeftRadius: 0
                            }}
                            onLayout={event =>
                                this.setState({
                                    xTabTwo: event.nativeEvent.layout.x
                                })
                            }
                            onPress={() =>
                                this.setState({ active: 1 }, () =>
                                    this.handleSlide(xTabTwo)
                                )
                            }
                        >
                            <Text
                                style={{
                                    color: active === 1 ? "#fff" : "black"
                                }}
                            >
                                Bookmark
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView>
                        <Animated.View
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                transform: [
                                    {
                                        translateX: translateXTabOne
                                    }
                                ]
                            }}
                            onLayout={event =>
                                this.setState({
                                    translateY: event.nativeEvent.layout.height
                                })
                            }
                        >
                            <Text style={{fontSize:textScale(23),color:'grey'}}>You have'nt added any recipes</Text>
                            <View style={{width:'34%',borderColor:'#E05F00',borderWidth:1,borderRadius:40,marginTop:moderateScaleVertical(10),height:34,marginLeft:10,backgroundColor:'#E05F00'}}>
                              <TouchableOpacity onPress={()=> this.props.navigation.navigate("Add_recipe")}>
                                 <Text style={{color:'black',marginTop:moderateScaleVertical(4),fontSize:textScale(16),alignSelf:'center',color:'white'}}>Add recipes</Text>
                              </TouchableOpacity>
                            </View>
                        </Animated.View>

                        <Animated.View
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                transform: [
                                    {
                                        translateX: translateXTabTwo
                                    },
                                    {
                                        translateY: -translateY
                                    }
                                ]
                            }}
                        >
                            <Text>No Bookmarks</Text>
                            <View style={{ marginTop: moderateScaleVertical(20) }}>
                                
                            </View>
                        </Animated.View>
                    </ScrollView>
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


