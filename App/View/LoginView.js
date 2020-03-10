import React from 'react'
import MainView from '../Component/MainView'
import getStyle from './Style/LoginViewStyle'
import {Text} from 'react-native'
let Styles = {}

class LoginView extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    Styles = getStyle()
    return(
      <MainView style={Styles.container}>

      </MainView>
    )
  }

}

export default LoginView
