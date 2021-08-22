import { ActionTypes } from "../constans/actionTypes"
export const setCards = (cards) => {
    return {
        type: ActionTypes.SET_CARDS,
        payload: cards
    }
}

