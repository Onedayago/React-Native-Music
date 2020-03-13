import React from 'react'
import {View, ScrollView} from "react-native";
import {Header, Icon, ListItem} from "react-native-elements";
import getStyle from './Style/SongListStyle'
import ApiUtil from '../Service/ApiUtil'
import Toast from "react-native-root-toast";

let Styles = {}

class SongList extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      recommend: []
    }
  }

  async componentWillMount(): void {

    try{
      const result = await ApiUtil.request('getCommend')

      if(result.data.code === 200){
        this.setState({
          recommend: result.data.recommend
        })
      }else{

        Toast.show(result.data.msg, {
          duration: Toast.durations.SHORT,
          position: Toast.positions.BOTTOM
        })
      }
    }catch  {
      Toast.show("请先登录", {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM
      })
    }

  }

  goPlay=(item)=>{
    this.props.navigation.navigate('PlaySongView',{id: item.id, title: item.name})
  }

  renderItem=(item, index)=>{
    return(
      <ListItem
        onPress={()=>this.goPlay(item)}
        title={item.name}
        titleStyle={{fontSize: 14, paddingVertical: 2}}
        subtitle={item.album.name}
        subtitleStyle={{fontSize: 12, paddingVertical: 2}}
        leftAvatar={{ source: { uri: item.album.picUrl }, rounded: false }}
        bottomDivider
        rightIcon={
          <Icon
            name='dots-three-vertical'
            type='entypo'
            color='black'
            size={14}
            onPress={() =>{

            }}
          />
        }
        key={index}
      />
    )
  }

  render(){

    Styles = getStyle()
    return(
      <View>
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
          centerComponent={{ text: '每日推荐', style: { color: 'black', fontSize: 16 } }}
        />
        <ScrollView style={{marginBottom: 60}}>
          {
            this.state.recommend&&
              this.state.recommend.map((item, index)=>{
                return this.renderItem(item, index)
              })
          }
        </ScrollView>
      </View>
    )
  }
}

export default SongList
