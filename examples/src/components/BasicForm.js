import React, { useState } from "react"

import HookForm, { TextInput, InputTable } from "../../../src"

function BasicForm(props) {
	const [lazyLen, setLazyLen] = useState(0)
	const [immediateLen, setImmediateLen] = useState(0)

	return (
		<HookForm
			{...props}
			buttons={null}
			>
			<div>
				{/*
					Inputs can be anywhere as long as
					they are wrapped by a HookForm component
				*/}
				<InputTable>
					<TextInput
						fkey="lazy"
						label="Lazy check"
						validate={value =>
						{
							setLazyLen(value.length)
							return { pass: true }
						}}
						hint={"Length: " + lazyLen}
						placeholder="Write something here"
						/>
					<TextInput
						fkey="immediate"
						label="Immediate check"
						immediate={true}
						validate={value =>
						{
							setImmediateLen(value.length)
							return { pass: true }
						}}
						hint={"Length: " + immediateLen}
						placeholder="Write something here"
						/>	
				</InputTable>
			</div>
		</HookForm>
	)
}

const basicFormCode = 'function BasicForm(props) {\n\
	const [lazyLen, setLazyLen] = useState(0)\n\
	const [immediateLen, setImmediateLen] = useState(0)\n\
\n\
	return (\n\
		<HookForm\n\
			{...props}\n\
			buttons={null}\n\
			>\n\
			<InputTable>\n\
				<TextInput\n\
					fkey="lazy"\n\
					label="Lazy check"\n\
					validate={value =>\n\
					{\n\
						setLazyLen(value.length)\n\
						return { pass: true }\n\
					}}\n\
					hint={"Length: " + lazyLen}\n\
					/>\n\
				<TextInput\n\
					fkey="immediate"\n\
					label="Immediate check"\n\
					immediate={true}\n\
					validate={value =>\n\
					{\n\
						setImmediateLen(value.length)\n\
						return { pass: true }\n\
					}}\n\
					hint={"Length: " + immediateLen}\n\
					/>	\n\
			</InputTable>\n\
		</HookForm>\n\
	)\n\
}'

export default BasicForm
export { basicFormCode }