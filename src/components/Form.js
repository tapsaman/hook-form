import React from "react"
import PropTypes from "prop-types"

import { FormContextProvider } from "../context"
import InputGroup from "./InputGroup"
import "../style.css"

function Form({ disabled, buttons, children, onChange, onSuccess }) {
	const handleSubmit = e => { e.preventDefault() }

	return (
		<form className="hook-form" onSubmit={handleSubmit}>
			<input
				type="text"
				onChange={e => onChange(e.target.value)}
				defaultValue="derp"
				/>

			<FormContextProvider value={{
				disabled,
			}}
				>
				<InputGroup>
					{children}
				</InputGroup>
			</FormContextProvider>
			<fieldset className="buttons-container" disabled={disabled}>
				{buttons}
			</fieldset>
		</form>
	)
}

Form.propTypes = {
	lazyValidation:	PropTypes.bool,
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