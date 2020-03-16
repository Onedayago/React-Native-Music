
import React from 'react'
import {View} from "react-native";
import ApiUtil from '../Service/ApiUtil'
import Video from 'react-native-video';
import Img from '../Img/Image'
import {Button} from "react-native-elements";

class VideoComponent extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      url: ''
    }
  }

  async componentWillMount(): void {
    try {
      const result = await ApiUtil.request('getVideoUrl',{id: this.props.id})
      if(result.data.code === 200){
        this.setState({
          url: (result.data.urls[0]).url
        })
      }else{

      }
    } catch {

    }
  }

  render(){
    return(
      <View style={{marginTop: 10, height: 200}}>
        {/*{*/}
        {/*  this.state.url !== ""&&*/}
        {/*  <Video*/}
        {/*    controls={true}*/}
        {/*    logo={Img.logo}*/}
        {/*    source={{uri: this.state.url}}*/}
        {/*    style={{height: 200, width: 400}}*/}
        {/*    paused={true}*/}
        {/*    fullscreen={false}*/}
        {/*    fullscreenOrientation={'landscape'}*/}
        {/*    resizeMode={'contain'}*/}
        {/*  >*/}

        {/*  </Video>*/}
        {/*}*/}

      </View>
    )
  }

}

export default VideoComponent
