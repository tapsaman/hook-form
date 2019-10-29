import React, { Fragment } from "react"
import PropTypes from "prop-types"

import { withInputWrap } from "./InputWrap"
import TextInput from "./TextInput"
import { useFormContext } from "../context"

function PasswordInput({ showButton, hideButton, ...inputProps }) {
	const { showPasswords, toggleShowPasswords, disabled } = useFormContext()

	return (
		<Fragment>
			<div className="toggle-cont">
				{toggleShowPasswords
					?	React.cloneElement(
						showPasswords ? hideButton : showButton, 
						{
							disabled:	disabled,
							onClick:	toggleShowPasswords,
							...inputProps
						})
					:	null
				}
			</div>
			<TextInput
				{...inputProps}
				disabled={disabled}
				type={showPasswords ? "text" : "password"}
				/>
		</Fragment>
	)
}

PasswordInput.propTypes = {
	showButton:			PropTypes.node,
	hideButton:			PropTypes.node
}

PasswordInput.defaultProps = {
	showButton:			<button className="show-password-toggle">Show</button>,
	hideButton:			<button className="show-password-toggle">Hide</button>
}

export default PasswordInput
export const FormPasswordInput = withInputWrap(
	PasswordInput,
	{
		defaultValue: "",
		wrapClassName: "password-input"
	}
)