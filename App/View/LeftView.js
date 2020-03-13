import React from 'react'
import {View, Image, Text, ScrollView} from "react-native";
import Img from '../Img/Image'
import getStyle from './Style/LeftViewStyle'
import {Divider, Icon, ListItem} from "react-native-elements";


let Styles = {}

class LeftView extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    Styles = getStyle()
    return(
      <View>
        <ScrollView style={Styles.container}>
          <Image source={Img.back} style={Styles.backImage}/>
          <View style={Styles.contentContainer}>
            <ListItem
              title={"听歌写代码"}
              titleStyle={{fontSize: 12}}
              leftAvatar={{ source: Img.logo , size: "small"}}
            />

            <ListItem
              title={"创作者中心"}
              titleStyle={{fontSize: 14}}
              bottomDivider
              leftIcon={
                <Icon
                  name='lightbulb-o'
                  type='font-awesome'
                  color='black'
                />
              }
            />

            <ListItem
              title={"听歌识曲"}
              titleStyle={{fontSize: 14}}
              leftIcon={
                <Icon
                  name='microphone'
                  type='font-awesome'
                  color='black'
                />
              }
            />

            <ListItem
              title={"演出"}
              titleStyle={{fontSize: 14}}
              leftIcon={
                <Icon
                  name='ticket'
                  type='font-awesome'
                  color='black'
                />
              }
            />

            <ListItem
              title={"商城"}
              titleStyle={{fontSize: 14}}
              leftIcon={
                <Icon
                  name='shopping-bag'
                  type='font-awesome'
                  color='black'
                />
              }
            />

            <ListItem
              title={"附近的人"}
              titleStyle={{fontSize: 14}}
              leftIcon={
                <Icon
                  name='location-arrow'
                  type='font-awesome'
                  color='black'
                />
              }
            />

            <ListItem
              title={"口袋彩铃"}
              titleStyle={{fontSize: 14}}
              leftIcon={
                <Icon
                  name='life-ring'
                  type='font-awesome'
                  color='black'
                />
              }
              bottomDivider
            />

            <ListItem
              title={"我的订单"}
              titleStyle={{fontSize: 14}}
              leftIcon={
                <Icon
                  name='first-order'
                  type='font-awesome'
                  color='black'
                />
              }
            />

            <ListItem
              title={"定时停止播放"}
              titleStyle={{fontSize: 14}}
              leftIcon={
                <Icon
                  name='times'
                  type='font-awesome'
                  color='black'
                />
              }
            />

            <ListItem
              title={"扫一扫"}
              titleStyle={{fontSize: 14}}
              leftIcon={
                <Icon
                  name='scan1'
                  type='antdesign'
                  color='black'
                />
              }
            />

            <ListItem
              title={"音乐闹钟"}
              titleStyle={{fontSize: 14}}
              leftIcon={
                <Icon
                  name='clock-o'
                  type='font-awesome'
                  color='black'
                />
              }
            />

            <ListItem
              title={"音乐云盘"}
              titleStyle={{fontSize: 14}}
              leftIcon={
                <Icon
                  name='cloud'
                  type='font-awesome'
                  color='black'
                />
              }
            />

            <ListItem
              title={"在线听歌免流量"}
              titleStyle={{fontSize: 14}}
              leftIcon={
                <Icon
                  name='assistive-listening-systems'
                  type='font-awesome'
                  color='black'
                />
              }
            />

            <ListItem
              title={"优惠卷"}
              titleStyle={{fontSize: 14}}
              leftIcon={
                <Icon
                  name='paperclip'
                  type='font-awesome'
                  color='black'
                />
              }
            />

            <ListItem
              title={"青少年模式"}
              titleStyle={{fontSize: 14}}
              leftIcon={
                <Icon
                  name='product-hunt'
                  type='font-awesome'
                  color='black'
                />
              }
            />

          </View>
        </ScrollView>
        <Divider style={{ backgroundColor: 'gray' }} />
        <View style={Styles.bottomView}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              name='moon-o'
              type='font-awesome'
              color='black'
            />
            <Text style={{fontSize: 14, marginLeft: 10}}>夜间模式</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              name='setting'
              type='antdesign'
              color='black'
            />
            <Text style={{fontSize: 14, marginLeft: 10}}>设置</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              name='logout'
              type='antdesign'
              color='black'
            />
            <Text style={{fontSize: 14, marginLeft: 10}}>退出</Text>
          </View>
        </View>
      </View>
    )
  }

}

export default LeftView
