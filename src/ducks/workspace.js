
// Actions
const WORKSPACE_SET = 'workspace.set'
const WORKSPACE_UPDATE = 'workspace.update'

// Reducer
export default (state = {}, action) => {

  switch (action.type) {

    case WORKSPACE_SET:
      console.log(action)
      return action.payload

    case WORKSPACE_UPDATE:
      console.log(action)
      return {
        ...state,
        [action.payload.name]: action.payload.value
      }

    default:
      return state
  }

}

// Action creators
export const updateWorkspace = (name, value) => ({ type: WORKSPACE_UPDATE, payload: { name, value } })
export const setWorkspace = values => ({ type: WORKSPACE_SET, payload: values })
