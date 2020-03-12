
import React from 'react'
import {Modal, PanResponder, View, Text, SectionList, TouchableOpacity} from "react-native";
import getStyle from './Style/PhoneModalStyle'
import {Dimensions} from 'react-native'
import {Icon, Divider} from "react-native-elements";
import CountryCode from '../Util/CountryCode'


const winW = Dimensions.get('window').width
const winH = Dimensions.get('window').height

let Styles = {}

export default class PhoneModal extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      modalVisible: false,
      constTop: 60,
      top: 60,
      dataSource: CountryCode
    }

  }

  componentWillMount(): void {
    this._panResponder = PanResponder.create({
      // 要求成为响应者：
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        // 开始手势操作。给用户一些视觉反馈，让他们知道发生了什么事情！
        // gestureState.{x,y} 现在会被设置为0
      },
      onPanResponderMove: (evt, gestureState) => {
        // 最近一次的移动距离为gestureState.move{X,Y}
        let top = this.state.top
        if((top + gestureState.dy)>=this.state.constTop){
          this.setState({
            top: gestureState.dy+this.state.constTop
          })
        }

        // 从成为响应者开始时的累计手势移动距离为gestureState.d{x,y}
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        // 用户放开了所有的触摸点，且此时视图已经成为了响应者。

        if(this.state.top > winH/2){
          this.setState({
            modalVisible: false,
          })
        }else{
          this.setState({
            top: this.state.constTop
          })
        }
        // 一般来说这意味着一个手势操作已经成功完成。
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // 另一个组件已经成为了新的响应者，所以当前手势将被取消。
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // 返回一个布尔值，决定当前组件是否应该阻止原生组件成为JS响应者
        // 默认返回true。目前暂时只支持android。
        return true;
      },
    });
  }

  componentDidMount(): void {

  }


  //渲染 item
  renderItem=({ item, index, section: { title, data }})=>{
    return(
      <TouchableOpacity style={Styles.itemContainer} onPress={()=>{
        this.setModalVisible(false)
        this.props.getCode&&this.props.getCode(item.dial_code)
      }}>
        <Text>{item.name}</Text>
        <Text>{item.dial_code}</Text>
      </TouchableOpacity>
    )
  }

  //渲染头部
  renderHeader=({ section: { title }})=>{
    return(
      <View style={Styles.itemHeader}>
        <Text>{title}</Text>
      </View>
    )
  }

  setModalVisible=(visible)=>{
    this.setState({ modalVisible: visible });
  }

  render(){
    Styles = getStyle()
    return(
        <Modal
          transparent={true}
          animationType="none"
          visible={this.state.modalVisible}
          onShow={()=>{
            this.setState({
              top: this.state.constTop
            })
          }}
        >
          <View style={Styles.container}>
          </View>
          <View style={[Styles.contentContainer,{top: this.state.top}]}>
            <View style={Styles.top}>
              <Icon
                name={'close'}
                type={'antdesign'}
                color={'black'}
                size={16}
                onPress={()=>{
                  this.setModalVisible(false)
                }}
              />
              <Text style={Styles.text}>
                选择国家和地区
              </Text>
            </View>

            <SectionList
              style={Styles.list}
              sections={this.state.dataSource}
              renderItem={this.renderItem}
              renderSectionHeader={this.renderHeader}
              keyExtractor={(item, index) => item + index}
              ItemSeparatorComponent={()=> <Divider/>}
              canCancelContentTouches={true}
            />

          </View>
        </Modal>
    )
  }

}
