import { ajax } from 'rxjs/observable/dom/ajax';
import 'rxjs'
import querystring from 'querystring'

// Actions
const SET_QUERY = 'fetch.components.query'
const FETCH_COMPONENTS = 'fetch.components'
const FETCH_COMPONENTS_SUCCESS = 'fetch.components.success'

// Reducer
export default (state = { loading: false, components: [], params: { q: ""} }, action) => {

  switch (action.type) {

    case SET_QUERY:
      return {...state, params: {...state.params, q: action.payload}}

    case FETCH_COMPONENTS:
      return { ...state, loading: true }

    case FETCH_COMPONENTS_SUCCESS:
      return { ...state, loading: false, components: action.payload }

    default:
      return state

  }

}

// Action creators
export const updateQuery = q => ({type: SET_QUERY, payload: q })
export const fetchComponents = () => ({type: FETCH_COMPONENTS })
export const fetchComponentsFulfilled = payload => ({ type: FETCH_COMPONENTS_SUCCESS, payload })

// Epics
export const fetchComponentsEpic = (action$, store) =>
  action$.ofType(FETCH_COMPONENTS)
    .switchMap( action =>
      ajax({url: 'http://localhost/storage-api/public/component?' + querystring.stringify( store.getState().components.params )})
        .map( result => {
          return fetchComponentsFulfilled(result.response)
        })
    )

export const fetchComponentsOnQueryChangeEpic = (action$, store) =>
  action$.ofType(SET_QUERY)
      .throttleTime(500)
      .debounceTime(50)
      .map( result => fetchComponents())
