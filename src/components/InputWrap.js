import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

import { useFormContext } from "../context"
import InputRow from "./InputRow"

function useMessageState() {
	const [message, setMessage] = useState()
	const setValidationMessage = (validation, prevMessage) => {
		if (validation.message) {
			setMessage({
				text:	validation.message,
				type:	!validation.pass
					?	"error"
					:	validation.warn
						?	"warning"
						:	"success"
			})
		}
		else if (prevMessage) {
			setMessage()
		}
	}

	return { message, setValidationMessage }
}

function InputWrap({ fkey, label, defaultValue, disabled, validate, doNotStore, wrapClassName, hint, children, ...inputProps }) {
	const { inputs, defaultValues, inputInit, inputDeinit, inputChange, globalkey } = useFormContext()
	const { message, setValidationMessage } = useMessageState()

	const input = inputs[fkey]

	const value = input && input.value !== undefined
		?	input.value
		:	(defaultValues && defaultValues[fkey] !== undefined
			?	defaultValues[fkey]
			:	defaultValue)

	const isValid = input && input.isValid
	
	useEffect(
		() => inputInit(fkey, {
			value,
			doNotStore,
			isValid:		validate ? !!validate(value, fkey, inputs).pass : true,
			//globalkey:	globalkey + "." + fkey
		}),
		[fkey, doNotStore, globalkey]
	)

	useEffect(
		() => () => inputDeinit(fkey),
		[fkey]
	)

	const onChange = _value => {
		let _isValid = true

		if (validate) {
			const validation = validate(_value, fkey, inputs)

			setValidationMessage(validation, message)

			_isValid = !!validation.pass

			if ("newValue" in validation)
				_value = validation.newValue
		}

		if (_value !== value || _isValid !== isValid)
			inputChange(fkey, {
				value:		_value,		
				isValid:	_isValid
			})
	}

	return (
		<InputRow
			label={label}
			message={message}
			className={wrapClassName}
			hint={hint}
			>
			{React.cloneElement(children, {
				value:		value,
				label:		label,
				disabled:	disabled,
				onChange:	onChange,
				...inputProps
			})}
		</InputRow>
	)
}

InputWrap.propTypes = {
	fkey:			PropTypes.string.isRequired,
	defaultValue:	PropTypes.any,
	label:			PropTypes.node,
	hint:			PropTypes.node,
	validate:		PropTypes.func,
	disabled:		PropTypes.bool,
	doNotStore:		PropTypes.bool,
	wrapClassName:	PropTypes.string,
	children:		PropTypes.node
}

const inputProps = {
	_isInputState:	true,
	doNotStore:		false,
	isValid:		false,
	value:			undefined
}

function withInputWrap(Input, defaultWrapProps) {
	return function WrappedInput(props) {
		return (
			<InputWrap
				{...defaultWrapProps}
				{...props}
				>
				<Input />
			</InputWrap>
		)
	}
}

export default InputWrap
export { withInputWrap }