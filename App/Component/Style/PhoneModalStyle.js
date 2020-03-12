import {Dimensions} from 'react-native'

const winW = Dimensions.get('window').width
const winH = Dimensions.get('window').height

export default getStyle = function () {

  return{
    container: {
      backgroundColor: 'gray',
      flex: 1,
      opacity: 0.5
    },

    contentContainer: {
      backgroundColor: 'white',
      width: winW,
      height: winH,
      position: 'absolute',
      borderRadius: 20,
      paddingHorizontal: 10
    },

    list: {
      marginRight: 20,
      marginTop: 20,
      marginBottom: 60
    },

    itemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 10
    },

    itemHeader: {
      backgroundColor: 'white'
    },

    text: {
      fontSize: 16,
      marginLeft: 10
    },

    top: {
      flexDirection: 'row',
      marginTop: 20
    }
  }
}
