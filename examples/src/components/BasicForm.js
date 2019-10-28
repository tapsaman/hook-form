import React from "react"

import HookForm, { TextInput, InputTable } from "../../../src"

function BasicForm(props) {
	return (
		<HookForm
			{...props}
			buttons={null}
			>
			<h4>Create user</h4>
			<InputTable>
				<TextInput
					fkey="username"
					label="User name"
					defaultValue="Petteri"
					maxLength={15}
					/>
				<TextInput
					fkey="email"
					label="Email address"
					type="email"
					validate={value =>
					{
						if (value && !/\S+@\S+\.\S+/.test(value))
							return { pass: false, message: "Not a valid email address" }
						
						return { pass: true }
					}}
					/>
				<TextInput
					fkey="number"
					label="Age"
					placeholder="Write your age (0-100)"
					defaultValue="-5"
					validate={value => {
						if (isNaN(value))
							return { pass: false, message: "Value is not a number" }
						if (value < 0)
							return { message: "Value can't be negative" }
						if (value > 100)
							return { pass: false, message: "Value can't be over 100" }
						
						return { pass: true, newValue: value + " years" }
					}}
					/>
			</InputTable>
		</HookForm>
	)
}

const basicFormCode = "function BasicForm(props) {\n\
	return (\n\
		<HookForm {...props}>\n\
			<p>this is the basic form example</p>\n\
		</HookForm>\n\
	)\n\
}"

export default BasicForm
export { basicFormCode }