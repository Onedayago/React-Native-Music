import {Dimensions} from 'react-native'

const winW = Dimensions.get('window').width
const winH = Dimensions.get('window').height


export default getStyle = function () {

  return{
    contentContainer: {
      paddingLeft: 10,
    },

    columnWrapperStyle: {

    }
  }
}
