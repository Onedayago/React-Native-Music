import {Dimensions} from 'react-native'

const winW = Dimensions.get('window').width
const winH = Dimensions.get('window').height


export default getStyle = function () {

  return{
    container:{
      width: winW,
      height: winH,
      paddingTop: 70
    },
    activeText: {
      color: 'black',
      fontSize: 18
    },

    normalText: {
      color: 'gray',
      fontSize: 16
    }
  }
}
