import { createSelector } from "@ngrx/store";
import { StoreState } from "./global-store";

export const counterSelector = (state: StoreState) => state.counter;

export const selectCount = createSelector(counterSelector, (state) => state.count)