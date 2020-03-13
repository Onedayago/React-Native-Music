import {Dimensions} from 'react-native'

const winW = Dimensions.get('window').width
const winH = Dimensions.get('window').height

export default getStyle = function () {

  return{
    container: {
      width: (winW-10)/3,
      alignItems: 'flex-start',
      marginTop: 10,
    },

    imgBox: {
      width: (winW-10)/3-10,
      height: (winW-10)/3-10,
    },

    text: {
      marginVertical: 10,
      fontSize: 12,
      marginRight: 10
    }
  }
}
