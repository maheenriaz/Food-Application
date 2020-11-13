import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';
import Header3 from './Header3';
import {moderateScaleVertical, textScale} from './Responsive';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class Home extends React.Component{
  render(){
    card1=[ 
      {img:'https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900',name:'Deepshah',place:'Naples,Italy',description:'This is the famous family pizza.'},
      {img:'https://hamariweb.com/recipes/images/recipeimages/469.jpg',name:'Deepshah',place:'Naples,Italy',description:'This is the famous family karhayi.'},
      {img:'https://c.ndtvimg.com/2018-10/6n7i40g8_sharad-purnima-2018-kheer-recipe-and-benefits_625x300_23_October_18.jpg',name:'Deepshah',place:'Naples,Italy',description:'This is the famous family kheer.'},
      {img:'https://hamariweb.com/recipes/images/recipeimages/469.jpg',name:'Deepshah',place:'Naples,Italy',description:'This is the famous family pizza.'},
    ];
    return(
     <View style={{backgroundColor:'white'}}>
       <Header3 navigation={this.props.navigation} />
      
         <View style={{marginLeft:moderateScaleVertical(40),elevation:2}}>
            <TextInput style={{width:'90%',height:40,borderWidth:1,borderColor:'grey'
               ,borderRadius:20,padding:10,marginTop:moderateScaleVertical(20),color:'grey',textAlign:'center',elevation:2}} 
             placeholder="What do you want to cook?" />
        </View>
  
     

<View style={{padding:40}}>
         <FlatList 
              data={card1}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item)=>item.id}   
              renderItem={({item})=>{
                return(
                  <View style={{borderColor:'#D1D1D1',borderWidth:1,borderRadius:20,elevation:1.3,marginTop:moderateScaleVertical(20)}}>
                     <TouchableOpacity onPress={()=> this.props.navigation.navigate('ItemDetails',{item})} >
                         <Image style={{width:'100%',height:280,borderRadius:10}} source={{uri:item.img}} />
                    </TouchableOpacity> 
                    <View style={{flexDirection:'row'}} >
                      <MaterialIcons name="turned-in-not" style={{marginLeft:moderateScaleVertical(10),marginTop:moderateScaleVertical(3)}} size={24} color="black" onPress={()=> this.props.navigation.navigate("Profile")} />
                      <MaterialIcons name="favorite-outline" style={{marginLeft:moderateScaleVertical(10),marginTop:moderateScaleVertical(3)}} size={24} color="red" onPress={()=> this.props.navigation.navigate("Profile")} />
                      <MaterialIcons name="share" style={{marginLeft:moderateScaleVertical(10),color:"black",marginTop:moderateScaleVertical(3)}} size={24}  onPress={()=> this.props.navigation.navigate("Profile")} />
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
                );
              }}
          />
         </View>
                

         
     </View>
    )
  }
}

const styles = StyleSheet.create({
 
});


