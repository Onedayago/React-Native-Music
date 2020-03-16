import React from 'react'
import {ScrollView, Text, View} from "react-native";
import getStyle from './Style/VideoViewStyle'
import ApiUtil from '../Service/ApiUtil'
import VideoComponent from '../Component/VideoComponent'
import SongBox from "../Component/SongBox";
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";

let Styles = {}

class VideoView extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      videoList: []
    }
  }

  async componentWillMount(): void {
    try {
      const result = await ApiUtil.request('getVideoList',{id: this.props.id})
      if (result.data.code === 200) {
        this.setState({
          videoList: result.data.datas.slice(0,1)
        })
      } else {

      }
    } catch {

    }
  }

  render(){
    Styles = getStyle()
    return(
      <View style={{flex: 1}}>
        {
          this.state.videoList.length!==0&&
          <ScrollView
          >
            {
              this.state.videoList.map((item, index)=>{
                return <VideoComponent id={item.data.vid} key={index}/>
              })
            }
          </ScrollView>
        }
      </View>
    )
  }

}

export default VideoView
