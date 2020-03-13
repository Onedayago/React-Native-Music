import React from 'react'
import {Text, View} from "react-native";
import {Header, Icon} from "react-native-elements";
import getStyle from './Style/SongSquareStyle'
import ScrollableTabView, {ScrollableTabBar}from 'react-native-scrollable-tab-view'
import ApiUtil from '../Service/ApiUtil'
import SongPlayList from './SongPlayList'

let Styles = {}
class SongSquare extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      catList: [],

    }
  }

  async componentWillMount(): void {
    try {
      const result = await ApiUtil.request('getCatList')
      if(result.data.code === 200){
        this.setState({
          catList: result.data.sub.slice(0, 10)
        })
      }else{

      }
    } catch {

    }
  }

  render(){
    Styles = getStyle()
    return(
      <View style={{flex: 1}}>
        <Header
          containerStyle={Styles.headerContainer}
          placement="left"
          leftComponent={
            <Icon
              name='arrowleft'
              type='antdesign'
              color='black'
              onPress={() =>{
                this.props.navigation.goBack()
              }}
            />
          }
          centerComponent={{ text: '歌单广场', style: { color: 'black', fontSize: 16 } }}
        />
        {
          this.state.catList.length!==0&&
          <ScrollableTabView
            tabBarActiveTextColor={'red'}
            tabBarUnderlineStyle={Styles.lineStyle}
            renderTabBar={() => <ScrollableTabBar/>}>
            {
              this.state.catList.map((item, index)=>{
                return(
                  <View tabLabel={item.name} key={index}>
                    <SongPlayList cat={item.name} key={index}/>
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

export default SongSquare
