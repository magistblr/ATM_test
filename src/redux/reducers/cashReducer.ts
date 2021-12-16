import { ActionTypes } from "../actions"

export type cashReducerType = {
  bills: billsType
  input: string
  error: boolean
  issued: issuedType
  notIssued: issuedType
  query: string
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

export type issuedType = {
  "200"?: number
  "100"?: number
  "5000"?:number
  "2000"?:number
  "1000"?:number
  "500"?: number
  "50"?: number
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
  issued: {},
  notIssued: {},
  input: "",
  error: false,
  query: ""
}

export const cashReducer = (state: cashReducerType = initialState, action: ActionTypes): cashReducerType => {
  switch (action.type) {
      case 'cashReducer/CHANGE_BILLS_RESTART':
          return {...state, bills: {...state.bills, ...action.bills}, issued: {}, input: "", error: false}
      case 'cashReducer/CHANGE_BILLS':
          return {...state, bills: {...state.bills, ...action.bills}}
      case 'cashReducer/CHANGE_INPUT':
          return {...state, input: action.input}
      case 'cashReducer/CHANGE_INPUT_NUMPAD':
          return {...state, input: state.input + action.input}
      case 'cashReducer/CHANGE_ERROR':
          return {...state, error: action.error}
      case 'cashReducer/CHANGE_ISSUED':
          return {...state, issued: {...action.issued}}
      case 'cashReducer/CHANGE_QUERY':
          return {...state, query: action.query}
      default:
          return state
  }
}


