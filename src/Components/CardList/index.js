import React from 'react'
import Card from './Card'
import './style.scss'
import Filter from "./Filter"
import { useSelector } from 'react-redux'
import {createSelector} from "reselect";
import data from "./data";
const selectFilter = createSelector(
    (state) => state.filter,
    (cards) => {
        let filteredCards =[]
        filteredCards = data.filter ( card => (card.square<=cards.square[1] && card.square>=cards.square[0])&&
            (card.floor <=cards.floor[1] && card.floor>=cards.floor[0]) &&
            ((card.price/1000)<=cards.price[1] && (card.price/1000)>=cards.price[0])
        )
        if (cards.decor===true)
            filteredCards = filteredCards.filter(room => (room.decor==true))
        let filteredRooms =[]
        cards.rooms.forEach( item => {
            let onceFilter = filteredCards.filter( card => (card.rooms ===item))
            filteredRooms =[...filteredRooms, ...onceFilter]
        })

        if (cards.rooms.length===0) {
            return filteredCards
        } else {
            return filteredRooms
        }

    }
)

const CardList = () => {
    let filteredCards = data
    filteredCards = useSelector(selectFilter)


    return (
        <section className="catalog">

            <div className="container">
                <h1 className="catalog__title">
                    Подбор по параметрам
                </h1>
                <div className="catalog__inner">
                    <div className="filter-wrapper">
                        <Filter filteredCards={filteredCards}/>
                    </div>
                    <div className="catalog__grid">
                        <Card filteredCards={filteredCards}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CardList