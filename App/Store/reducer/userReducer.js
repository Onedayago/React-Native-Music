import actionTypes from '../actionTypes'
import {fromJS} from 'immutable'

const defaultState = fromJS({ // 将对象转成immutable对象
  user: {}
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.Login:
      return state.merge({
        user: action.data
      })

  }
  return state
}
