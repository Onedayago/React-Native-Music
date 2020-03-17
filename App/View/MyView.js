import React from 'react'
import {Text, View, ImageBackground} from "react-native";
import getStyle from './Style/MyViewStyle'
import {ListItem} from "react-native-elements";
import Img from '../Img/Image'


let Styles = {}
class MyView extends React.Component{
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
        <ImageBackground source={Img.back} style={{height:100}}>
          <ListItem
            containerStyle={{backgroundColor: "transparent"}}
            title={'听歌看代码'}
            titleStyle={{color: 'white'}}
            subtitle={'lv.6'}
            subtitleStyle={{color: 'white'}}
            leftAvatar={{ source: Img.logo }}
            rightElement={
              <Text style={{fontSize: 12, color: 'white'}}>
                开通黑胶VIP >
              </Text>
            }
          />
        </ImageBackground>

      </View>

    )
  }

}

export default MyView
