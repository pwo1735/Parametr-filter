import { ActionTypes } from "../constans/actionTypes"
const initialState = {
    cards:[]
}
export const cardReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_CARDS:
            return {...state, cards: payload}


        default:
            return state
    }
}