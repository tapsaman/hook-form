import React from "react"
import PropTypes from "prop-types"

import { FormContextProvider } from "../context"
import InputGroup from "./InputGroup"

function Form({ disabled, buttons, children, onChange, onSuccess }) {
	const handleSubmit = e => { e.preventDefault() }

	return (
		<form
			className="hook-form"
			onSubmit={handleSubmit}
			>
			<FormContextProvider
				value={{
					disabled,
					inputChange:	onChange,
					globalkey:		"form",
				}}
				>
				<InputGroup
					fkey="@__form_root"
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