
import React from 'react';
import {
  createAppContainer, createDrawerNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import LoginView from '../View/LoginView'
import PhoneLogin from '../View/PhoneLogin'
import Home from '../View/Home'
import SongList from '../View/SongList'
import PlaySongView from '../View/PlaySongView'
import LeftView from '../View/LeftView'
import SongSquare from '../View/SongSquare'
import {Dimensions} from "react-native";

const winW = Dimensions.get('window').width
const winH = Dimensions.get('window').height
//抽屉
const DrawerNavigator = createDrawerNavigator(
  {
    Home: Home,
  },
  {
    drawerWidth: winW*0.8,
    hideStatusBar: true,
    drawerBackgroundColor: 'white',
    overlayColor: 'black',
    contentComponent:(()=>{
      return <LeftView/>
    })
  }
);

// App 主页面
const MainNavigator = createStackNavigator({
  Home: {
    screen: DrawerNavigator,
    navigationOptions: {
      header: null
    }
  },
  SongList:{
    screen: SongList,
    navigationOptions: {
      header: null
    }
  },
  PlaySongView:{
    screen: PlaySongView,
    navigationOptions: {
      header: null
    }
  },
  SongSquare:{
    screen: SongSquare,
    navigationOptions: {
      header: null
    }
  }
},{
  initialRouteName: 'Home',
})

//使用 createSwitchNavigator 创建分组导航
const RootNavigator = createSwitchNavigator({
  Main: MainNavigator,
  LoginView: LoginView,
  PhoneLogin: PhoneLogin
  }, {
  navigationOptions: {
    header: null,
  },
  initialRouteName: 'Main',
});





export default createAppContainer(RootNavigator);
