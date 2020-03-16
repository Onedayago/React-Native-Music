import React from 'react'
import {FlatList, Text, View} from "react-native";
import getStyle from './Style/SongPlayListStyle'
import ApiUtil from '../Service/ApiUtil'
import SongBox from '../Component/SongBox'

let Styles = {}
class SongPlayList extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      playLists: []
    }
  }

  async componentWillMount(): void {
    try {
      const result = await ApiUtil.request('getPlayList',{before: 0, cat: this.props.cat, limit: 50})
      if(result.data.code === 200){
        this.setState({
          playLists: result.data.playlists
        })
      }else{

      }
    } catch {

    }
  }

  renderItem=({item})=>{
    return(
      <SongBox item={item}/>
    )
  }

  render(){
    Styles = getStyle()
    return(
      <View>
        <FlatList
          columnWrapperStyle={Styles.columnWrapperStyle}
          contentContainerStyle={Styles.contentContainer}
          numColumns={3}
          data={this.state.playLists}
          renderItem={this.renderItem}
          keyExtractor={(item, index)=>item.id.toString()}
        />
      </View>

    )
  }

}

export default SongPlayList
