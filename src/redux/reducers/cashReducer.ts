import { ActionTypes } from "../actions"

export type cashReducerType = typeof initialState


const initialState = {
  bills: {
    "5000": 100,
    "2000": 400,
    "1000": 1000,
    "500": 3000,
    "200": 5000,
    "100": 8000,
    "50": 10000
  },
  text: "Добро пожаловать",
  balance: 0,
}



export const cashReducer = (state: cashReducerType = initialState, action: ActionTypes): cashReducerType => {
  switch (action.type) {
       case 'cashReducer/CHANGE_BALANCE_MAKE':
           return {...state, balance: state.balance + action.balance}
       case 'cashReducer/CHANGE_BALANCE_GET':
           return {...state, balance: state.balance - action.balance}
      //  case 'APP/SET-ERROR':
      //      return {...state, error: action.error}
      default:
          return state
  }
}


