import {applyMiddleware, createStore, compose} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import Reactotron from '../Config/ReactotronConfig'
import UserReducer from './reducer/userReducer'
import ThemeReducer from './reducer/themeReducer'
import AsyncStorage from '@react-native-community/async-storage';
import immutableTransform from "redux-persist-transform-immutable";


const persistConfig = {
  transforms: [
    immutableTransform()
  ],
  key: 'root',
  storage: AsyncStorage,
}

const reducer =  combineReducers ({
  UserReducer: UserReducer,
  ThemeReducer: ThemeReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)


export default function configureStore() {
  const enhancers = compose(
    applyMiddleware(thunkMiddleware), Reactotron.createEnhancer()
  );
  const store = createStore(persistedReducer, enhancers)

  let persistor = persistStore(store)

  return {store, persistor}
}
