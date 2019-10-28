import React, { Fragment } from "react"
import PropTypes from "prop-types"

import { withInputWrap } from "./InputWrap"
import TextInput from "./TextInput"
import { useFormContext } from "../context"

function PasswordInput({ showButton, hideButton, ...inputProps }) {
	const { showPasswords, toggleShowPasswords, disabled } = useFormContext()

	return (
		<Fragment>
			{toggleShowPasswords
				?	React.cloneElement(
					showPasswords ? hideButton : showButton, 
					{
						disabled:	disabled,
						onCĺick:	toggleShowPasswords,
						...inputProps
					})
				:	null
			}
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
	showButton:			<button>Show</button>,
	hideButton:			<button>Hide</button>
}

export default PasswordInput
export const FormTextInput = withInputWrap(
	PasswordInput,
	{
		defaultValue: "",
		wrapClassName: "password-input"
	}
)