import React from 'react'
import {View, Text, ScrollView, TouchableOpacity} from "react-native";
import {Header, Icon} from "react-native-elements";
import {Dimensions} from 'react-native'
import getStyle from './Style/HomeStyle'
import FindView from '../View/FindView'
import VideoList from './VideoList'
import ScrollableTabView from "react-native-scrollable-tab-view";
import CustomTabBar from '../Component/HomeCustomTabBar'
import VideoView from "./VideoView";
import MainView from '../Component/MainView'

const winW = Dimensions.get('window').width
const winH = Dimensions.get('window').height

let Styles = {}
class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state={

    }
  }

  componentDidMount(): void {

  }

  render(){
    Styles = getStyle()
    return(
      <MainView>
        <ScrollableTabView
          initialPage={1}
          renderTabBar={() => {
           return <CustomTabBar
             activeTextColor={'black'}
             inactiveTextColor={'gray'}
             activeSize={18}
             inactiveSize={14}
             leftClick={()=>this.props.navigation.openDrawer()}
             rightClick={()=>{}}
           />
          }
          }>
          <View tabLabel={"我的"} style={Styles.container}>

          </View>
          <View tabLabel={"发现"} style={Styles.container}>
            <FindView/>
          </View>
          <View tabLabel={"云村"} style={Styles.container}>

          </View>
          <View tabLabel={"视频"} style={Styles.container}>
            <VideoList/>
          </View>
        </ScrollableTabView>
      </MainView>
    )
  }


}

export default Home
