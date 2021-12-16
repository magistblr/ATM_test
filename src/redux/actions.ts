import { billsType, issuedType } from "./reducers/cashReducer";

export const changeBillsRestart = (bills: billsType) => ({ type: 'cashReducer/CHANGE_BILLS_RESTART', bills} as const);
export const changeBills = (bills: billsType) => ({ type: 'cashReducer/CHANGE_BILLS', bills} as const);
export const changeInput = (input: string) => ({ type: 'cashReducer/CHANGE_INPUT', input} as const);
export const changeInputNumPad = (input: string) => ({ type: 'cashReducer/CHANGE_INPUT_NUMPAD', input} as const);
export const changeError = (error: boolean) => ({ type: 'cashReducer/CHANGE_ERROR', error} as const);
export const changeIssued = (issued: issuedType) => ({ type: 'cashReducer/CHANGE_ISSUED', issued} as const);
export const changeQuery = (query: string) => ({ type: 'cashReducer/CHANGE_QUERY', query} as const);

export type ActionTypes =
        | ReturnType<typeof changeBillsRestart>
        | ReturnType<typeof changeInput>
        | ReturnType<typeof changeInputNumPad>
        | ReturnType<typeof changeError>
        | ReturnType<typeof changeIssued>
        | ReturnType<typeof changeQuery>
        | ReturnType<typeof changeBills>
