import { CounterState } from "./reducer";

// Here the Counter's state is stored in the StoreState->counter interface
export interface StoreState {
    counter: CounterState
} 