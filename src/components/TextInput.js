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
			if (editValue !== null) {
				onChange(editValue)
				setEditValue(null)
			}
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

export default withInputWrap(
	TextInput,
	{ defaultValue: "" }
)