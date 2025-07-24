import { createReducer, on } from "@ngrx/store";
import { add, reset, subtract } from "./actions";

export interface CounterState {
    count: number
}

export const initialState: CounterState = {
    count: 0
}

// The actions are created in the action.ts file
// After this, the data will be stored in the global store
export const counterReducer = createReducer(initialState,
    on(add, (state) => ({ ...state, count: state.count + 1 })),
    on(subtract, (state) => ({ ...state, count: state.count - 1 })),
    on(reset, (state) => ({ ...state, count: 0 })),
)