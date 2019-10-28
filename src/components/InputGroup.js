import React, { useReducer, useMemo } from "react"
import PropTypes from "prop-types"

import { FormContextProvider, useFormContext } from "../context"

const INPUT_INIT = "INPUT_INIT"
const INPUT_DEINIT = "INPUT_DEINIT"
const INPUT_CHANGE = "INPUT_CHANGE"

function inputGroupStateReducer(current, action) {
	console.log("CURRENT", current)
	console.log("ACTION", action)

	switch (action.type) {

	case INPUT_INIT:
		return {
			...current,
			[action.fkey]:	action.props
		}

	case INPUT_CHANGE:
		return {
			...current,
			[action.fkey]:	{
				...current[action.fkey],
				...action.props
			}
		}
	
	case INPUT_DEINIT:
		return {
			...current,
			[action.fkey]:	undefined
		}

	default:
		return current

	}
}

function useInputGroupReducer() {
	const [groupInputs, dispatch] = useReducer(inputGroupStateReducer, {})

	return {
		groupInputs,
		groupInputInit:		(fkey, props) => dispatch({ type: INPUT_INIT, fkey, props }),
		groupInputChange:	(fkey, props) => dispatch({ type: INPUT_CHANGE, fkey, props }),
		groupInputDeinit:	(fkey) => dispatch({ type: INPUT_DEINIT, fkey })
	}
}

function InputGroup({ fkey, children }) {
	const {
		groupInputs,
		groupInputInit,
		groupInputDeinit,
		groupInputChange
	} = useInputGroupReducer()

	console.log("InputGroup render", groupInputs)

	const { inputs, defaultValues, inputInit, inputDeinit, inputChange, globalkey } = useFormContext()
	
	useMemo(() => inputChange(groupInputs), [groupInputs])

	return (
		<FormContextProvider value={{
			//defaultValues,
			inputs:			groupInputs,
			inputInit:		groupInputInit,
			inputDeinit:	groupInputDeinit,
			inputChange:	groupInputChange,
			globalkey:		globalkey + "." + fkey
		}}
			>
			{children}
		</FormContextProvider>
	)
}

InputGroup.propTypes = {
	fkey:		PropTypes.string.isRequired,
	children:	PropTypes.node
}

export default InputGroup