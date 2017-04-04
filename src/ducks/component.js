import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs'
import uuidV4 from 'uuid/v4'

// Actions
const FETCH_COMPONENT = 'fetch.component'
const FETCH_COMPONENT_SUCCESS = 'fetch.component.success'
const FETCH_DEPENDENCIES = 'fetch.dependencies'
const FETCH_DEPENDENCIES_SUCCESS = 'fetch.dependencies.success'

const CREATE_COMPONENT_SET = 'create.component.set'
const CREATE_COMPONENT = 'create.component'
const CREATE_COMPONENT_SUCCESS = 'create.component.success'
const CREATE_COMPONENT_FAILURE = 'create.component.failure'

// Reducer
export default (state = { loading: false, components: {} }, action) => {

  switch (action.type) {

    case FETCH_COMPONENT:
      return { ...state, loading: true }

    case FETCH_COMPONENT_SUCCESS:
      const components = { ...state.components, [action.payload._id]: action.payload }
      return { ...state, components}

    case FETCH_DEPENDENCIES:
      return { ...state, loading: true }

    case FETCH_DEPENDENCIES_SUCCESS:

      // Group the components by _id, for easy lookup
      const keyed = action.payload.reduce( (components, component) => {
        return {...components, [component._id]: component}
      }, {} )

      return {
        loading: false,
        components: { ...state.components, ...keyed }
      }

    case CREATE_COMPONENT_SUCCESS:
      return state

    case CREATE_COMPONENT_FAILURE:
      console.log(action.payload)
      return state

    default:
      return state

  }

}

// Action creators
export const fetchComponent = id => ({type: FETCH_COMPONENT, payload: {id} })
export const fetchComponentFulfilled = payload => ({ type: FETCH_COMPONENT_SUCCESS, payload })

export const fetchDependencies = payload => ({ type: FETCH_DEPENDENCIES, payload })
export const fetchDependenciesFullfilled = payload => ({ type: FETCH_DEPENDENCIES_SUCCESS, payload })

export const createComponent = ({ type: CREATE_COMPONENT, payload: { } })
export const createComponentSuccess = response => ({ type: CREATE_COMPONENT_SUCCESS, payload: response })
export const createComponentFailure = response => ({ type: CREATE_COMPONENT_FAILURE, payload: response })



// Epics
export const fetchComponentEpic = (action$, store) =>

  action$.ofType(FETCH_COMPONENT)
    .switchMap( action =>
      ajax({
        url: 'http://localhost/storage-api/public/component/' + action.payload.id
      })
        .map( result => {
          return fetchComponentFulfilled(result.response)
        })
    )


export const fetchDependenciesEpic = (action$, store) =>

  action$.ofType(FETCH_COMPONENT_SUCCESS)
    .switchMap( action =>
      ajax({
        url: 'http://localhost/storage-api/public/component?and[0][field]=_id' + action.payload.uses
          .map( use => '&and[0][value][]=' + use)
          .join('')
      })
        .map( result => {
          return fetchDependenciesFullfilled(result.response)
        })
    )


export const createComponentEpic = (action$, store) =>

  action$.ofType(CREATE_COMPONENT)
    .map( action => {
      return { ...action, payload: store.getState().workspace }
    })
    .switchMap( action =>
      ajax({
        url: 'http://localhost/storage-api/public/component/' + uuidV4(),
        method: 'POST',
        data: action.payload
      })
      .catch( error => Observable.of(
        createComponentFailure(error.xhr.response)
      ))
      .map( result => {
        console.log(result)
        return createComponentSuccess(result.response)
      })
    )
