import { ajax } from 'rxjs/observable/dom/ajax';
import 'rxjs'

// Actions
const FETCH_COMPONENT = 'fetch.component'
const FETCH_COMPONENT_SUCCESS = 'fetch.component.success'

// Reducer
export default (state = { loading: false, component: {} }, action) => {

  switch (action.type) {

    case FETCH_COMPONENT:
      return { ...state, loading: true }

    case FETCH_COMPONENT_SUCCESS:
      return { loading: false, component: action.payload }

    default:
      return state

  }

}

// Action creators
export const fetchComponent = id => ({type: FETCH_COMPONENT, payload: {id} })
export const fetchComponentFulfilled = payload => ({ type: FETCH_COMPONENT_SUCCESS, payload })

// Epics
export const fetchComponentEpic = (action$, store) =>

  action$.ofType(FETCH_COMPONENT)
    .switchMap( action =>
      ajax({url: 'http://localhost/storage-api/public/component/' + action.payload.id})
        .map( result => {
          return fetchComponentFulfilled(result.response)
        })
    )
