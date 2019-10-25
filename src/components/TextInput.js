import React, { useState } from "react"
import PropTypes from "prop-types"

import { withInputWrap } from "./InputWrap"

function TextInput({ immediate, value, onChange, ...inputProps }) {
	const [editValue, setEditValue] = useState(null)

	value = editValue === null ? value : editValue

	const onWrite = immediate
		?	e => onChange(e.currentTarget.value)
		:	e => setEditValue(e.currentTarget.value)

	const onBlur = immediate
		?	undefined
		:	() => {
			onChange(editValue)
			setEditValue(null)
		}

	const onKeyDown = immediate
		?	undefined
		:	e => e.key === "Enter" && onBlur()

	return (
		<input
			{...inputProps}
			value={value}
			onChange={onWrite}
			onBlur={onBlur}
			onKeyDown={onKeyDown}
			/>
	)
}

TextInput.propTypes = {
	value:				PropTypes.string,
	type:				PropTypes.string,
	immediate:			PropTypes.bool,
	onChange:			PropTypes.func
}

TextInput.defaultProps = {
	value:				"",
	type:				"text",
	immediate:			false
}

export class __TextInput extends React.Component {
	
	static propTypes = {
		value:				PropTypes.string,
		type:				PropTypes.string,
		immediate:			PropTypes.bool,
		onChange:			PropTypes.func
	}

	static defaultProps = {
		value:				"",
		type:				"text",
		immediate:			false
	}

	constructor(props) {
		super(props)

		this.state = {
			value:		props.value,
			editing:	false
		}
	}

	render()
	{
		const { immediate, ...inputProps } = this.props
		
		const value = this.state.editing
			?	this.state.value
			:	this.props.value

		return (
			<input
				{...inputProps}
				value={value}
				onChange={this.write}
				onBlur={immediate ? undefined : this.blur}
				onKeyDown={immediate ? undefined : this.keyDown}
				/>
		)
	}

	write = e => {
		const { immediate, onChange } = this.props
		const value = e.currentTarget.value

		if (immediate) {
			onChange(value)
		}
		else {
			this.setState({
				editing:	true,
				value:		value
			})
		}
	}

	blur = () => {
		const { onChange } = this.props

		onChange(this.state.value)

		this.setState({
			editing: false
		})
	}

	keyDown = e => {
		if (e.key === "Enter")
			this.blur()
	}
}

export default withInputWrap(
	TextInput,
	{ defaultValue: "" }
)