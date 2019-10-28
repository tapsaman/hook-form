import React from "react"

import HookForm from "../../../src"
import TextInput from "../../../src/components/TextInput"

function BasicForm(props) {
	return (
		<HookForm
			{...props}
			buttons={null}
			>
			<p>this is the basic form example</p>
			<TextInput
				fkey="test"
				label="TEST"
				defaultValue="TEST_VALUE"
				/>
			<TextInput
				fkey="number"
				label="Age"
				placeholder="Write your age (0-100)"
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