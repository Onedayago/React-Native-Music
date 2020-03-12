import React from 'react'
import {View, Text, ScrollView, TouchableOpacity} from "react-native";
import {Header} from "react-native-elements";
import {Dimensions} from 'react-native'
import getStyle from './Style/HomeStyle'
import FindView from '../View/FindView'
import Swiper from 'react-native-swiper'

const winW = Dimensions.get('window').width
const winH = Dimensions.get('window').height

let Styles = {}
class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      index: 1
    }
  }

  componentDidMount(): void {
    this.scrollView.scrollTo({
      x: this.state.index*winW,
      animated: true
    })
  }

  onScroll=(event)=>{
    let x = event.nativeEvent.contentOffset.x;
    this.setState({
      index: parseInt(x/winW)
    })
  }

  setIndex=(index)=>{
    this.setState({
      index
    })

    this.scrollView.scrollTo({
      x: index*winW,
      animated: true
    })
  }


  render(){
    Styles = getStyle()
    return(
      <View>
        <View>
          <Header
            containerStyle={{backgroundColor: 'white', opacity: 1}}
            placement="center"
            leftComponent={{ icon: 'menu', color: 'black' }}
            centerComponent={
              <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-around'}}>
                <TouchableOpacity onPress={()=>this.setIndex(0)}>
                  <Text style={this.state.index === 0 ?Styles.activeText:Styles.normalText}>我的</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.setIndex(1)}>
                  <Text style={this.state.index === 1 ?Styles.activeText:Styles.normalText}>发现</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.setIndex(2)}>
                  <Text style={this.state.index === 2 ?Styles.activeText:Styles.normalText}>云村</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.setIndex(3)}>
                  <Text style={this.state.index === 3 ?Styles.activeText:Styles.normalText}>视频</Text>
                </TouchableOpacity>
              </View>
            }
            rightComponent={{ icon: 'search', color: 'black' }}
          />
        </View>


        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          onScroll={this.onScroll}
          style={{position: 'absolute', zIndex: -100}}
          ref={(ref)=>this.scrollView = ref}
        >
          <View style={Styles.container}>
            <Text>云村</Text>
          </View>
          <View style={Styles.container}>
            <FindView/>
          </View>
          <View style={Styles.container}>
            <Text>云村</Text>
          </View>
          <View style={Styles.container}>
            <Text>视频</Text>
          </View>
        </ScrollView>
      </View>
    )
  }


}

export default Home
