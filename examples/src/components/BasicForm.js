import React from "react"

import HookForm from "../../../src"

function BasicForm(props) {
	return (
		<HookForm {...props}>
			<p>this is the basic form example</p>
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