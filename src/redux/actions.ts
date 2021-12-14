
export const changeBalanceGet = (balance: number) => ({ type: 'cashReducer/CHANGE_BALANCE_GET', balance} as const);
export const changeInput = (input: string) => ({ type: 'cashReducer/CHANGE_INPUT', input} as const);
export const changeInputNumPad = (input: string) => ({ type: 'cashReducer/CHANGE_INPUT_NUMPAD', input} as const);
export const changeError = (error: boolean) => ({ type: 'cashReducer/CHANGE_ERROR', error} as const);

export type ActionTypes =
        | ReturnType<typeof changeBalanceGet>
        | ReturnType<typeof changeInput>
        | ReturnType<typeof changeInputNumPad>
        | ReturnType<typeof changeError>
