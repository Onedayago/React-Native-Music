import React from 'react'
import {Animated, Easing, Image, View, Button} from "react-native";
import getStyle from './Style/LogoStyle'
import Img from "../Img/Image";

let Styles = {}
class Logo extends React.Component{

  constructor(props) {
    super(props);
    this.state={
      circle_length1: new Animated.Value(10),
      circle_length2: new Animated.Value(10),
      circle_border1: new Animated.Value(5),
      circle_border2: new Animated.Value(5),
      duration: 6000
    }

    this.circle_length1 = Animated.timing(
      this.state.circle_length1,
      {
        toValue: 300,
        duration: this.state.duration,
        easing: Easing.ease,
      }
    );

    this.circle_border1 = Animated.timing(
      this.state.circle_border1,
      {
        toValue: 150,
        duration: this.state.duration,
        easing: Easing.ease,
      }
    );

    this.circle_length2 = Animated.timing(
      this.state.circle_length2,
      {
        toValue: 300,
        duration: this.state.duration,
        easing: Easing.ease,
      }
    );

    this.circle_border2 = Animated.timing(
      this.state.circle_border2,
      {
        toValue: 150,
        duration: this.state.duration,
        easing: Easing.ease,
      }
    );

    this.animated1 = Animated.parallel([this.circle_length1, this.circle_border1])
    this.animated2 = Animated.parallel([this.circle_length2, this.circle_border2])
  }

  componentDidMount(): void {
    setTimeout(()=>{
      Animated.loop(this.animated2).start()
    }, 3000)

    Animated.loop(this.animated1).start()
  }

  componentWillUnmount(): void {
    Animated.loop(this.animated1).stop()
    Animated.loop(this.animated2).stop()
  }


  render(){
    Styles = getStyle()
    return(
      <View style={Styles.container}>
        <Animated.View
          style={[
            Styles.circle
            ,{
              width: this.state.circle_length1,
              height: this.state.circle_length1,
              borderRadius: this.state.circle_border1,
            }
          ]}
        />
        <Animated.View
          style={[
            Styles.circle
            ,{
              width: this.state.circle_length2,
              height: this.state.circle_length2,
              borderRadius: this.state.circle_border2,
            }
          ]}
        />
        <Image source={Img.logo} style={Styles.logo}/>
      </View>
    )
  }
}

export default Logo
