import React from 'react'
import {ImageBackground, View, TouchableOpacity, Text, ScrollView} from "react-native";
import {Header, Icon, Slider} from "react-native-elements";
import getStyle from './Style/PlaySongStyle'
import Img from '../Img/Image'
import Sound from 'react-native-sound'
import ApiUtil from '../Service/ApiUtil'
import {secondsFormat} from '../Util/Tool'
import Lyric from 'lyric-parser'

let Styles = {}

class PlaySongView extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      play: true,
      id: this.props.navigation.getParam('id'),  //音乐 id
      title: this.props.navigation.getParam('title'),
      progress: 0,
      duration: 0,
      seconds: 0,
      lyric: [],
      lineNum: 0,
      lyricHeight: 35
    }

  }

  async componentWillMount(): void {

    //根据音乐 id 获取音乐 url
    try{

      const result1 = await ApiUtil.request('getLyric',{id: this.state.id})
      if(result1.data.code === 200){
        this.lyric = new Lyric(result1.data.lrc.lyric, this.handler)
        this.setState({
          lyric: this.lyric.lines
        })

      }else{

      }

      const result2 = await ApiUtil.request('getUrl', {id: this.state.id})
      if(result2.data.code === 200){
        this.song = new Sound(result2.data.data[0].url, null, (error) => {
          if (error) {
            console.tron.log('failed to load the sound', error);
            return;
          }

          this.setState({
            duration: this.song.getDuration()
          })


          //使用定时器去刷新进度
          this.time = setInterval(()=>{
            this.freshProgress()
          }, 10)

          this.song.play((success)=>{
            if (success) {
              console.tron.log('successfully finished playing');
              this.setState({
                progress: 0,
                play: false
              })
            } else {
              console.tron.log('playback failed due to audio decoding errors');
            }
          })
          this.lyric.play()

        });
      }else{

      }
    }catch {

    }

  }

  componentWillUnmount(): void {
    this.song.release()
    this.lyric.stop()
    clearInterval(this.time)

  }

  //歌词滚动处理
  handler=({lineNum, txt})=>{
    this.setState({
      lineNum
    })

    this.scrollView.scrollTo({
      y: this.state.lyricHeight * lineNum,
      animated: true
    })
  }

  //刷新进度
  freshProgress=()=>{
    this.song.getCurrentTime((seconds)=>{
      this.setState({
        seconds
      })
    })
  }


  slideStart=()=>{
    clearInterval(this.time)
  }

  changeSeconds=(progress)=>{
    this.setState({
      progress
    })
    let seconds = Math.floor((progress/100)*this.state.duration)
    this.setState({
      seconds
    })
  }

  //TODO 进度条滑动到最后时
  changeProgress=()=>{

    if(this.state.seconds >= this.state.duration -10){

    }else{
      this.song.setCurrentTime(this.state.seconds)
      this.lyric.seek(this.state.seconds*1000)
    }


    //使用定时器去刷新进度
    this.time = setInterval(()=>{
      this.freshProgress()
    }, 10)
  }

  //暂停
  pause=()=>{
    this.song.pause()
  }

  //播放
  play=()=>{
    this.song.play()
  }

  render(){
    Styles = getStyle()
    return(
      <ImageBackground style={Styles.container} source={Img.back}>

        {/*头部*/}
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
          centerComponent={{ text: this.state.title, style: { color: 'black', fontSize: 16 } }}
        />
        <View style={Styles.contentContainer}>

          {/*歌词显示*/}
          <View style={Styles.topView}>
            {
              this.state.lyric.length !==0 &&
                <ScrollView ref={(ref)=>this.scrollView=ref}>
                  {/*占位*/}
                  <View style={Styles.blockView}/>
                  {
                    this.state.lyric.map((item, index)=>{
                      return(
                        <Text key={index} style={[Styles.lyricText, this.state.lineNum === index ? Styles.lyricTextActive: Styles.lyricTextNormal]}>
                          {item.txt}
                        </Text>
                      )
                    })
                  }
                  {/*占位*/}
                  <View style={Styles.blockView}/>
                </ScrollView>
            }
          </View>

          {/*底部工具*/}
          <View style={Styles.bottomView}>
            <View></View>
            <View style={Styles.bottomView_center}>
              <Text style={Styles.timeText}>{secondsFormat(this.state.seconds)}</Text>
              <Slider
                maximumValue={100}
                step={1}
                style={Styles.slideContainer}
                value={this.state.progress}
                onValueChange={this.changeSeconds}
                onSlidingComplete={this.changeProgress}
                onSlidingStart={this.slideStart}
              />
              <Text style={Styles.timeText}>{secondsFormat(this.state.duration)}</Text>
            </View>
            <View style={Styles.bottomView_bottom}>
              <Icon
                name='loop'
                type='entypo'
                color='white'
                onPress={() =>{
                  this.props.navigation.goBack()
                }}
              />
              <Icon
                name='stepbackward'
                type='antdesign'
                color='white'
                onPress={() =>{
                  this.props.navigation.goBack()
                }}
              />

              {/*播放控制按钮*/}
              <TouchableOpacity onPress={()=>{
                this.setState({
                  play: !this.state.play
                },()=>{
                  if(this.state.play){
                    this.play()
                  }else{
                    this.pause()
                  }
                  this.lyric.togglePlay()
                })
              }}>
                <Icon
                  name={this.state.play?'play':'pausecircle'}
                  type='antdesign'
                  color='white'
                />
              </TouchableOpacity>

              <Icon
                name='stepforward'
                type='antdesign'
                color='white'
                onPress={() =>{
                  this.props.navigation.goBack()
                }}
              />
              <Icon
                name='menufold'
                type='antdesign'
                color='white'
                onPress={() =>{
                  this.props.navigation.goBack()
                }}
              />
            </View>
          </View>
        </View>

      </ImageBackground>
    )
  }

}

export default PlaySongView
