import React, {useState} from "react"
import {RangeSliderSquare, RangeSliderFloor, RangeSliderPrice} from "./rangeSlider";
import {useDispatch, useSelector} from "react-redux"
import {setRooms, setDecor} from "../redux/actions/filterActions";
import {animateScroll as scroll} from 'react-scroll'

const Filter = (props) => {

	const [isClicked1, setIsClicked1] = useState(false)
	const [isClicked2, setIsClicked2] = useState(false)
	const [isClicked3, setIsClicked3] = useState(false)
	const [isClicked4, setIsClicked4] = useState(false)
	const [isClicked5, setIsClicked5] = useState(false)
	const [isClicked6, setIsClicked6] = useState(false)
	const dispatch = useDispatch()
	const square = useSelector(state => state.filter.square)
	const floor = useSelector(state => state.filter.floor)
	const price = useSelector(state => state.filter.price)
	function handleClick  (event) {
		event.preventDefault()
		dispatch(setRooms(event.target.value))

	}
	function handleClickDecor  (event) {
		event.preventDefault()
		dispatch(setDecor())

	}

	function scrollToTop (event) {
		event.preventDefault()
		scroll.scrollToTop()
	}
	return (

		<div className="filter">
			<form className="filter__form" name="filter__form">
				<div className="filter-item filter-area">
					<h5 className="filter-item__title">
						Площадь, м<sup>2</sup>
					</h5>
					<div className="filter-item__fromto">
						<div className="from">от {square[0]}</div>
						<div className="to">до {square[1]}</div>
					</div>
					<RangeSliderSquare min={44} max={129} defaultValue={[44, 129]} />
				</div>
				<div className="filter-item filter-floor">
					<h5 className="filter-item__title">
						Этаж, м<sup>2</sup>
					</h5>
					<div className="filter-item__fromto">
						<div className="from">от {floor[0]}</div>
						<div className="to">до {floor[1]}</div>
					</div>
					<RangeSliderFloor min={1} max={15} defaultValue={[1, 15]}/>
				</div>
				<div className="filter-item filter-price">
					<h5 className="filter-item__title">
						Стоимость, млн. ₽
					</h5>
					<div className="filter-item__fromto">
						<div className="from">от {price[0]}</div>
						<div className="to">до {price[1]}</div>
					</div>
					<RangeSliderPrice min={12491} max={50000} defaultValue={[12491, 50000]}/>
				</div>
				<div className="filter-item filter-rooms">
					<h5 className="filter-rooms__title">Спален</h5>
					<div className="filter-rooms__inner">
					<button value={1} className={ isClicked1 ? "filter-rooms__btn--active" : "filter-rooms__btn" } onClick={(event) => {handleClick(event); setIsClicked1(!isClicked1)}}  >
						1
					</button>
					<button value={2} className={  isClicked2 ? "filter-rooms__btn--active" : "filter-rooms__btn" } onClick={(event) => {handleClick(event); setIsClicked2(!isClicked2)}}>
						2
					</button>
					<button value={3} className={  isClicked3 ? "filter-rooms__btn--active" : "filter-rooms__btn" } onClick={(event) => {handleClick(event); setIsClicked3(!isClicked3)}}>
						3
					</button>
					<button value={4} className={ isClicked4 ?  "filter-rooms__btn--active" : "filter-rooms__btn" } onClick={(event) => {handleClick(event); setIsClicked4(!isClicked4)}}>
						4
					</button>
					<button value={5} className={  isClicked5 ? "filter-rooms__btn--active" : "filter-rooms__btn" } onClick={(event) => {handleClick(event); setIsClicked5(!isClicked5)}}>
						5
					</button>
					</div>

				</div>
				<div className="filter-item filter-decor">
					<button className={ isClicked6? "filter-decor__btn--active" : " filter-decor__btn"} onClick={(event) => {handleClickDecor(event); setIsClicked6(!isClicked6)}}>Возможна отделка</button>
				</div>

				<div className="filter__show-wrapper">
					<button className="filter__show" onClick={(event) => {scrollToTop(event)}}>
						Показать - {props.filteredCards.length}
					</button>
				</div>
			</form>

		</div>
	)


}

export default Filter