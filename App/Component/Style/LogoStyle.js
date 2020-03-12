

export default getStyle = function () {
  return{
    container:{
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    circle:{
      width: 50,
      height: 50,
      borderWidth: 1,
      borderColor: 'white',
      opacity: 0.2,
      position: 'absolute',
    },
    logo:{
      width: 50,
      height: 50,
      borderRadius: 25,
    },
  }
}
