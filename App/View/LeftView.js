import React from 'react'
import {View, Image, Text, ScrollView} from "react-native";
import Img from '../Img/Image'
import getStyle from './Style/LeftViewStyle'


let Styles = {}

class LeftView extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    Styles = getStyle()
    return(
      <ScrollView style={Styles.container}>
        <Image source={Img.back} style={Styles.backImage}/>
        <View style={Styles.contentContainer}>

        </View>
      </ScrollView>
    )
  }

}

export default LeftView
