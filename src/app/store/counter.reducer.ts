import { Action, createReducer, on } from "@ngrx/store";
// import { CounterActions, INCREMENT, IncrementAction } from "./counter.actions";
import { increment } from "./counter.actions";

//this initialState pot ser un objecte, un string, un boolean, un number...
const initialState = 0;

export const counterReducer = createReducer(
    initialState,
    //Important: sempre crear un objecte nou, no fer mutate
    on(increment, (state, action) => state + action.value)
);

//Alternative to use (under the hood creates the same):
//S'executarà al inici i quan s'executi una acció
// export function counterReducer(state = initialState, action: CounterActions | Action) {
//     if (action.type === INCREMENT){
//         return state + (action as IncrementAction).value;
//     }
//     return state;
// }