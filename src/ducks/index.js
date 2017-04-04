import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'
import { routerReducer } from 'react-router-redux'

import {default as components} from './components'
import { fetchComponentsEpic, fetchComponentsOnQueryChangeEpic } from './components'

import {default as component} from './component'
import { fetchComponentEpic, fetchDependenciesEpic, createComponentEpic } from './component'

import {default as workspace} from './workspace'

export const reducers = combineReducers({
  components,
  workspace,
  componentWorkspace: component,
  router: routerReducer
})

export const epics = combineEpics(
  fetchComponentsEpic,
  fetchDependenciesEpic,
  fetchComponentsOnQueryChangeEpic,
  fetchComponentEpic,
  createComponentEpic
)
