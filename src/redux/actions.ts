
export const changeBalanceMake = (balance: number) => ({ type: 'cashReducer/CHANGE_BALANCE_MAKE', balance} as const);
export const changeBalanceGet = (balance: number) => ({ type: 'cashReducer/CHANGE_BALANCE_GET', balance} as const);

export type ActionTypes =
        | ReturnType<typeof changeBalanceMake>
        | ReturnType<typeof changeBalanceGet>
