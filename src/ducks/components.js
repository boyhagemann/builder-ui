import { ajax } from 'rxjs/observable/dom/ajax';
import 'rxjs'

// Actions
const FETCH_COMPONENTS = 'component.list'
const FETCH_COMPONENTS_SUCCESS = 'component.list.success'

// Reducer
export default (state = { loading: false, components: [] }, action) => {

  switch (action.type) {

    case FETCH_COMPONENTS:
      return { ...state, loading: true }

    case FETCH_COMPONENTS_SUCCESS:
      return { loading: false, components: action.payload }

    default:
      return state

  }

}

// Action creators
export const fetchComponents = () => ({type: FETCH_COMPONENTS })
export const fetchComponentsFulfilled = payload => ({ type: FETCH_COMPONENTS_SUCCESS, payload })

// Epics
export const fetchComponentsEpic = (action$, store) =>

  action$.ofType(FETCH_COMPONENTS)
    .switchMap( action =>
      ajax({url: 'http://localhost/storage-api/public/component'})
        .map( result => {
          return fetchComponentsFulfilled(result.response)
        })
    )
