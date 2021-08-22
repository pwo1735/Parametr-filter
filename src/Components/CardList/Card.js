import React from 'react'

const Card = (props) => {
    const renderList = props.filteredCards.map((card) => {
        const imgUrl = 'https://hals-development.ru/' + card.plan
        const style = {
            backgroundImage: 'url(' + imgUrl + ')'
        }
        let badrooms
        if (card.rooms === '0' || card.rooms > 4) {
            badrooms = 'спален'
        } else if (card.rooms === '1') {
            badrooms = 'спальня'
        } else {
            badrooms = 'спальни'
        }

        return (
            <div className="catalog__item" key = {card.id}>

                <div className="catalog__item-img" style={style}>
                </div>
                <div className="catalog__item-content">
                    <div className="catalog__item-info">
                        № {card.number} / Корпус {card.block} / Секция {card.section} / {card.floor} Этаж
                    </div>
                    <div className="catalog__item-about">
                        {card.rooms} {badrooms} / {card.square} м<sup>2</sup>
                    </div>
                    <div className="catalog__item-price">
                        { Math.floor(card.price)} ₽
                    </div>
                    <div className="catalog__item-desc">
                        {card.decor === '1' && <div className="catalog__desc-item">Возможна отделка</div> }
                    </div>

                </div>
            </div>
        )
    })
    return <> {renderList}</>
}
export default Card
