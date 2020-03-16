import {Platform} from 'react-native'

const config = {
  baseURL: Platform.OS === "ios"?'http://localhost:3000':'http://10.0.2.2:3000'
}


export default config;
