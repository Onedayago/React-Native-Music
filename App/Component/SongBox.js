import React from 'react'
import {Image, Text, View} from "react-native";
import getStyle from './Style/SongBoxStyle'


let Styles = {}
class SongBox extends React.Component{
  constructor(props) {
    super(props);
    this.state={

    }
  }

  render(){
    Styles = getStyle()
    let item = this.props.item
    return(
      <View style={Styles.container}>
        <Image source={{uri: item.coverImgUrl}} style={Styles.imgBox}/>
        <Text style={Styles.text}>{item.name}</Text>
      </View>

    )
  }

}

export default SongBox
