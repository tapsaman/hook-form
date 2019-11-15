import React from "react"

import HookForm, { TextInput, InputTable, PasswordInput } from "../../../src"

function validateUsername(value) {
	if (!value)
		return {
			pass: false,
			message: "A value is required"
		}

	if (/\s/.test(value))
		return {
			pass: true,
			message: "No spaces allowed",
			warn: true,
			newValue: value.replace(/\s/g, "")
		}
	
	return { pass: true }
}

function validateEmail(value) {
	if (value && !/\S+@\S+\.\S+/.test(value))
		return {
			pass: false,
			message: "Not a valid email address"
		}
	
	return { pass: true }
}

function validatePassword(value) {
	if ([/[a-z]/, /[A-Z]/, /[0-9]/].find(rx => !rx.test(value)))
		return {
			pass: false,
			message: "Password must include lowercase/uppercase characters and numbers"
		}

	return { pass: true }
}

function validatePasswordConfirm(value, fkey, inputs) {
	/*
		If you want to reference any other form inputs,
		always check first that those inputs have a reference (= are mounted)!
	*/
	if (!inputs.password)
		return { pass: false }

	if (value !== inputs.password.value)
		return {
			pass: false,
			message: "Passwords do not match"
		}

	return { pass: true }
}

function ValidatedForm(props) {
	return (
		<HookForm
			{...props}
			buttons={null}
			>
			<InputTable>
				<TextInput
					fkey="username"
					label="User name"
					maxLength={15}
					validate={validateUsername}
					/>
				<TextInput
					fkey="email"
					label="Email address"
					type="email"
					validate={validateEmail}
					/>
				<PasswordInput
					fkey="password"
					label="Password"
					validate={validatePassword}
					/>
				<PasswordInput
					fkey="password2"
					label="Password again"
					validate={validatePasswordConfirm}
					/>
			</InputTable>
		</HookForm>
	)
}

const validatedFormCode = 'function ValidatedForm(props) {\n\
	return (\n\
		<HookForm\n\
			{...props}\n\
			buttons={null}\n\
			>\n\
			<InputTable>\n\
				<TextInput\n\
					fkey="username"\n\
					label="User name"\n\
					maxLength={15}\n\
					validate={value =>\n\
					{\n\
						if (!value)\n\
							return {\n\
								pass: false,\n\
								message: "A value is required"\n\
							}\n\
\n\
						if (/\\s/.test(value))\n\
							return {\n\
								pass: true,\n\
								message: "No spaces allowed",\n\
								warn: true,\n\
								newValue: value.replace(/\\s/g, "")\n\
							}\n\
						\n\
						return { pass: true }\n\
					}}\n\
					/>\n\
				<TextInput\n\
					fkey="email"\n\
					label="Email address"\n\
					type="email"\n\
					validate={value =>\n\
					{\n\
						if (value && !/\\S+@\\S+\\.\\S+/.test(value))\n\
							return {\n\
								pass: false,\n\
								message: "Not a valid email address"\n\
							}\n\
						\n\
						return { pass: true }\n\
					}}\n\
					/>\n\
				<PasswordInput\n\
					fkey="password"\n\
					label="Password"\n\
					validate={value =>\n\
					{\n\
						if ([/[a-z]/, /[A-Z]/, /[0-9]/].find(rx => !rx.test(value)))\n\
							return {\n\
								pass: false,\n\
								message: "Password must include lowercase/uppercase characters and numbers"\n\
							}\n\
\n\
						return { pass: true }\n\
					}}\n\
					/>\n\
				<PasswordInput\n\
					fkey="password2"\n\
					label="Password again"\n\
					validate={(value, fkey, inputs) =>\n\
					{\n\
						if (inputs.password && value !== inputs.password.value)\n\
							return {\n\
								pass: false,\n\
								message: "Passwords do not match"\n\
							}\n\
\n\
						return { pass: true }\n\
					}}\n\
					/>\n\
			</InputTable>\n\
		</HookForm>\n\
	)\n\
}'

export default ValidatedForm
export { validatedFormCode }