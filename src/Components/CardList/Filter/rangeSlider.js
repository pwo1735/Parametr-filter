import React from 'react'
import 'rc-slider/assets/index.css'
import Slider from 'rc-slider'
import './style.scss'
import { useDispatch } from 'react-redux'
import {setSquare, setFloor, setPrice} from "../redux/actions/filterActions";

const createSliderWithTooltip = Slider.createSliderWithTooltip
const Range = createSliderWithTooltip(Slider.Range)

export const RangeSliderSquare = (props) => {
	const dispatch = useDispatch()

	return (
		<div className="slider-filter">


			<Range
				min={props.min}
				max={props.max}
				allowCross={ false}
				defaultValue={props.defaultValue}
				tipFormatter={(value) => value}
				tipProps={{overlay: false}}
				onChange = {value => {dispatch(setSquare(value))
				}}

			/>

		</div>

	)
}

export const RangeSliderFloor = (props) => {
	const dispatch = useDispatch()
	return (
		<div className="slider-filter">

			<Range
				min={props.min}
				max={props.max}
				allowCross={ false}
				defaultValue={props.defaultValue}
				tipFormatter={value => value}
				tipProps={{overlay: false}}
				onChange = {value => {dispatch(setFloor(value))
				}}

			/>

		</div>
	)
}

export const RangeSliderPrice = (props) => {
	const dispatch = useDispatch()
	return (
		<div className="slider-filter">

			<Range
				min={props.min}
				max={props.max}
				allowCross={ false}
				defaultValue={props.defaultValue}
				tipFormatter={value => value}
				tipProps={{overlay: false}}
				onChange = {value => {dispatch(setPrice(value))
				}}
			/>

		</div>
	)
}