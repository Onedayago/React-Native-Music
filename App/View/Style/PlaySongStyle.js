import {Dimensions} from 'react-native'

const winW = Dimensions.get('window').width
const winH = Dimensions.get('window').height


export default getStyle = function () {

  return{
    container:{
      width: winW,
      height: winH
    },
    headerContainer: {
      backgroundColor: 'white',
      opacity: 0.2
    },

    contentContainer:{

    },

    topView: {
      width: winW,
      height: winH*0.8 -100,
    },

    bottomView: {
      width: winW,
      height: winH*0.2,
    },

    bottomView_center:{
      marginHorizontal: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },

    bottomView_bottom:{
      flexDirection: 'row',
      marginHorizontal: 60,
      justifyContent: 'space-between'
    },

    slideContainer:{
      width: winW-130
    },

    timeText: {
      fontSize: 12,
      color: 'white'
    },

    blockView: {
      width: winW,
      height: (winH*0.8-200)/2,
    },

    lyricText: {
      width: winW,
      color: 'white',
      marginTop: 20,
      textAlign: 'center',
      fontSize: 15
    },

    lyricTextActive: {
      color: 'white'
    },

    lyricTextNormal: {
      color: 'gray'
    }
  }
}


