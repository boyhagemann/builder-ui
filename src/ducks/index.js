import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'
import { routerReducer } from 'react-router-redux'

import {default as components} from './components'
import { fetchComponentsEpic } from './components'

import {default as component} from './component'
import { fetchComponentEpic } from './component'

export const reducers = combineReducers({
  components,
  component,
  router: routerReducer
})

export const epics = combineEpics(
  fetchComponentsEpic,
  fetchComponentEpic
)
