import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  AsyncStorage
} from 'react-native';
import { createAppContainer ,createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Screen1 from './Components/Screen1';
import Screen2 from './Components/Screen2';
import Screen3 from './Components/Screen3';
import Screen4 from './Components/Screen4';
import Screen5 from './Components/Screen5';
import Profile from './Components/Profile';
import ItemDetails from './Components/ItemDetails';
import Add_recipe from './Components/Add_recipe';
import Add_recipe2 from './Components/Add_recipe2';
import Header1 from './Components/Header1';
import Navigation from './Components/Navigation';
import Responsive from './Components/Responsive'

export default class App extends React.Component{
 render(){
    return  <Navigation />
   }
}





