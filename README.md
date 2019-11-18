# hook-form :bug: #

React form component with common inputs, build with 16.3^ React hooks.

## Example usage ##

See the [live examples](https://tapsaman.github.io/hook-form/).

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

## API ##

### HookForm props ###

Name 		| Type	| Description 					| Default
------------|-------|-------------------------------|--------
disabled	| bool	| Disables all inputs if true	|
buttons		| node	| Footer buttons				| ```<button type="submit">Submit</button>```
onChange	| func	| Runs with the form output lookup as a parameter on every change | 
onSuccess	| func	| Runs with the form output lookup as a parameter on successful submit | 

### Common input props ###

Props consumed by the InputWrap component.

Name 			| Type	| Description 					| Default
----------------|-------|-------------------------------|--------
fkey			| string| Singular form input ID 		| *Required*
disabled		| bool	| Disables the input if true
label			| node	| Label on the input row
hint			| node	| Shown atop the input
defaultValue	| any	| Default value
wrapClassName	| string| Passed to the wrapping InputRow component
validate		| func	| [Input validation function](#input-validation)

### Input validation ###

All HookForm inputs accept a ```validate``` function property. This will be run whenever the input value is changed (or whenever the ```onChange``` function passed from InputWrap is run in the underlying input component).

```validate``` will be run with parameters
* **value:** the new input value
* **fkey:** component's ```fkey``` property
* **inputLookup:** form output lookup, where each input fkey corresponds to an object with current ``value`` and `isValid` properties

The validation function *should always return an object* that may define proerties:

Name 		| Type	| Description 					
------------|-------|------------
pass		| bool 	| Whether the validation passes and the input value is deemed valid
message		| node	| Shown below the input until next validation
newValue	| any	| Overwrites the input value

## Roadmap ##

:ballot_box_with_check: Migrate from a previous React.Component -class based implementation

:black_square_button: Write tests

:black_square_button: Finish readme and examples

:black_square_button: Add option for lazy validation

:black_square_button: Validation callbacks
