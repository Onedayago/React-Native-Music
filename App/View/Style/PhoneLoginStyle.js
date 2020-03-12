import {Dimensions} from 'react-native'

const winW = Dimensions.get('window').width
const winH = Dimensions.get('window').height

export default getStyle = function () {

  return{
    headerContainer: {
      backgroundColor: 'white'
    },

    tip: {
      fontSize: 12,
      paddingHorizontal: 10,
      color: 'gray',
      marginVertical: 20,
    },

    nextButtonStyle:{
      marginHorizontal: 10,
      height: 40,
      borderRadius: 40,
      backgroundColor: 'red',
      marginTop: 40
    },

    nextTitleStyle: {
      color: 'white',
      fontSize: 16
    },

  }
}
