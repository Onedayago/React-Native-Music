import React from 'react'
import {View} from "react-native";
import getStyle from './Style/YunCunStyle'
import ScrollableTabView ,{ScrollableTabBar}from "react-native-scrollable-tab-view";



let Styles = {}
class YunCun extends React.Component{
  constructor(props) {
    super(props);
    this.state={

    }
  }

  async componentWillMount(): void {
    try {

    } catch {

    }
  }

  render(){
    Styles = getStyle()
    return(
      <View style={{flex: 1}}>
        <ScrollableTabView
          tabBarActiveTextColor={'red'}
          renderTabBar={() => <ScrollableTabBar underlineStyle={{ backgroundColor: 'red', height: 1}}/>}>
          {
            ['广场', '关注'].map((item, index)=>{
              return(
                <View tabLabel={item} key={index}>

                </View>
              )
            })
          }
        </ScrollableTabView>
      </View>

    )
  }

}

export default YunCun
