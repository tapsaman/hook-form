# hook-form :bug: #

React form component with common inputs, build with 16.3^ React hooks.

## Example usage ##

```JSX
import HookForm, { TextInput, PasswordInput, InputTable } from "hook-form"

function BasicForm(props) {
	const { submit } = props

	return (
		<HookForm onSuccess={submit}>
			<div className="some-important-container">
				{/*
					Inputs can be anywhere as long as
					they are wrapped by a HookForm component
				*/}
				<InputTable>
					<TextInput
						fkey="lazy"
						label="Username"
						/>
					<PasswordInput
						fkey="immediate"
						label="Password"
						/>	
				</InputTable>
			</div>
		</HookForm>
	)
}
```

## Roadmap ##

:ballot_box_with_check: Migrate from a previous React.Component -class based implementation

:black_square_button: Write tests

:black_square_button: Finish readme and examples

:black_square_button: Add option for lazy validation
