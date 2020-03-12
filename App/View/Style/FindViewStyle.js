import {Dimensions} from 'react-native'

const winW = Dimensions.get('window').width
const winH = Dimensions.get('window').height


export default getStyle = function () {

  return{
    imgContainer: {
      height: 150,
      marginHorizontal: 10
    },

    imgBox: {
      width: winW-20,
      height: 150,
      borderRadius: 20
    },

    topContainer:{
      width: winW -20,
      marginHorizontal: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 10
    },

    topItem: {
      width: (winW-20)/6,
      alignItems: 'center'
    },

    topIcon:{
      backgroundColor: 'red',
      width: 40 ,
      height: 40,
      borderRadius: 40,
      alignItems: 'center',
      marginBottom: 5,
      flexDirection: 'column',
      justifyContent: 'center'
    },

    topText: {
      fontSize: 12
    }
  }
}
