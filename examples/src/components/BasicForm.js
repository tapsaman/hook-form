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
						placeholder="Do not write numbers here!"
						validate={value =>
						{
							setLazyLen(value.length)

							if (/\d/.test(value))
								return { pass: false, message: "No numbers allowed" }

							return { pass: true }
						}}
						hint={"Length: " + lazyLen}
						/>
					<TextInput
						fkey="immediate"
						label="Immediate check"
						immediate={true}
						placeholder="Do not write numbers here!"
						validate={value =>
						{
							setImmediateLen(value.length)

							if (/\d/.test(value))
								return { pass: false, message: "No numbers allowed" }

							return { pass: true }
						}}
						hint={"Length: " + immediateLen}
						/>	
				</InputTable>
			</div>
		</HookForm>
	)
}

const basicFormCode = "function BasicForm(props) {\n\
	const [lazyLen, setLazyLen] = useState(0)\n\
	const [immediateLen, setImmediateLen] = useState(0)\n\
\n\
	return (\n\
		<HookForm\n\
			{...props}\n\
			buttons={null}\n\
			>\n\
			<div>\n\
				{/*\n\
					Inputs can be anywhere as long as\n\
					they are wrapped by a HookForm component\n\
				*/}\n\
				<InputTable>\n\
					<TextInput\n\
						fkey=\"lazy\"\n\
						label=\"Lazy check\"\n\
						placeholder=\"Do not write numbers here!\"\n\
						validate={value =>\n\
						{\n\
							setLazyLen(value.length)\n\
\n\
							if (/\\d/.test(value))\n\
								return { pass: false, message: \"No numbers allowed\" }\n\
\n\
							return { pass: true }\n\
						}}\n\
						hint={\"Length: \" + lazyLen}\n\
						/>\n\
					<TextInput\n\
						fkey=\"immediate\"\n\
						label=\"Immediate check\"\n\
						immediate={true}\n\
						placeholder=\"Do not write numbers here!\"\n\
						validate={value =>\n\
						{\n\
							setImmediateLen(value.length)\n\
\n\
							if (/\\d/.test(value))\n\
								return { pass: false, message: \"No numbers allowed\" }\n\
\n\
							return { pass: true }\n\
						}}\n\
						hint={\"Length: \" + immediateLen}\n\
						/>	\n\
				</InputTable>\n\
			</div>\n\
		</HookForm>\n\
	)\n\
}"


export default BasicForm
export { basicFormCode }