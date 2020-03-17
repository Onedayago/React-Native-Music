import React from 'react'
import {View} from "react-native";
import {Header, Icon} from "react-native-elements";
import getStyle from './Style/LiveStyle'



let Styles = {}
class LiveView extends React.Component{
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
        <Header
          containerStyle={Styles.headerContainer}
          placement="left"
          leftComponent={
            <Icon
              name='arrowleft'
              type='antdesign'
              color='black'
              onPress={() =>{
                this.props.navigation.goBack()
              }}
            />
          }
          centerComponent={{ text: '直播', style: { color: 'black', fontSize: 16 } }}
        />
      </View>

    )
  }

}

export default LiveView
