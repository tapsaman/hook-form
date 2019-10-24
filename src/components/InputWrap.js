import React, { useState, useEffect } from "react"
import { useFormContext } from "../context"

function useMessageState() {
	const [message, setMessage] = useState()
	const setValidationMessage = (validation, prevMessage) => {
		if (validation.message) {
			setMessage({
				message:	_message,
				type:		!validation.pass
					?	"error"
					:	validation.warn
						?	"warning"
						:	"success"
			})
		}
		else if (prevMessage) {
			setMessage()
		}
	}

	return { message, setValidationMessage }
}


function InputWrap({ fkey, defaultValue, disabled, validate, required, doNotStore, ...inputProps }) {
	const { inputs, defaultValues, inputInit, inputDeinit, inputChange, globalkey } = useFormContext()
	const { message, setValidationMessage } = useMessageState()

	const value = inputs[fkey].value !== undefined
		?	inputs[fkey].value
		:	(defaultValues && defaultValues[fkey] !== undefined
			?	defaultValues[fkey]
			:	defaultValue)

	const isValid = inputs[fkey].isValid
	
	useEffect(
		() => inputInit(fkey, {
			value,
			doNotStore,
			globalkey:	globalkey + "." + fkey
		}),
		[fkey, doNotStore, globalkey]
	)
	useEffect(
		() => () => inputDeinit(fkey),
		[fkey]
	)

	return (
		<InputRow
			label={label}
			message={message}
			//className={wrapClassName}
			required={required}
			hint={hint}
			>
			{React.cloneElement(children, {
				value:		value,
				label:		label,
				disabled:	disabled,
				onChange:	_value => {
					let _isValid = true

					if (validate) {
						const validation = validate(_value, fkey, inputs)

						setValidationMessage(validation, message)

						_isValid = validation.pass

						if ("newValue" in validation)
							_value = validation.newValue
					}
					else if (required && _value === undefined) {
						setMessage({ type: "error", message: "Value is required" })

						_isValid = false
					}

					if (_value !== value || _isValid !== isValid)
						inputChange(fkey, {
							value:		_value,		
							isValid:	_isValid
						})
				},
				...inputProps
			})}
		</InputRow>
	)
}

InputWrap.propTypes = {
	fkey:			PropTypes.string.isRequired,
	defaultValue:	PropTypes.any,
	validate:		PropTypes.func,
	disabled:		PropTypes.bool,
	required:		PropTypes.bool,
	doNotStore:		PropTypes.bool
}

const inputProps = {
	_isInputState:	true,
	doNotStore:		false,
	isValid:		false,
	value:			undefined
}

/*
const { forwardRef, useRef, useImperativeHandle } = React;

// We need to wrap component in `forwardRef` in order to gain
// access to the ref object that is assigned using the `ref` prop.
// This ref is passed as the second parameter to the function component.
const Child = forwardRef((props, ref) => {

  // The component instance will be extended
  // with whatever you return from the callback passed
  // as the second argument
  useImperativeHandle(ref, () => ({

    getAlert() {
      alert("getAlert from Child");
    }

  }));

  return <h1>Hi</h1>;
});

const Parent = () => {
  // In order to gain access to the child component instance,
  // you need to assign it to a `ref`, so we call `useRef()` to get one
  const childRef = useRef();

  return (
    <div>
      <Child ref={childRef} />
      <button onClick={() => childRef.current.getAlert()}>Click</button>
    </div>
  );
};

ReactDOM.render(
  <Parent />,
  document.getElementById('root')
);
*/