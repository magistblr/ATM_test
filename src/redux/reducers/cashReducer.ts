import { ActionTypes } from "../actions"

export type cashReducerType = {
  bills: billsType
  text: string
  balance: number
  input: string
  error: boolean
}

export type billsType = {
  "200": number
  "100": number
  "5000":number
  "2000":number
  "1000":number
  "500": number
  "50": number
}


const initialState: cashReducerType = {
  bills: {
    "200": 4000, //800 000
    "100": 8000, //800 000
    "5000": 100, //500 000
    "2000": 250, //500 000
    "1000": 500, //500 000
    "500": 1000, //500 000
    "50": 10000 //500 000
  },
  text: "Добро пожаловать",
  input: "",
  balance: 0,
  error: false
}

export const cashReducer = (state: cashReducerType = initialState, action: ActionTypes): cashReducerType => {
  switch (action.type) {
      case 'cashReducer/CHANGE_BALANCE_GET':
          return {...state, balance: state.balance - action.balance}
      case 'cashReducer/CHANGE_INPUT':
          return {...state, input: action.input}
      case 'cashReducer/CHANGE_INPUT_NUMPAD':
          return {...state, input: state.input + action.input}
      case 'cashReducer/CHANGE_ERROR':
          return {...state, error: action.error}
      default:
          return state
  }
}


