import React, { useState } from "react"
import PropTypes from "prop-types"

import { FormContextProvider } from "../context"
import InputGroup from "./InputGroup"

function preventEventDefault(e) {
	e.preventDefault()
}

function Form({ disabled, buttons, children, onChange }) {
	const [showPasswords, setShowPasswords] = useState(false)
	const toggleShowPasswords = () => setShowPasswords(!showPasswords)

	return (
		<form
			className="hook-form"
			onSubmit={preventEventDefault}
			>
			<FormContextProvider
				value={{
					inputChange:	(fkey, inputs) => onChange(inputs),
					globalkey:		"form",
					disabled,
					toggleShowPasswords,
					showPasswords
				}}
				>
				<InputGroup
					fkey="@@@__form_root"
					>
					{children}
				</InputGroup>
			</FormContextProvider>
			{buttons
				?	<fieldset
						className="buttons-container"
						disabled={disabled}
						>
						{buttons}
					</fieldset>
				:	null
			}
		</form>
	)
}

Form.propTypes = {
	disabled:		PropTypes.bool,
	buttons:		PropTypes.node,
	children:		PropTypes.node,
	onChange:		PropTypes.func,
	onSuccess:		PropTypes.func
}

Form.defaultProps = {
	buttons:		<button type="submit">Submit</button>
}

export default Form