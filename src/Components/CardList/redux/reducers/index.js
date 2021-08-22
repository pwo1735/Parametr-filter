import {combineReducers } from 'redux'
import { cardReducer } from './cardReducer'
import {filterReducer} from "./filterReducer";

const reducers = combineReducers ({
    allCards: cardReducer,
    filter: filterReducer
})

export default reducers