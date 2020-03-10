import React from 'react'
import MainView from '../Component/MainView'
import getStyle from './Style/LoginViewStyle'
import {View, Image, Animated, Easing} from 'react-native'
import { Button} from 'react-native-elements';
import Img from '../Img/Image'

let Styles = {}

class LoginView extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      circle_length1: new Animated.Value(10),
      circle_length2: new Animated.Value(10),
      circle_border1: new Animated.Value(5),
      circle_border2: new Animated.Value(5),
      checked: false
    }

    this.circle_length1 = Animated.timing(
      this.state.circle_length1,
      {
        toValue: 300,
        duration: 6000,
        easing: Easing.ease,
      }
    );

    this.circle_border1 = Animated.timing(
      this.state.circle_border1,
      {
        toValue: 150,
        duration: 6000,
        easing: Easing.ease,
      }
    );

    this.circle_length2 = Animated.timing(
      this.state.circle_length2,
      {
        toValue: 300,
        duration: 6000,
        easing: Easing.ease,
      }
    );

    this.circle_border2 = Animated.timing(
      this.state.circle_border2,
      {
        toValue: 150,
        duration: 6000,
        easing: Easing.ease,
      }
    );

  }

  componentDidMount(): void {
    setTimeout(()=>{
      this.startAnimated2()
    }, 3000)

    this.startAnimated1()
  }

  startAnimated1=()=> {

    Animated.parallel([this.circle_length1, this.circle_border1]).start(()=>{
      this.state.circle_length1.setValue(10)
      this.state.circle_border1.setValue(5)
      this.startAnimated1()
    })

  }

  startAnimated2=()=> {
    Animated.parallel([this.circle_length2, this.circle_border2]).start(()=>{
      this.state.circle_length2.setValue(10)
      this.state.circle_border2.setValue(5)
      this.startAnimated2()
    })
  }

  render(){
    Styles = getStyle()
    return(
      <MainView style={Styles.container}>
        <View style={Styles.topView}>
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
        <View style={Styles.centerView}/>
        <View style={Styles.bottomView}>
          <Button
            title={"手机号登录"}
            buttonStyle={Styles.loginButtonStyle}
            titleStyle={Styles.loginTitleStyle}
          />
          <Button
            title={"立即体验"}
            buttonStyle={Styles.tryButtonStyle}
            titleStyle={Styles.tryTitleStyle}
            type="outline"
          />
        </View>
      </MainView>
    )
  }

}

export default LoginView
