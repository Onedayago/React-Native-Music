import {Dimensions} from 'react-native'

const winW = Dimensions.get('window').width
const winH = Dimensions.get('window').height


export default getStyle = function () {

  return{
    headerContainer: {
      backgroundColor: 'white'
    }
  }
}


