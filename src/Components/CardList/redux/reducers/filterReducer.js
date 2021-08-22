import { ActionTypes } from "../constans/actionTypes"
const initialState = {
	square: [44, 129],
	floor: [1, 15],
	price: [12491, 50000],
	rooms: [],
	decor: false


}
export const filterReducer = (state = initialState, {type, payload}) => {
	switch (type) {
		case ActionTypes.SET_SQUARE:
			return {...state, square: payload}
		case ActionTypes.SET_FLOOR:
			return {...state, floor: payload}
		case ActionTypes.SET_PRICE:
			return {...state, price: payload}
		case ActionTypes.SET_ROOMS:
			if (state.rooms.length===0 || state.rooms.includes(payload)===false )
			{
				return { ...state, rooms: [...state.rooms, payload]}

			} else if (state.rooms.includes(payload) )
				state.rooms.splice(state.rooms.indexOf(payload), 1)
				return { ...state, rooms: [...state.rooms]}


		case ActionTypes.SET_DECOR:
			return {...state, decor: !state.decor}



		default:
			return state
	}
}