import React from 'react'
import {View} from "react-native";
import {Dimensions} from 'react-native'
import getStyle from './Style/HomeStyle'
import FindView from '../View/FindView'
import VideoList from './VideoList'
import ScrollableTabView from "react-native-scrollable-tab-view";
import CustomTabBar from '../Component/HomeCustomTabBar'
import MainView from '../Component/MainView'
import YunCun from "./YunCun";
import MyView from "./MyView";

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
            <MyView/>
          </View>
          <View tabLabel={"发现"} style={Styles.container}>
            <FindView/>
          </View>
          <View tabLabel={"云村"} style={Styles.container}>
            <YunCun/>
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
