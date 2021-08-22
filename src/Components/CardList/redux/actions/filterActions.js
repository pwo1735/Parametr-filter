import { ActionTypes } from "../constans/actionTypes"

export const setSquare = (value) => {
	return {
		type: ActionTypes.SET_SQUARE,
		payload: value
	}
}
export const setFloor = (value) => {
	return {
		type: ActionTypes.SET_FLOOR,
		payload: value
	}
}
export const setPrice = (value) => {
	return {
		type: ActionTypes.SET_PRICE,
		payload: value
	}
}

export const setRooms = (value) => {
	return {
		type: ActionTypes.SET_ROOMS,
		payload: value
	}
}
export const setDecor = (value) => {
	return {
		type: ActionTypes.SET_DECOR,
		payload: value
	}
}