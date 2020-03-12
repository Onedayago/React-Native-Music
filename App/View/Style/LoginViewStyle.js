import {Dimensions} from 'react-native'

const winW = Dimensions.get('window').width
const winH = Dimensions.get('window').height


export default getStyle = function () {

  return {
    container:{
      backgroundColor: 'red'
    },

    topView:{
      height: winH*0.5,
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
    },

    centerView:{
      height: winH*0.2,
    },

    bottomView:{
      height: winH*0.3,
      alignItems: 'center'
    },

    loginButtonStyle:{
      width: winW*0.8,
      height: 40,
      borderRadius: 40,
      backgroundColor: 'white',
    },

    loginTitleStyle: {
      color: 'red',
      fontSize: 16
    },

    tryButtonStyle:{
      width: winW*0.8,
      height: 40,
      borderRadius: 40,
      backgroundColor: 'red',
      borderColor: 'white',
      marginTop: 20
    },

    tryTitleStyle:{
      color: 'white',
      fontSize: 16
    },
  }

}
