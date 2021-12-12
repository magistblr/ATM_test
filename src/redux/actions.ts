import { cashReducer } from './reducers/cashReducer';


export const action1 = (value: any) => ({ type: 'cashReducer/NEW_ARRAY_CARDS'} as const);

export type ActionTypes =
        | ReturnType<typeof action1>
