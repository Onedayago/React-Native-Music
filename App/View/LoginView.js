import React from 'react'
import MainView from '../Component/MainView'
import getStyle from './Style/LoginViewStyle'
import {View} from 'react-native'
import { Button} from 'react-native-elements';
import Logo from '../Component/Logo'

let Styles = {}

class LoginView extends React.Component{
  constructor(props) {
    super(props);
    this.state={

    }
  }

  componentDidMount(): void {

  }

  render(){
    Styles = getStyle()

    const {navigate} = this.props.navigation

    return(
      <MainView style={Styles.container}>
        <View style={Styles.topView}>
          <Logo/>
        </View>
        <View style={Styles.centerView}/>
        <View style={Styles.bottomView}>
          <Button
            title={"手机号登录"}
            buttonStyle={Styles.loginButtonStyle}
            titleStyle={Styles.loginTitleStyle}
            onPress={()=>{
              navigate('PhoneLogin')
            }}
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
