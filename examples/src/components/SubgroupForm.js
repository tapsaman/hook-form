import React from "react"

import HookForm, { TextInput, InputGroup, InputTable, PasswordInput } from "../../../src"

function SubgroupForm(props) {
	return (
		<HookForm
			{...props}
			buttons={null}
			>
			<TextInput
				fkey="root_input"
				label="Root input"
				maxLength={15}
				/>
			<InputGroup
				fkey="subgroup"
				>
				<TextInput
					fkey="subgroup_input"
					label="Subgroup input"
					maxLength={15}
					/>
			</InputGroup>
		</HookForm>
	)
}

const subgroupFormCode = "function SubgroupForm(props) {\n\
	return (\n\
		<HookForm\n\
			{...props}\n\
			buttons={null}\n\
			>\n\
			<TextInput\n\
				fkey=\"root_input\"\n\
				label=\"Root input\"\n\
				maxLength={15}\n\
				/>\n\
			<InputGroup>\n\
				<TextInput\n\
					fkey=\"subgroup_input\"\n\
					label=\"Subgroup input\"\n\
					maxLength={15}\n\
					/>\n\
			</InputGroup>\n\
		</HookForm>\n\
	)\n\
}"

export default SubgroupForm
export { subgroupFormCode }