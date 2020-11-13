import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { createAppContainer ,createSwitchNavigator} from 'react-navigation';
import { createDrawerNavigator} from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
import Screen5 from './Screen5';
import Home from './Home';
import ItemDetails from './ItemDetails';
import Profile from './Profile';
import Add_recipe from './Add_recipe';
import Add_recipe2 from './Add_recipe2';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ScreenStackNavigator= createSwitchNavigator({
  Screen1:{
    screen:Screen1,
    navigationOptions: {
      header: null,
    }
  } ,
  Screen2:{
    screen:Screen2,
    navigationOptions: {
      header: null,
    }
  } ,
  Screen3:{
    screen:Screen3,
    navigationOptions: {
      header: null,
    }
  } ,
  Screen4:{
    screen:Screen4,
    navigationOptions: {
      header: null,
    }
  } ,
  Screen5:{
    screen:Screen5,
    navigationOptions: {
      header: null,
    }
  } ,
})

ScreenStackNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible;
  if (navigation.state.routes.length > 1) {
    navigation.state.routes.map(route => {
      if ( route.routeName === "Screen1" || route.routeName === "Screen2"|| route.routeName === "Screen3"
      || route.routeName === "Screen4" || route.routeName === "Screen5") {
        tabBarVisible = false;
      } else {
        tabBarVisible = true;
      }
    });
  }
  return {
    tabBarVisible
  };
};


const HomeStackNavigator = createStackNavigator({
    Home:{
      screen:Home,
      navigationOptions: {
        header: null,
      }
    },
    ItemDetails:{
      screen:ItemDetails,
      navigationOptions: {
        header: null,
      }
    },
  });
  const ProfileStackNavigator = createStackNavigator({
    Profile:{
      screen:Profile,
      navigationOptions: {
        header: null,
      }
    },
    Add_recipe:{
      screen:Add_recipe,
      navigationOptions: {
        header: null,
      }
    },
    Add_recipe2:{
      screen:Add_recipe2,
      navigationOptions: {
        header: null,
      }
    },
  })
  ProfileStackNavigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible;
    if (navigation.state.routes.length > 0) {
      navigation.state.routes.map(route => {
        if ( route.routeName === "Add_recipe" || route.routeName === "Add_recipe2") {
          tabBarVisible = false;
        } else {
          tabBarVisible = true;
        }
      });
    }
    return {
      tabBarVisible
    };
  };
  const AppDrawerNavigator = createDrawerNavigator({
    Home: 
    { 
      screen: HomeStackNavigator,
      navigationOptions: {
        title: 'Settings',
        drawerLabel: 'Settings',
        drawerIcon: (
          <MaterialIcons name="settings"  size={22} color="#E05F00"  />
        )
      }
     },
     Screen1: 
     { 
       screen: Screen1,
       navigationOptions: {
         title: 'Signout',
         drawerLabel: 'Signout',
         drawerIcon: (
           <MaterialIcons name="login"  size={22} color="#E05F00"  />
         )
       }
      },
  });

  const  Navigation= createBottomTabNavigator(
    {
       App: {screen: AppDrawerNavigator,
         navigationOptions:{  
           tabBarLabel:'Explorer',
           tabBarIcon: ({ tintColor }) => (
                <MaterialIcons name="explore"  size={24} color="#E05F00"  />
              )
               },
           },
      Profile: {screen: ProfileStackNavigator,
       navigationOptions:{  
          tabBarLabel:'Recipes',
          tabBarIcon: ({ tintColor }) => (
            <MaterialIcons name="kitchen"  size={24} color="#E05F00"  />
          )
           },
       },  } )

       const myswitch=createSwitchNavigator({
         Navigation: Navigation,
         Screens: ScreenStackNavigator

       })
export default createAppContainer(myswitch)


