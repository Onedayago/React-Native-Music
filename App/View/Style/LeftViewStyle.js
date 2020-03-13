
import {Dimensions} from 'react-native'

const winW = Dimensions.get('window').width
const winH = Dimensions.get('window').height


export default getStyle = function () {

  return{

    container: {
      width: winW*0.8,
      height: winH-40,
    },
    backImage: {
      width: winW*0.8,
      height: 100,
    },

    contentContainer: {
      width: winW*0.8,
      backgroundColor: 'white',
      paddingHorizontal: 10,
      borderRadius: 20,
      paddingTop: 5,
      marginTop: -20,
    },

    bottomView: {
      width: winW*0.8,
      height: 40,
      flexDirection: 'row',
      paddingHorizontal: 23,
      justifyContent: 'space-between'
    }
  }
}
