
import {Dimensions} from 'react-native'

const winW = Dimensions.get('window').width
const winH = Dimensions.get('window').height


export default getStyle = function () {

  return{

    container: {
      width: winW*0.8,
      height: winH,
    },
    backImage: {
      width: winW*0.8,
      height: 100,
    },

    contentContainer: {
      width: winW*0.8,
      height: winH,
      backgroundColor: 'red'
    },
  }
}
