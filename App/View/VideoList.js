import React from 'react'
import {View} from "react-native";
import getStyle from './Style/VideoListStyle'
import ApiUtil from '../Service/ApiUtil'
import ScrollableTabView, {ScrollableTabBar} from "react-native-scrollable-tab-view";
import VideoView from "./VideoView";

let Styles = {}

class VideoList extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      catList: []
    }
  }

  async componentWillMount(): void {
    try {
      const result = await ApiUtil.request('getVideoTag')
      if (result.data.code === 200) {
        this.setState({
          catList: result.data.data
        })
      } else {

      }
    } catch {

    }
  }

  render(){
    Styles = getStyle()
    return(
      <View style={{flex: 1}}>
        {
          this.state.catList.length!==0&&
          <ScrollableTabView
            tabBarActiveTextColor={'red'}
            tabBarUnderlineStyle={Styles.lineStyle}
            renderTabBar={() => <ScrollableTabBar/>}>
            {
              this.state.catList.map((item, index)=>{
                return(
                  <View tabLabel={item.name} key={index} style={{flex: 1}}>
                    <VideoView id={item.id} key={index}/>
                  </View>
                )
              })
            }
          </ScrollableTabView>
        }
      </View>
    )
  }

}

export default VideoList
