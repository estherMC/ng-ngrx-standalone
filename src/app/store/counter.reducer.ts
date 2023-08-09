import { createReducer, on } from "@ngrx/store";
import { increment } from "./counter.actions";

//this initialState pot ser un objecte, un string, un boolean, un number...
const initialState = 0;

export const counterReducer = createReducer(
    initialState,
    //Important: sempre crear un objecte nou, no fer mutate
    on(increment, (state) => state + 1)
);

//Alternative to use (under the hood creates the same):
//S'executarà al inici i quan s'executi una acció
// export function counterReducer(state = initialState) {
//     return state;
// }