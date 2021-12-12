import { ActionTypes } from "../actions"

type InitialStateType = typeof initialState


const initialState = {
  bills: {
    "5000": 100,
    "2000": 400,
    "1000": 1000,
    "500": 3000,
    "200": 5000,
    "100": 8000,
    "50": 10000
  }
}



export const cashReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
  switch (action.type) {
      //  case 'APP/SET-STATUS':
      //      return {...state, status: action.status}
      //  case 'APP/SET-ERROR':
      //      return {...state, error: action.error}
      default:
          return state
  }
}


