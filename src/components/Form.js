import React from "react"
import PropTypes from "prop-types"

import { FormContextProvider } from "../context"
import InputGroup from "./InputGroup"
import "../style.css"

function Form({ disabled, buttons, children, onChange, onSuccess }) {
	const handleSubmit = e => { e.preventDefault() }

	return (
		<form className="hook-form" onSubmit={handleSubmit}>
			<h1>hello</h1>

			<input type="text" onChange={onChange} defaultValue="gaaay" />

			<FormContextProvider value={{
				disabled,
			}}
				>
				{children}
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